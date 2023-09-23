import { Injectable } from '@nestjs/common';

import {
  DeleteUserHandler,
  CreateNewUserHandler,
  UpdateUserHandler,
  GetUserByIdHandler,
  GetUserListHandler,
} from '../../../application';
import { UserDto } from './dto';

@Injectable()
export class UserService {
  constructor(
    private readonly createNewUserHandler: CreateNewUserHandler,
    private readonly getUserByIdHandler: GetUserByIdHandler,
    private readonly getUserListHandler: GetUserListHandler,
    private readonly deleteUserHandler: DeleteUserHandler,
    private readonly updateUserHandler: UpdateUserHandler,
  ) {}

  async create(user: UserDto) {
    return await this.createNewUserHandler.execute(user);
  }

  async update(id: string, user: UserDto) {
    return await this.updateUserHandler.execute({ id, record: user });
  }

  async delete(id: string) {
    return await this.deleteUserHandler.execute({ id });
  }

  async get() {
    return await this.getUserListHandler.execute();
  }

  async getById(id: string) {
    return await this.getUserByIdHandler.execute({ id });
  }
}
