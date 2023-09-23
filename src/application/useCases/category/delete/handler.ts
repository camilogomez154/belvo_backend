import { Injectable } from '@nestjs/common';

import { CategoryRepositoryImpl } from '../../../repositories';
import { IHandler } from '../../../core';

import { DeleteCategoryValidator } from './validator';
import { DeleteCategoryCommand } from './command';

@Injectable()
export class DeleteCategoryHandler
  implements IHandler<DeleteCategoryCommand, number>
{
  constructor(
    private readonly categoryRepository: CategoryRepositoryImpl,
    private readonly deleteCategoryValidator: DeleteCategoryValidator,
  ) {}

  async execute(command: DeleteCategoryCommand): Promise<number> {
    await this.deleteCategoryValidator.validate(command);
    return await this.categoryRepository.delete(command.id);
  }
}
