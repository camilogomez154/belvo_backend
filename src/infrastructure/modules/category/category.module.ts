import { Module } from '@nestjs/common';

import { DatasourceModule } from '../../datasource/datasource.module';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';
import {
  CategoryRepositoryImpl,
  CreateNewCategoryValidator,
  DeleteCategoryHandler,
  DeleteCategoryValidator,
  CreateNewCategoryHandler,
  UpdateCategoryHandler,
  GetCategoryByIdHandler,
  GetCategoryListHandler,
  UpdateCategoryValidator,
} from '../../../application';

@Module({
  imports: [DatasourceModule],
  controllers: [CategoryController],
  providers: [
    CategoryRepositoryImpl,
    CreateNewCategoryValidator,
    DeleteCategoryHandler,
    DeleteCategoryValidator,
    CreateNewCategoryHandler,
    UpdateCategoryHandler,
    GetCategoryByIdHandler,
    GetCategoryListHandler,
    UpdateCategoryValidator,
    CategoryService,
  ],
})
export class CategoryModule {}
