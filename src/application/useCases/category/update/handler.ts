import { Injectable } from '@nestjs/common';

import { CategoryEntity } from '../../../../libs/datasource';

import { CategoryRepositoryImpl } from '../../../repositories';
import { IHandler } from '../../../core';

import { UpdateCategoryValidator } from './validator';
import { UpdateCategoryCommand } from './command';

@Injectable()
export class UpdateCategoryHandler
  implements IHandler<UpdateCategoryCommand, CategoryEntity>
{
  constructor(
    private readonly categoryRepository: CategoryRepositoryImpl,
    private readonly updateCategoryValidator: UpdateCategoryValidator,
  ) {}

  async execute(command: UpdateCategoryCommand): Promise<CategoryEntity> {
    await this.updateCategoryValidator.validate(command);
    return await this.categoryRepository.update(command.id, command.record);
  }
}
