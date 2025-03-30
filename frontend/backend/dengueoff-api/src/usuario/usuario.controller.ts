/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unused-expressions */
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

@ApiTags('usuario')
@Controller('/usuarios')
export class UsuarioController {
  constructor(private classeUsuarioService: UsuarioService) {}

  @Post()
  @ApiResponse({
    status: 201,
    description: 'Retorna que houve sucesso ao criar um usuário',
  })
  @ApiBadRequestResponse({ description: 'Retorna que algum dado está errado' })
  criaUsuario(@Body() dadosUsuario: criaUsuarioDTO) {
    const novoUsuario = new UsuarioEntity(
      uuid(),
      dadosUsuario.nome,
      dadosUsuario.dataNasc,
      dadosUsuario.email,
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

  @Get()
  listaUsuarios() {
    this.classeUsuarioService.Usuarios;

    const usuariosListados = this.classeUsuarioService.Usuarios;
    const listaRetorno = usuariosListados.map(
      (usuario) => new ListaUsuarioDTO(usuario.id, usuario.nome, usuario.email),
    );

    return listaRetorno;
  }

  @Put('/:id')
  atualizaUsuario(
    @Param('id') id: string,
    @Body() novosDados: alteraUsuarioDTO,
  ) {
    const usuarioAtualizado = this.classeUsuarioService.atualizaUsuario(
      id,
      novosDados,
    );

    return {
      usuario: usuarioAtualizado,
      message: 'Usuario Atualizado',
    };
  }

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
