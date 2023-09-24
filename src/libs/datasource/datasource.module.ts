import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { entities } from './constants';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      database: './database.sqlite',
      entities: entities,
      synchronize: true,
      type: 'sqlite',
      logging: true,
    }),
    TypeOrmModule.forFeature(entities),
  ],
  exports: [TypeOrmModule.forFeature(entities)],
})
export class DatasourceModule {}
