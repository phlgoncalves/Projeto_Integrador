import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { DenunciasService } from './denuncias.service';
import { DenunciaController } from './denuncia.controller';
import { UsuarioService } from 'src/usuario/usuario.service';
import { UsuarioModule } from 'src/usuario/usuario.module';
import { denunciaProviders } from './denuncia.providers';
import { usuarioProviders } from 'src/usuario/usuario.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [DenunciaController],
  providers: [DenunciasService, ...denunciaProviders, UsuarioService, ...usuarioProviders]
})
export class DenunciaModule { }



