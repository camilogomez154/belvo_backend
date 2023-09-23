import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { DatasourceModule } from '../../datasource/datasource.module';

import {
  ProductRepositoryImpl,
  CreateNewProductValidator,
  DeleteProductHandler,
  DeleteProductValidator,
  CreateNewProductHandler,
  UpdateProductHandler,
  GetProductByIdHandler,
  GetProductListHandler,
  UpdateProductValidator,
  ValidateSessionTokenHandler,
  ValidateSessionTokenValidator,
} from '../../../application';

@Module({
  imports: [
    DatasourceModule,
    JwtModule.register({
      secret: 'texto_para_generar_un_token_bien_random_estatico_por_ahora_XD',
      signOptions: { expiresIn: '60 minutes' },
    }),
  ],
  controllers: [ProductController],
  providers: [
    ProductRepositoryImpl,
    CreateNewProductValidator,
    DeleteProductHandler,
    DeleteProductValidator,
    CreateNewProductHandler,
    UpdateProductHandler,
    GetProductByIdHandler,
    GetProductListHandler,
    UpdateProductValidator,
    ValidateSessionTokenHandler,
    ValidateSessionTokenValidator,
    ProductService,
  ],
})
export class ProductModule {}
