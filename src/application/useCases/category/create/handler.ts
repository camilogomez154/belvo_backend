import { Injectable } from '@nestjs/common';

import { CategoryRepositoryImpl } from '../../../repositories';
import { IHandler } from '../../../core';

import { CreateNewCategoryValidator } from './validator';
import { CreateNewCategoryCommand } from './command';
import { CategoryEntity } from '../../../../libs/datasource';

@Injectable()
export class CreateNewCategoryHandler
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
