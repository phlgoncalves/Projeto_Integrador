import { Injectable } from "@nestjs/common";
import { CreateDenunciaDto } from "./DTO/altera.denuncia";
import { DenunciaEntity } from "./denuncia.entity";



@Injectable()
export class DenunciasService {
    private readonly denuncias: DenunciaEntity[] = [];

    
    AdicionarDenuncia (denuncia: DenunciaEntity){
        this.denuncias.push(denuncia)
    }

}