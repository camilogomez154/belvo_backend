import { ConflictException, Injectable } from '@nestjs/common';

import { ProductRepositoryImpl } from '../../../repositories';
import { IValidator } from '../../../core';

import { CreateNewProductCommand } from './command';

@Injectable()
export class CreateNewProductValidator
  implements IValidator<CreateNewProductCommand>
{
  constructor(private readonly productRepository: ProductRepositoryImpl) {}

  async validate(command: CreateNewProductCommand): Promise<void> {
    const productFound = await this.productRepository.getByName(command.name);

    if (productFound) {
      throw new ConflictException(
        `Product with name '${command.name} already exists'`,
      );
    }
  }
}
