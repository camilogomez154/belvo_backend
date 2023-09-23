import { Module } from '@nestjs/common';

import { ModulesModule } from './infrastructure/modules/modules.module';

@Module({
  imports: [ModulesModule],
})
export class AppModule {}
