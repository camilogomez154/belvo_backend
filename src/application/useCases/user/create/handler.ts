import { Injectable } from '@nestjs/common';

import { UserRepositoryImpl } from '../../../repositories';
import { UserEntity } from '../../../../domain';
import { IHandler } from '../../../core';

import { CreateNewUserValidator } from './validator';
import { CreateNewUserCommand } from './command';

@Injectable()
export class createNewUserHandler
  implements IHandler<CreateNewUserCommand, UserEntity>
{
  constructor(
    private readonly productRepository: UserRepositoryImpl,
    private readonly createNewUserValidator: CreateNewUserValidator,
  ) {}

  async execute(command: CreateNewUserCommand): Promise<UserEntity> {
    await this.createNewUserValidator.validate(command);
    return await this.productRepository.create(command);
  }
}
