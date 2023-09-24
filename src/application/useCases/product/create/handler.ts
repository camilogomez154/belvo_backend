import { Injectable } from '@nestjs/common';

import { ProductRepositoryImpl } from '../../../repositories';
import { IHandler } from '../../../core';

import { CreateNewProductValidator } from './validator';
import { CreateNewProductCommand } from './command';
import { ProductEntity } from '../../../../libs/datasource';

@Injectable()
export class CreateNewProductHandler
  implements IHandler<CreateNewProductCommand, ProductEntity>
{
  constructor(
    private readonly productRepository: ProductRepositoryImpl,
    private readonly createNewProductValidator: CreateNewProductValidator,
  ) {}

  async execute(command: CreateNewProductCommand): Promise<ProductEntity> {
    await this.createNewProductValidator.validate(command);
    return await this.productRepository.create(command);
  }
}
