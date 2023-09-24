import { Injectable } from '@nestjs/common';

import { UserEntity } from '../../../../libs/datasource';

import { UserRepositoryImpl } from '../../../repositories';
import { Hash } from '../../../utilities';
import { IHandler } from '../../../core';

import { CreateNewUserValidator } from './validator';
import { CreateNewUserCommand } from './command';

@Injectable()
export class CreateNewUserHandler
  implements IHandler<CreateNewUserCommand, UserEntity>
{
  constructor(
    private readonly productRepository: UserRepositoryImpl,
    private readonly createNewUserValidator: CreateNewUserValidator,
  ) {}

  async execute(command: CreateNewUserCommand): Promise<UserEntity> {
    await this.createNewUserValidator.validate(command);
    command.password = Hash.encrypt(command.password);

    return await this.productRepository.create(command);
  }
}
