import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
import { HttpModule } from "@nestjs/axios";

@Module({
  imports: [HttpModule],
  providers: [UsuarioService],
  controllers: [UsuarioController],
})
export class UsuarioModule { }
