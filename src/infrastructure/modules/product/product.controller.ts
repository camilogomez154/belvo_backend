// Modules
import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

// Services
import { ProductService } from './product.service';

/**
 * @class {ProductController}
 * @param {ProductService}
 */
@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  async create() {
    return await this.productService.create();
  }

  @Put(':id')
  async update() {
    return await this.productService.update();
  }

  @Delete(':id')
  async delete() {
    return await this.productService.delete();
  }

  @Get()
  async get() {
    return await this.productService.get();
  }

  @Get(':id')
  async getById() {
    return await this.productService.getById();
  }
}
