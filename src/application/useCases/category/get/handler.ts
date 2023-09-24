import { Injectable } from '@nestjs/common';

import { CategoryEntity } from '../../../../libs/datasource';

import { CategoryRepositoryImpl } from '../../../repositories';
import { IHandler } from '../../../core';

@Injectable()
export class GetCategoryListHandler
  implements IHandler<undefined, CategoryEntity[]>
{
  constructor(private readonly categoryRepository: CategoryRepositoryImpl) {}

  async execute(): Promise<CategoryEntity[]> {
    return await this.categoryRepository.get();
  }
}
