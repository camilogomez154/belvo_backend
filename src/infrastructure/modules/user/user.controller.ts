// Modules
import { Controller, Delete, Get, Post, Put } from '@nestjs/common';

// Services
import { UserService } from './user.service';

/**
 * @class UserController
 * @param {UserService}
 */
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async create() {
    return await this.userService.create();
  }

  @Put(':id')
  async update() {
    return await this.userService.update();
  }

  @Delete(':id')
  async delete() {
    return await this.userService.delete();
  }

  @Get()
  async get() {
    return await this.userService.get();
  }

  @Get(':id')
  async getById() {
    return await this.userService.getById();
  }
}
