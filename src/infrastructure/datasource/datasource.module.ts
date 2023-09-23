import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      database: './database.sqlite',
      synchronize: true,
      type: 'sqlite',
      logging: true,
      entities: [],
    }),
  ],
  providers: [],
  exports: [TypeOrmModule.forFeature([])],
})
export class DatasourceModule {}
