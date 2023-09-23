import { Module } from '@nestjs/common';
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
} from '../../../application';

@Module({
  imports: [DatasourceModule],
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
    ProductService,
  ],
})
export class ProductModule {}
