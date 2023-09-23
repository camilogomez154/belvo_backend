import { Injectable } from '@nestjs/common';

import { CategoryRepositoryImpl } from '../../../repositories';
import { CategoryEntity } from '../../../../domain';
import { IHandler } from '../../../core';

import { CreateNewCategoryValidator } from './validate';
import { CreateNewCategoryCommand } from './command';

@Injectable()
export class createNewCategoryHandler
  implements IHandler<CreateNewCategoryCommand, CategoryEntity>
{
  constructor(
    private readonly categoryRepository: CategoryRepositoryImpl,
    private readonly createNewCategoryValidator: CreateNewCategoryValidator,
  ) {}

  async execute(command: CreateNewCategoryCommand): Promise<CategoryEntity> {
    await this.createNewCategoryValidator.validate(command);
    return await this.categoryRepository.create(command);
  }
}
