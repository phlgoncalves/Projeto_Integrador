import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { DenunciasService } from './denuncias.service';
import { DenunciaController } from './denuncia.controller';

@Module({
    imports: [HttpModule],
    providers: [DenunciasService],
    controllers: [DenunciaController],
  })
export class DenunciaModule{}



