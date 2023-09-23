import { JwtModule } from '@nestjs/jwt';
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
  ValidateSessionTokenHandler,
  ValidateSessionTokenValidator,
} from '../../../application';

@Module({
  imports: [
    DatasourceModule,
    JwtModule.register({
      secret: 'texto_para_generar_un_token_bien_random_estatico_por_ahora_XD',
      signOptions: { expiresIn: '60 minutes' },
    }),
  ],
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
    ValidateSessionTokenHandler,
    ValidateSessionTokenValidator,
    UserService,
  ],
})
export class UserModule {}
