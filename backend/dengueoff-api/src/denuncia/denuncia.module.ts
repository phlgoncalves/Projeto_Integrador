import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { DenunciasService } from './denuncias.service';
import { DenunciaController } from './denuncia.controller';
import { UsuarioService } from 'src/usuario/usuario.service';
import { UsuarioModule } from 'src/usuario/usuario.module';

@Module({
    imports: [HttpModule, UsuarioModule],
    controllers: [DenunciaController],
    providers: [DenunciasService],
  })
export class DenunciaModule{}



