import { Injectable, NotFoundException } from '@nestjs/common';

import { ProductRepositoryImpl } from '../../../repositories';
import { IValidator } from '../../../core';

import { UpdateProductCommand } from './command';

@Injectable()
export class UpdateProductValidator
  implements IValidator<UpdateProductCommand>
{
  constructor(private readonly productRepository: ProductRepositoryImpl) {}

  async validate(command: UpdateProductCommand): Promise<void> {
    const productFound = await this.productRepository.getById(command.id);

    if (!productFound)
      throw new NotFoundException(`Product with id '${command.id}' not found.`);
  }
}
