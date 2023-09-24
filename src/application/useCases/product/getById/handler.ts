import { Injectable, NotFoundException } from '@nestjs/common';

import { ProductRepositoryImpl } from '../../../repositories';
import { IHandler } from '../../../core';

import { GetProductByIdCommand } from './command';
import { ProductEntity } from '../../../../libs/datasource';

@Injectable()
export class GetProductByIdHandler
  implements IHandler<GetProductByIdCommand, ProductEntity>
{
  constructor(private readonly productRepository: ProductRepositoryImpl) {}

  async execute(command: GetProductByIdCommand): Promise<ProductEntity> {
    const productFound = await this.productRepository.getById(command.id);

    if (!productFound)
      throw new NotFoundException(`Product with id '${command.id}' not found.`);

    return productFound;
  }
}
