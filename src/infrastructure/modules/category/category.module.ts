import { Module } from '@nestjs/common';

import { ApplicationModule } from '../../../application/application.module';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';

@Module({
  imports: [ApplicationModule],
  controllers: [CategoryController],
  providers: [CategoryService],
})
export class CategoryModule {}
