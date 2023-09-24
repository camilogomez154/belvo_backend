// Modules
import { ApiBearerAuth, ApiBody, ApiHeaders, ApiTags } from '@nestjs/swagger';
import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';

import { AuthorizationGuard } from '../../guards';

// Services
import { UserService } from './user.service';
import { UserDto, UserUpdateDto } from './dto';

/**
 * @class UserController
 * @param {UserService}
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
@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(AuthorizationGuard)
  @UseInterceptors(ClassSerializerInterceptor)
  @ApiBody({ type: UserDto, required: true })
  @Post()
  async create(@Body() user: UserDto) {
    return await this.userService.create(user);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @UseGuards(AuthorizationGuard)
  @ApiBody({ type: UserDto, required: true })
  @Put(':id')
  async update(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() user: UserUpdateDto,
  ) {
    return await this.userService.update(id, user);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @UseGuards(AuthorizationGuard)
  @Delete(':id')
  async delete(@Param('id', ParseUUIDPipe) id: string) {
    return await this.userService.delete(id);
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @UseGuards(AuthorizationGuard)
  @Get()
  async get() {
    return await this.userService.get();
  }

  @UseInterceptors(ClassSerializerInterceptor)
  @UseGuards(AuthorizationGuard)
  @Get(':id')
  async getById(@Param('id', ParseUUIDPipe) id: string) {
    return await this.userService.getById(id);
  }
}
