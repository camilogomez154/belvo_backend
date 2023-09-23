import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { DatasourceModule } from '../../datasource/datasource.module';

import {
  UserRepositoryImpl,
  CreateNewUserValidator,
  DeleteUserHandler,
  DeleteUserValidator,
  CreateNewUserHandler,
  UpdateUserHandler,
  GetUserByIdHandler,
  GetUserListHandler,
  UpdateUserValidator,
} from '../../../application';

@Module({
  imports: [DatasourceModule],
  controllers: [UserController],
  providers: [
    UserRepositoryImpl,
    CreateNewUserValidator,
    DeleteUserHandler,
    DeleteUserValidator,
    CreateNewUserHandler,
    UpdateUserHandler,
    GetUserByIdHandler,
    GetUserListHandler,
    UpdateUserValidator,
    UserService,
  ],
})
export class UserModule {}
