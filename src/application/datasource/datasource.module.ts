import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';

import * as Entities from '../../domain/entities';

const entitiesToUse = Object.values(Entities);

@Module({
  imports: [
    TypeOrmModule.forRoot({
      database: './database.sqlite',
      entities: entitiesToUse,
      synchronize: true,
      type: 'sqlite',
      logging: true,
    }),
    TypeOrmModule.forFeature(entitiesToUse),
  ],
  exports: [TypeOrmModule.forFeature(entitiesToUse)],
})
export class DatasourceModule {}
