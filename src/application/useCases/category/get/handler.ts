import { Injectable } from '@nestjs/common';

import { CategoryRepositoryImpl } from '../../../repositories';
import { IHandler } from '../../../core';
import { CategoryEntity } from '../../../../libs/datasource';

@Injectable()
export class GetCategoryListHandler
  implements IHandler<undefined, CategoryEntity[]>
{
  constructor(private readonly categoryRepository: CategoryRepositoryImpl) {}

  async execute(): Promise<CategoryEntity[]> {
    return await this.categoryRepository.get();
  }
}
