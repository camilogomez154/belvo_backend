// Modules
import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

// Services
import { CategoryService } from './category.service';

/**
 * @class CategoryController
 * @param {CategoryService}
 */
@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post()
  async create() {
    return await this.categoryService.create();
  }

  @Put(':id')
  async update() {
    return await this.categoryService.update();
  }

  @Delete(':id')
  async delete() {
    return await this.categoryService.delete();
  }

  @Get()
  async get() {
    return await this.categoryService.get();
  }

  @Get(':id')
  async getById() {
    return await this.categoryService.getById();
  }
}
