import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuarioModule } from './usuario/usuario.module';
import { DenunciaModule } from './denuncia/denuncia.module';

@Module({
  imports: [UsuarioModule, DenunciaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
