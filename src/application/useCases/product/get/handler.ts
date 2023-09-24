import { Injectable } from '@nestjs/common';

import { ProductEntity } from '../../../../libs/datasource';

import { ProductRepositoryImpl } from '../../../repositories';
import { IHandler } from '../../../core';

@Injectable()
export class GetProductListHandler
  implements IHandler<undefined, ProductEntity[]>
{
  constructor(private readonly productRepository: ProductRepositoryImpl) {}

  async execute(): Promise<ProductEntity[]> {
    return await this.productRepository.get();
  }
}
