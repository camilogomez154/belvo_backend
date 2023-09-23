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
import { UserService } from './user.service';
import { UserDto } from './dto';
import { ApiBody, ApiTags } from '@nestjs/swagger';

/**
 * @class UserController
 * @param {UserService}
 */
@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiBody({ type: UserDto, required: true })
  @Post()
  async create(@Body() user: UserDto) {
    return await this.userService.create(user);
  }

  @ApiBody({ type: UserDto, required: true })
  @Put(':id')
  async update(@Param('id', ParseUUIDPipe) id: string, @Body() user: UserDto) {
    return await this.userService.update(id, user);
  }

  @Delete(':id')
  async delete(@Param('id', ParseUUIDPipe) id: string) {
    return await this.userService.delete(id);
  }

  @Get()
  async get() {
    return await this.userService.get();
  }

  @Get(':id')
  async getById(@Param('id', ParseUUIDPipe) id: string) {
    return await this.userService.getById(id);
  }
}
