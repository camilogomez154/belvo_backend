// Modules
import { ApiBody, ApiHeaders, ApiTags } from '@nestjs/swagger';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';

import { AuthorizationGuard } from '../../guards';
import { ProductDto } from './dto';
// Services
import { ProductService } from './product.service';

/**
 * @class {ProductController}
 * @param {ProductService}
 */
@ApiHeaders([
  {
    name: 'refreshToken',
    description: 'Token para hacer re-crear el token en caso de estar vencido',
  },
  {
    name: 'sessionId',
    description: 'session id es para validar la sesión en la base de datos.',
  },
])
@Controller('product')
@ApiTags('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @UseGuards(AuthorizationGuard)
  @ApiBody({ type: ProductDto, required: true })
  @Post()
  async create(@Body() product: ProductDto) {
    return await this.productService.create(product);
  }

  @UseGuards(AuthorizationGuard)
  @ApiBody({ type: ProductDto, required: true })
  @Put(':id')
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() product: ProductDto,
  ) {
    return await this.productService.update(id, product);
  }

  @UseGuards(AuthorizationGuard)
  @Delete(':id')
  async delete(@Param('id', ParseUUIDPipe) id: string) {
    return await this.productService.delete(id);
  }

  @UseGuards(AuthorizationGuard)
  @Get()
  async get() {
    return await this.productService.get();
  }

  @UseGuards(AuthorizationGuard)
  @Get(':id')
  async getById(@Param('id', ParseUUIDPipe) id: string) {
    return await this.productService.getById(id);
  }
}
