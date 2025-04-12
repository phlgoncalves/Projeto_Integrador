import { SequelizeModuleOptions } from '@nestjs/sequelize';

export const dataBaseConfig: SequelizeModuleOptions = {
  dialect: 'sqlite',
  storage: '.db/banco_de_dados_dengueoff.sqlite3',
  autoLoadModels: true,
  synchronize: true,
};