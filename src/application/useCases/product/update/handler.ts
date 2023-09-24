import { Injectable } from '@nestjs/common';

import { ProductEntity } from '../../../../libs/datasource';

import { ProductRepositoryImpl } from '../../../repositories';
import { IHandler } from '../../../core';

import { UpdateProductValidator } from './validator';
import { UpdateProductCommand } from './command';

@Injectable()
export class UpdateProductHandler
  implements IHandler<UpdateProductCommand, ProductEntity>
{
  constructor(
    private readonly productRepository: ProductRepositoryImpl,
    private readonly updateProductValidator: UpdateProductValidator,
  ) {}

  async execute(command: UpdateProductCommand): Promise<ProductEntity> {
    await this.updateProductValidator.validate(command);
    return await this.productRepository.update(command.id, command.record);
  }
}
