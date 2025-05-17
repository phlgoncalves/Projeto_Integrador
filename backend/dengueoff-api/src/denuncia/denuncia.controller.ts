import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CriaDenunciaDto } from "./DTO/denuncia.dto";
import { DenunciasService } from '../denuncia/denuncias.service';
import { v4 as uuid } from "uuid";
import { lastValueFrom, map } from "rxjs";
import { HttpService } from "@nestjs/axios";
import { UsuarioService } from "src/usuario/usuario.service";
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
    async ciraDenuncia(@Body() dadosDenuncia: CriaDenunciaDto): Promise <RetornoCadastroDTO>{   
        var retorno = this.denunciaService.inserir(dadosDenuncia);                       
        return retorno        
    }

    @Put('/:id')
    @ApiResponse({status: 200, description:'Retorna que houve sucesso na alteração'})
    @ApiResponse({status: 500, description:'Retorna que houve erro na alteração.'})
    @ApiResponse({status: 400, description:'Retorna que há algum dado inválido na requisição.'})
    async alteraDenuncia(@Body() dadosNovos: AlteraDenunciaDto,@Param('id') id: string){
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

    @Get('/:ID') 
    @ApiResponse({status: 200, description:'Retorna que houve sucesso na consulta'})
    @ApiResponse({status: 500, description:'Retorna que houve erro na consulta.'})
    async retornaDenunciaId(@Param('ID') ID:string){
        var denunciaListadas = await this.denunciaService.Denunciar(ID);
        return {
                Filme: denunciaListadas
            };
    }

    @Get()
    @ApiResponse({status: 200, description:'Retorna que houve sucesso na consulta'})
    async retornaFilme(): Promise <ListaDenunciaDTO[]>{
        return this.denunciaService.listar();
    }
  }

// @ApiTags('denuncias')
// @Controller('/denuncias')
// export class DenunciaController {
//   constructor(private readonly denunciasService: DenunciasService, private httpService: HttpService, private usuarioService: UsuarioService) { }

//   @ApiResponse({ status: 201, description: 'Retorna que houve sucesso ao criar a denúncia' })
//   @ApiResponse({ status: 500, description: 'Retorna que o usuário não foi encontrado' })
//   @Post()
//   async criaDenuncia(@Body() dadosDenuncia: CriaDenunciaDto) {
//     var msgError = ''
//     try {
//       var retornoCep = await lastValueFrom(this.httpService
//         .get(`https://viacep.com.br/ws/${dadosDenuncia.cep}/json/`)
//         .pipe(
//           map((response) => response.data)
//         ))
//       if (retornoCep.error == 'true') {
//         throw new Error('CEP não encontrado')
//       }

//     } catch (error) {
//       msgError = 'Erro ao consultar o CEP, informa um CEP valido'
//       return {
//         message: msgError,
//         status: 'Erro no cadastro do usuário'
//       }
//     }

//     const usuario = await this.usuarioService.findById(dadosDenuncia.usuarioId);
//     const novaDenuncia = new DenunciaEntity(
//       uuid(),
//       dadosDenuncia.descricao,
//       dadosDenuncia.fotos,
//       dadosDenuncia.cep,
//       retornoCep.logradouro ? retornoCep.logradouro : '',
//       dadosDenuncia.complemento,
//       dadosDenuncia.anonimato,
//       usuario,
//     )

//     this.denunciasService.AdicionarDenuncia(novaDenuncia);

//     const denuncia = {
//       dadosDenuncia: novaDenuncia,
//       status: 'Denuncia Criada'
//     }

//     return denuncia
//   }

//   @ApiResponse({ status: 200, description: 'Retorna que houve sucesso na requisição' })
//   @ApiResponse({ status: 500, description: 'Retorna que a denúncia não foi encontrada' })
//   @Get()
//   async todasDenuncias() {
//     return this.denunciasService.listarDenuncias()
//   }

//   @ApiResponse({ status: 200, description: 'Retorna que houve sucesso na requisição' })
//   @ApiResponse({ status: 500, description: 'Retorna que a denúncia não foi encontrada' })
//   @Get('/:id')
//   async buscarDenunciaPorId(@Param('id') id: string) {
//     return this.denunciasService.buscarPorId(id);
//   }

//   @ApiResponse({ status: 200, description: 'Retorna que houve sucesso na requisição' })
//   @ApiResponse({ status: 500, description: 'Retorna que a denúncia não foi encontrada' })
//   @Get('/:id/denuncia')
//   async textoDaDenuncia(@Param('id') id: string) {
//     return this.denunciasService.buscarTextoDenuncia(id);
//   }

//   @ApiResponse({ status: 200, description: 'Retorna que houve sucesso na requisição' })
//   @ApiResponse({ status: 500, description: 'Retorna que a denúncia não foi encontrada' })
//   @Put(':id')
//   async atualizaDenuncia(@Param('id') id: string, @Body() dadosAtualizados: AlteraDenunciaDto) {
//     return this.denunciasService.atualizarDenuncia(id, dadosAtualizados);
//   }

//   @ApiResponse({ status: 200, description: 'Retorna que houve sucesso na requisição' })
//   @ApiResponse({ status: 500, description: 'Retorna que a denúncia não foi encontrada' })
//   @Delete(':id')
//   async removeDenuncia(@Param('id') id: string) {
//     return this.denunciasService.removerDenuncia(id);
//   }
// }