import { Injectable } from '@nestjs/common';

import { ProductRepositoryImpl } from '../../../repositories';
import { ProductEntity } from '../../../../domain';
import { IHandler } from '../../../core';

import { GetProductByIdCommand } from './command';

@Injectable()
export class GetProductByIdHandler
  implements IHandler<GetProductByIdCommand, ProductEntity>
{
  constructor(private readonly productRepository: ProductRepositoryImpl) {}

  async execute(command: GetProductByIdCommand): Promise<ProductEntity> {
    return await this.productRepository.getById(command.id);
  }
}
