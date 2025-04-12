import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { dataBaseConfig } from 'src/database';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [SequelizeModule.forRoot(dataBaseConfig), UsuarioModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
