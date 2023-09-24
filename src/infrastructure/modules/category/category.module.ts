import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

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
  ValidateSessionTokenHandler,
  ValidateSessionTokenValidator,
  UpdateSessionRateHandler,
  UpdateSessionRateValidator,
  SessionRepositoryImpl,
} from '../../../application';

@Module({
  imports: [
    DatasourceModule,
    JwtModule.register({
      secret: 'texto_para_generar_un_token_bien_random_estatico_por_ahora_XD',
      signOptions: { expiresIn: '60 minutes' },
    }),
  ],
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
    ValidateSessionTokenHandler,
    ValidateSessionTokenValidator,
    UpdateSessionRateHandler,
    UpdateSessionRateValidator,
    SessionRepositoryImpl,
    CategoryService,
  ],
})
export class CategoryModule {}
