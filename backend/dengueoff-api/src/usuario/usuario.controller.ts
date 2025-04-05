import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { criaUsuarioDTO } from './DTO/usuario.dto';

import { v4 as uuid } from 'uuid';
import { UsuarioEntity } from './usuario.entity';
import { ListaUsuarioDTO } from './DTO/consulta.dto';
import { alteraUsuarioDTO } from './DTO/altera.usuario';
import { LoginUsuarioDto } from './DTO/loginUsuario.dto';

import { ApiBadRequestResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom, map } from 'rxjs';

@ApiTags('usuarios')
@Controller('/usuarios')
export class UsuarioController {
  constructor(private classeUsuarioService: UsuarioService, private httpService: HttpService) { }

  @ApiResponse({ status: 201, description: 'Retorna que houve sucesso ao criar um usuário' })
  @Post()
  @ApiResponse({
    status: 201,
    description: 'Retorna que houve sucesso ao criar um usuário',
  })
  @ApiBadRequestResponse({ description: 'Retorna que algum dado está errado' })
  async criaUsuario(@Body() dadosUsuario: criaUsuarioDTO) {
    var msgError = ''
    try {
      var retornoCep = await lastValueFrom(this.httpService
        .get(`https://viacep.com.br/ws/${dadosUsuario.cep}/json/`)
        .pipe(
          map((response) => response.data)
        ))
      if (retornoCep.error == 'true') {
        throw new Error('CEP não encontrado')
      }
    } catch (error) {
      msgError = 'Erro ao consultar o CEP, informa um CEP valido'
      return {
        message: msgError,
        status: 'Erro no cadastro do usuário'
      }
    }
    const novoUsuario = new UsuarioEntity(
      uuid(),
      dadosUsuario.nome,
      dadosUsuario.cpf,
      dadosUsuario.idade,
      dadosUsuario.email,
      dadosUsuario.cep,
      retornoCep.logradouro ? retornoCep.logradouro : '',
      dadosUsuario.complemento,
      retornoCep.localidade,
      dadosUsuario.telefone,
      dadosUsuario.senha,
    );

    this.classeUsuarioService.AdicionarUsuario(novoUsuario);

    const usuario = {
      dadosUsuario: novoUsuario,
      status: 'Usuario Criado',
    };

    return usuario;
  }

  @ApiResponse({ status: 200, description: 'Retorna que houve sucesso na requisição' })
  @ApiResponse({ status: 500, description: 'Retorna que o usuário não foi encontrado' })
  @Get()
  listaUsuarios() {
    this.classeUsuarioService.Usuarios;

    const usuariosListados = this.classeUsuarioService.Usuarios;
    const listaRetorno = usuariosListados.map(
      (usuario) => new ListaUsuarioDTO(usuario.id, usuario.nome, usuario.email),
    );

    return listaRetorno;
  }

  @ApiResponse({ status: 200, description: 'Retorna que houve sucesso na requisição' })
  @ApiResponse({ status: 500, description: 'Retorna que o usuário não foi encontrado' })
  @Put('/:id')
  async atualizaUsuario(
    @Param('id') id: string,
    @Body() novosDados: alteraUsuarioDTO,
  ) {
    var msgError = ''
    if (novosDados.cep) {
      try {
        var retornoCep = await lastValueFrom(this.httpService
          .get(`https://viacep.com.br/ws/${novosDados.cep}/json/`)
          .pipe(
            map((response) => response.data)
          ))
        if (retornoCep.erro) {
          retornoCep = null
          throw new Error('CEP não encontrado')
        }
      } catch (error) {
        msgError = ` | Erro ao buscar CEP - ${error.message}`
      }

      var dadosEndereco = {
        endereco: retornoCep ? retornoCep.logradouro : '',
        cidade: retornoCep ? retornoCep.localidade : '',
        cep: novosDados.cep
      }

      await this.classeUsuarioService.atualizaUsuario(id, dadosEndereco)
    }
    
    const usuarioAtualizado = this.classeUsuarioService.atualizaUsuario(
      id,
      novosDados,
    );

    return {
      usuario: usuarioAtualizado,
      message: 'Usuario Atualizado',
    };
  }

  @ApiResponse({ status: 200, description: 'Retorna que houve sucesso na requisição' })
  @ApiResponse({ status: 500, description: 'Retorna que o usuário não foi encontrado' })
  @Delete('/:id')
  removeUsuario(@Param('id') id: string) {
    const usuarioRemovido = this.classeUsuarioService.removeUsuario(id);

    return {
      usuario: usuarioRemovido,
      message: 'Usuario Removido',
    };
  }

  @Post('/login')
  login(@Body() dadosLogin: LoginUsuarioDto) {
    const login = this.classeUsuarioService.validarLogin(
      dadosLogin.email,
      dadosLogin.senha,
    );
    return {
      status: login.login,
      usuario: login.login ? login.usuario : null,
      message: login.login ? 'login efetuado' : 'usuario ou senha inválidos',
    };
  }
}
