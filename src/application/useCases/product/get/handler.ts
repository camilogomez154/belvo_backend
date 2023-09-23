import { Injectable } from '@nestjs/common';

import { ProductRepositoryImpl } from '../../../repositories';
import { ProductEntity } from '../../../../domain';
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
