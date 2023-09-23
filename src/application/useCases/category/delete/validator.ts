import { NotFoundException } from '@nestjs/common';

import { CategoryRepositoryImpl } from '../../../repositories';
import { IValidator } from '../../../core';

import { DeleteCategoryCommand } from './command';

export class DeleteCategoryValidator
  implements IValidator<DeleteCategoryCommand>
{
  constructor(private readonly categoryRepository: CategoryRepositoryImpl) {}

  async validate(command: DeleteCategoryCommand): Promise<void> {
    const categoryFound = await this.categoryRepository.getById(command.id);

    if (!categoryFound)
      throw new NotFoundException(
        `Catagory with id '${command.id}' not found.`,
      );
  }
}
