import { Injectable } from '@nestjs/common';

import { CategoryRepositoryImpl } from '../../../repositories';
import { CategoryEntity } from '../../../../domain';
import { IHandler } from '../../../core';

import { GetCategoryByIdCommand } from './command';

@Injectable()
export class GetCategoryByIdHandler
  implements IHandler<GetCategoryByIdCommand, CategoryEntity>
{
  constructor(private readonly categoryRepository: CategoryRepositoryImpl) {}

  async execute(command: GetCategoryByIdCommand): Promise<CategoryEntity> {
    return await this.categoryRepository.getById(command.id);
  }
}
