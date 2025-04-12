import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { Usuario } from './entities/usuario.entity';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectModel(Usuario)
    private usuarioRepository: typeof Usuario,
  ) {}

  create(createUsuarioDto: CreateUsuarioDto) {
    return this.usuarioRepository.create(createUsuarioDto as any);
  }

  findAll() {
    return this.usuarioRepository.findAll();
  }

  findOne(id: number) {
    return this.usuarioRepository.findByPk(id);
  }

  findWhere(where: {}) {
    return this.usuarioRepository.findOne({where: where});
  }

  update(id: number, updateUsuarioDto: UpdateUsuarioDto) {
    return this.usuarioRepository.update(updateUsuarioDto as any, {
      where: { id },
    });
  }

  remove(id: number) {
    return this.usuarioRepository.destroy({
      where: { id },
    });
  }
}
