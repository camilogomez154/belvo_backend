import { Injectable } from '@nestjs/common';

import {
  DeleteProductHandler,
  CreateNewProductHandler,
  UpdateProductHandler,
  GetProductByIdHandler,
  GetProductListHandler,
} from '../../../application';
import { ProductDto } from './dto';

@Injectable()
export class ProductService {
  constructor(
    private readonly createNewProductHandler: CreateNewProductHandler,
    private readonly getProductByIdHandler: GetProductByIdHandler,
    private readonly getProductListHandler: GetProductListHandler,
    private readonly deleteProductHandler: DeleteProductHandler,
    private readonly updateProductHandler: UpdateProductHandler,
  ) {}

  async create(category: ProductDto) {
    return await this.createNewProductHandler.execute(category);
  }

  async update(id: string, category: ProductDto) {
    return await this.updateProductHandler.execute({ id, record: category });
  }

  async delete(id: string) {
    return await this.deleteProductHandler.execute({ id });
  }

  async get() {
    return await this.getProductListHandler.execute();
  }

  async getById(id: string) {
    return await this.getProductByIdHandler.execute({ id });
  }
}
