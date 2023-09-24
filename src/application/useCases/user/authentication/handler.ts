import { Injectable } from '@nestjs/common';

import { UserEntity } from '../../../../libs/datasource';

import { UserRepositoryImpl } from '../../../repositories';
import { IHandler } from '../../../core';

import { AuthenticationUserValidator } from './validator';
import { AuthenticationUserCommand } from './command';

@Injectable()
export class AuthenticationUserHandler
  implements IHandler<AuthenticationUserCommand, UserEntity>
{
  constructor(
    private readonly userRepository: UserRepositoryImpl,
    private readonly authenticationUserValidator: AuthenticationUserValidator,
  ) {}

  async execute(command: AuthenticationUserCommand): Promise<UserEntity> {
    await this.authenticationUserValidator.validate(command);
    return await this.userRepository.getByEmail(command.email);
  }
}
