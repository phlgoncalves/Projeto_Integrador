import { DataSource } from 'typeorm';
import { DENUNCIA } from './denuncia.entity';

export const denunciaProviders = [
  {
    provide: 'DENUNCIA_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(DENUNCIA),
    inject: ['DATA_SOURCE'],
  },
];