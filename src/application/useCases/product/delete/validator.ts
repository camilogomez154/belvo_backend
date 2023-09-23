import { Injectable, NotFoundException } from '@nestjs/common';

import { ProductRepositoryImpl } from '../../../repositories';
import { IValidator } from '../../../core';

import { DeleteProductCommand } from './command';

@Injectable()
export class DeleteProductValidator
  implements IValidator<DeleteProductCommand>
{
  constructor(private readonly productRepository: ProductRepositoryImpl) {}

  async validate(command: DeleteProductCommand): Promise<void> {
    const productFound = await this.productRepository.getById(command.id);

    if (!productFound)
      throw new NotFoundException(
        `Catagory with id '${command.id}' not found.`,
      );
  }
}
