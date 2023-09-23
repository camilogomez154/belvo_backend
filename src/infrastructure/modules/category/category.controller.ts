// Modules
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
} from '@nestjs/common';

// Services
import { CategoryService } from './category.service';
import { CategoryDto } from './dto';
import { ApiBody, ApiTags } from '@nestjs/swagger';

/**
 * @class CategoryController
 * @param {CategoryService}
 */
@ApiTags('category')
@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @ApiBody({ type: CategoryDto, required: true })
  @Post()
  async create(@Body() category: CategoryDto) {
    return await this.categoryService.create(category);
  }

  @ApiBody({ type: CategoryDto, required: true })
  @Put(':id')
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() category: CategoryDto,
  ) {
    return await this.categoryService.update(id, category);
  }

  @Delete(':id')
  async delete(@Param('id', ParseUUIDPipe) id: string) {
    return await this.categoryService.delete(id);
  }

  @Get()
  async get() {
    return await this.categoryService.get();
  }

  @Get(':id')
  async getById(@Param('id', ParseUUIDPipe) id: string) {
    return await this.categoryService.getById(id);
  }
}
