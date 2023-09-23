import { Injectable, NotFoundException } from '@nestjs/common';

import { CategoryRepositoryImpl } from '../../../repositories';
import { IValidator } from '../../../core';

import { UpdateCategoryCommand } from './command';

@Injectable()
export class UpdateCategoryValidator
  implements IValidator<UpdateCategoryCommand>
{
  constructor(private readonly categoryRepository: CategoryRepositoryImpl) {}

  async validate(command: UpdateCategoryCommand): Promise<void> {
    const categoryFound = await this.categoryRepository.getById(command.id);

    if (!categoryFound)
      throw new NotFoundException(
        `Catagory with id '${command.id}' not found.`,
      );
  }
}
