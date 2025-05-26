import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { criaUsuarioDTO } from './DTO/usuario.dto';

import { alteraUsuarioDTO } from './DTO/altera.usuario';
import { loginUsuarioDto } from './DTO/loginUsuario.dto';

import { ApiCreatedResponse, ApiResponse, ApiTags } from '@nestjs/swagger';
import { RetornoCadastroDTO } from 'src/dto/retorno.dto';
import { RetornoUsuarioDTO } from './DTO/retornoUsuario.dto';
import { USUARIO } from './usuario.entity';

@ApiTags('usuarios')
@Controller('/usuarios')
export class UsuarioController {
  constructor(private classeUsuarioService: UsuarioService) { }
  @Post()
  @ApiCreatedResponse({ description: 'Retorna que houve sucesso na inclusão' })
  @ApiResponse({ status: 500, description: 'Retorna que houve erro na inclusão.' })
  @ApiResponse({ status: 400, description: 'Retorna que há algum dado inválido na requisição.' })
  async criaUsuario(@Body() dadosUsuario: criaUsuarioDTO): Promise<RetornoCadastroDTO> {
    return this.classeUsuarioService.inserir(dadosUsuario)
  }

  @Post('/login')
  @ApiResponse({ status: 201, description: 'Retorna que houve sucesso na consulta' })
  @ApiResponse({ status: 400, description: 'Retorna que há algum dado inválido na requisição.' })
  async fazerLogin(@Body() dadosLogin: loginUsuarioDto) {
    var retornoLogin = await this.classeUsuarioService.Login(dadosLogin.EMAIL, dadosLogin.SENHA)

    var retorno = new RetornoUsuarioDTO(retornoLogin.status ? 'Login efetuado, sucesso' : 'Email ou senha invalidos!', retornoLogin.usuario);

    return retorno;

  }

  @Put('/:id')
  @ApiResponse({ status: 200, description: 'Retorna que houve sucesso na alteração' })
  @ApiResponse({ status: 500, description: 'Retorna que houve erro na alteração.' })
  @ApiResponse({ status: 400, description: 'Retorna que há algum dado inválido na requisição.' })
  async alteraUsuario(@Body() dadosNovos: alteraUsuarioDTO, @Param('id') id: string) {
    return this.classeUsuarioService.alterar(id, dadosNovos)
  }


  @Delete('/:id')
  @ApiResponse({ status: 200, description: 'Retorna que houve sucesso na exclusão' })
  @ApiResponse({ status: 500, description: 'Retorna que houve erro na exclusão.' })
  async removeUsuario(@Param('id') id: string) {
    return this.classeUsuarioService.remover(id);

  }


  @Get('ID/:id')
  @ApiResponse({ status: 200, description: 'Retorna que houve sucesso na exclusão' })
  @ApiResponse({ status: 500, description: 'Retorna que houve erro na exclusão.' })
  async retornaUsuarioId(@Param('id') id: string): Promise<USUARIO> {
    return this.classeUsuarioService.localizarID(id);
  }

  @Get('')
  @ApiResponse({ status: 200, description: 'Retorna que houve sucesso na consulta' })
  @ApiResponse({ status: 500, description: 'Retorna que houve erro na consulta.' })
  async listar(): Promise<USUARIO[]> {
    return this.classeUsuarioService.listar();
  }
}
