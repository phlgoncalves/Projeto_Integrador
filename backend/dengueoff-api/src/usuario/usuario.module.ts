import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
import { HttpModule } from "@nestjs/axios";
import { EmailUnicoValidator } from './validacao/email-unico.validator';
import { usuarioProviders } from './usuario.providers';

@Module({
  imports: [HttpModule],
  providers: [UsuarioService, EmailUnicoValidator, ...usuarioProviders],
  controllers: [UsuarioController],
  exports: [UsuarioService]
})
export class UsuarioModule { }
