import { ConflictException, Injectable } from '@nestjs/common';

import { CategoryRepositoryImpl } from '../../../repositories';
import { IValidator } from '../../../core';

import { CreateNewCategoryCommand } from './command';

@Injectable()
export class CreateNewCategoryValidator
  implements IValidator<CreateNewCategoryCommand>
{
  constructor(private readonly categoryRepository: CategoryRepositoryImpl) {}

  async validate(command: CreateNewCategoryCommand): Promise<void> {
    const categoryFound = await this.categoryRepository.getByName(command.name);

    if (categoryFound) {
      throw new ConflictException(
        `Category with name '${command.name} already exists'`,
      );
    }
  }
}
