import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: '50.116.112.16',
        port: 3306,
        username: 'vitali04_root_dengueoff',
        password: 'Dengueof@2025',
        database: 'vitali04_dengueoff',
        entities: [
            __dirname + '/../**/*.entity{.ts,.js}',
        ],
        synchronize: false,
        extra: {
          connectTimeout: 300000, // 30 segundos
        },
      });
      
      return dataSource.initialize();
    },
  },
];