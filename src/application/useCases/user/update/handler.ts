import { Injectable } from '@nestjs/common';

import { UserRepositoryImpl } from '../../../repositories';
import { UserEntity } from '../../../../domain';
import { IHandler } from '../../../core';

import { UpdateUserValidator } from './validator';
import { UpdateUserCommand } from './command';

@Injectable()
export class UpdateUserHandler
  implements IHandler<UpdateUserCommand, UserEntity>
{
  constructor(
    private readonly userRepository: UserRepositoryImpl,
    private readonly updateUserValidator: UpdateUserValidator,
  ) {}

  async execute(command: UpdateUserCommand): Promise<UserEntity> {
    await this.updateUserValidator.validate(command);
    return await this.userRepository.update(command.id, command.record);
  }
}
