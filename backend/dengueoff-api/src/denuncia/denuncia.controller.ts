import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CriaDenunciaDto } from "./DTO/denuncia.dto";
import { DenunciasService } from '../denuncia/denuncias.service';
import { ApiCreatedResponse, ApiResponse, ApiTags } from "@nestjs/swagger";
import { AlteraDenunciaDto } from "./DTO/altera.denuncia";
import { RetornoCadastroDTO } from "src/dto/retorno.dto";
import { ListaDenunciaDTO } from "./DTO/consulta.dto";

@ApiTags('denuncia')
@Controller('/denuncias')
export class DenunciaController{
  constructor(private readonly denunciaService: DenunciasService){}


    @Post()
    @ApiCreatedResponse({ description:'Retorna que houve sucesso na inclusão'})
    @ApiResponse({status: 500, description:'Retorna que houve erro na inclusão.'})
    @ApiResponse({status: 400, description:'Retorna que há algum dado inválido na requisição.'})
    async criaDenuncia(@Body() dadosDenuncia: CriaDenunciaDto): Promise <RetornoCadastroDTO>{   
        var retorno = await this.denunciaService.inserir(dadosDenuncia);                       
        return retorno        
    }

    @Put(':id')
    @ApiResponse({status: 200, description:'Retorna que houve sucesso na alteração'})
    @ApiResponse({status: 500, description:'Retorna que houve erro na alteração.'})
    @ApiResponse({status: 400, description:'Retorna que há algum dado inválido na requisição.'})
    async alteraDenuncia(@Body() dadosNovos: AlteraDenunciaDto,@Param('id') id: string): Promise<RetornoCadastroDTO>{
        var retornoAlteracao = this.denunciaService.alterar(id,dadosNovos)
        return retornoAlteracao;       
        
    }

    @Delete('/:id')
    @ApiResponse({status: 200, description:'Retorna que houve sucesso na exclusão'})
    @ApiResponse({status: 500, description:'Retorna que houve erro na exclusão.'})
    async removeDenuncia(@Param('id') id: string){
        var retornoExclusao = await this.denunciaService.remover(id)   
        return retornoExclusao;               
    }

    @Get('/:id') 
    @ApiResponse({status: 200, description:'Retorna que houve sucesso na consulta'})
    @ApiResponse({status: 500, description:'Retorna que houve erro na consulta.'})
    async retornaDenunciaId(@Param('id') id:string){
        var denunciasListadas = await this.denunciaService.Denunciar(id);
        return {
                Denuncia: denunciasListadas
            };
    }

    @Get()
    @ApiResponse({status: 200, description:'Retorna que houve sucesso na consulta'})
    async retornaDenuncia(): Promise <ListaDenunciaDTO[]>{
        return this.denunciaService.listar();
    }
  }