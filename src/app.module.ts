import { Module } from '@nestjs/common';
import { DatasourceModule } from './infrastructure/datasource/datasource.module';
import { ModulesModule } from './infrastructure/modules/modules.module';

@Module({
  imports: [DatasourceModule, ModulesModule],
})
export class AppModule {}
