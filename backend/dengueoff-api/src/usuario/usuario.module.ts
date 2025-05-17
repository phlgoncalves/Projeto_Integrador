import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
import { EmailUnicoValidator } from './validacao/email-unico.validator';
import { usuarioProviders } from './usuario.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [UsuarioService, EmailUnicoValidator, ...usuarioProviders],
  controllers: [UsuarioController],
  exports: [UsuarioService]
})
export class UsuarioModule { }
