import { Controller,   } from "react-hook-form";
import { CriaDenunciaDto } from "./DTO/denuncia.dto";
import { DenunciasService } from '../denuncia/denuncias.service';
import { DenunciaEntity } from "./denuncia.entity";
import { v4 as uuid } from "uuid";
import { lastValueFrom, map } from "rxjs";
import { HttpService } from "@nestjs/axios";
import { Body, Post } from "@nestjs/common";


@Controller('/denuncia')
export class DenunciaController{
    constructor(private readonly DenunciasService: DenunciasService, private httpService : HttpService){}

    @Post()    
    criaDenuncia(@Body() dadosDenuncia: CriaDenunciaDto) {
        var msgError = ''
        try {
            var retornoCep = await lastValueFrom(this.httpService
              .get(`https://viacep.com.br/ws/${dadosDenuncia.cep}/json/`)
              .pipe(
                map((response) => response.data)
              ))
            if (retornoCep.error == 'true') {
              throw new Error('CEP não encontrado')
            }
          } catch (error) {
            msgError = 'Erro ao consultar o CEP, informa um CEP valido'
            return {
              message: msgError,
              status: 'Erro no cadastro do usuário'
            }
          }
        const novaDenuncia = new DenunciaEntity (
            uuid(),
            dadosDenuncia.descricao,
            dadosDenuncia.fotos,
            dadosDenuncia.logradouro ? retornoCep.logradouro : '',
            dadosDenuncia.cep,
            dadosDenuncia.complemento,
            dadosDenuncia.anonimato,
            usuario,
        )
       this.DenunciasService.AdicionarDenuncia(novaDenuncia);
       const denuncia = {
        dadosDenuncia: novaDenuncia, 
        status: 'denuncia'
       }
    }

    @Get()
    findAll(@Query() query): Denuncia[] {
        return this.DenunciasService.findAll(query);
    }
}