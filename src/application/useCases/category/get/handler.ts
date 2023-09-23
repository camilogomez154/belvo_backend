import { Injectable } from '@nestjs/common';

import { CategoryRepositoryImpl } from '../../../repositories';
import { CategoryEntity } from '../../../../domain';
import { IHandler } from '../../../core';

@Injectable()
export class getCategoryListHandler
  implements IHandler<undefined, CategoryEntity[]>
{
  constructor(private readonly categoryRepository: CategoryRepositoryImpl) {}

  async execute(): Promise<CategoryEntity[]> {
    return await this.categoryRepository.get();
  }
}
