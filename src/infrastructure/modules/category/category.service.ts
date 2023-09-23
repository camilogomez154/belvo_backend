import { Injectable } from '@nestjs/common';

import {
  DeleteCategoryHandler,
  CreateNewCategoryHandler,
  UpdateCategoryHandler,
  GetCategoryByIdHandler,
  GetCategoryListHandler,
} from '../../../application';
import { CategoryDto } from './dto';

@Injectable()
export class CategoryService {
  constructor(
    private readonly createNewCategoryHandler: CreateNewCategoryHandler,
    private readonly getCategoryByIdHandler: GetCategoryByIdHandler,
    private readonly getCategoryListHandler: GetCategoryListHandler,
    private readonly deleteCategoryHandler: DeleteCategoryHandler,
    private readonly updateCategoryHandler: UpdateCategoryHandler,
  ) {}

  async create(category: CategoryDto) {
    return await this.createNewCategoryHandler.execute(category);
  }

  async update(id: string, category: CategoryDto) {
    return await this.updateCategoryHandler.execute({ id, record: category });
  }

  async delete(id: string) {
    return await this.deleteCategoryHandler.execute({ id });
  }

  async get() {
    return await this.getCategoryListHandler.execute();
  }

  async getById(id: string) {
    return await this.getCategoryByIdHandler.execute({ id });
  }
}
