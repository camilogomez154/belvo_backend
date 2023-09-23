import { Module } from '@nestjs/common';
import { DatasourceModule } from './infrastructure/datasource/datasource.module';

@Module({
  imports: [DatasourceModule],
})
export class AppModule {}
