// Modules
import { ApiBearerAuth, ApiBody, ApiHeaders, ApiTags } from '@nestjs/swagger';
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
import { CategoryDto } from './dto';

// Services
import { CategoryService } from './category.service';

/**
 * @class CategoryController
 * @param {CategoryService}
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
@ApiBearerAuth()
@ApiTags('category')
@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @UseGuards(AuthorizationGuard)
  @ApiBody({ type: CategoryDto, required: true })
  @Post()
  async create(@Body() category: CategoryDto) {
    return await this.categoryService.create(category);
  }

  @UseGuards(AuthorizationGuard)
  @ApiBody({ type: CategoryDto, required: true })
  @Put(':id')
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() category: CategoryDto,
  ) {
    return await this.categoryService.update(id, category);
  }

  @UseGuards(AuthorizationGuard)
  @Delete(':id')
  async delete(@Param('id', ParseUUIDPipe) id: string) {
    return await this.categoryService.delete(id);
  }

  @UseGuards(AuthorizationGuard)
  @Get()
  async get() {
    return await this.categoryService.get();
  }

  @UseGuards(AuthorizationGuard)
  @Get(':id')
  async getById(@Param('id', ParseUUIDPipe) id: string) {
    return await this.categoryService.getById(id);
  }
}
