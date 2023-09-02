import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
export const getConOptions = (
  configService: ConfigService,
): TypeOrmModuleOptions => ({
  type: 'postgres',
  host: configService.get('HOST'),
  port: configService.get('PORT'),
  username: configService.get('USER_NAME'),
  database: configService.get('DB_NAME'),
  password: configService.get('PASSWORD'),
  entities: ['dist/**/*.entity.js'],
  synchronize: true,
  autoLoadEntities: true,
});
