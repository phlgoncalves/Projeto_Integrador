import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
import { HttpModule } from "@nestjs/axios";
import { EmailUnicoValidator } from './validacao/email-unico.validator';
import { DenunciasService } from 'src/denuncia/denuncias.service';
import { DenunciaController } from 'src/denuncia/denuncia.controller';

@Module({
  imports: [HttpModule],
  providers: [UsuarioService, EmailUnicoValidator],
  controllers: [UsuarioController],
})
export class UsuarioModule { }
