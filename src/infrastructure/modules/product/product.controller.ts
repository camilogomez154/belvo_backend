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
import { ProductService } from './product.service';
import { ProductDto } from './dto';
import { ApiBody, ApiTags } from '@nestjs/swagger';

/**
 * @class {ProductController}
 * @param {ProductService}
 */
@Controller('product')
@ApiTags('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @ApiBody({ type: ProductDto, required: true })
  @Post()
  async create(@Body() product: ProductDto) {
    return await this.productService.create(product);
  }

  @ApiBody({ type: ProductDto, required: true })
  @Put(':id')
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() product: ProductDto,
  ) {
    return await this.productService.update(id, product);
  }

  @Delete(':id')
  async delete(@Param('id', ParseUUIDPipe) id: string) {
    return await this.productService.delete(id);
  }

  @Get()
  async get() {
    return await this.productService.get();
  }

  @Get(':id')
  async getById(@Param('id', ParseUUIDPipe) id: string) {
    return await this.productService.getById(id);
  }
}
