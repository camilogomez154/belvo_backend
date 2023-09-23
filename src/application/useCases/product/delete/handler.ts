import { Injectable } from '@nestjs/common';

import { ProductRepositoryImpl } from '../../../repositories';
import { IHandler } from '../../../core';

import { DeleteProductValidator } from './validator';
import { DeleteProductCommand } from './command';

@Injectable()
export class DeleteProductHandler
  implements IHandler<DeleteProductCommand, number>
{
  constructor(
    private readonly productRepository: ProductRepositoryImpl,
    private readonly deleteProductValidator: DeleteProductValidator,
  ) {}

  async execute(command: DeleteProductCommand): Promise<number> {
    await this.deleteProductValidator.validate(command);
    return await this.productRepository.delete(command.id);
  }
}
