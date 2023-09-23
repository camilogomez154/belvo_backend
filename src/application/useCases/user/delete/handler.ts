import { Injectable } from '@nestjs/common';

import { UserRepositoryImpl } from '../../../repositories';
import { IHandler } from '../../../core';

import { DeleteUserValidator } from './validator';
import { DeleteUserCommand } from './command';

@Injectable()
export class DeleteUserHandler implements IHandler<DeleteUserCommand, number> {
  constructor(
    private readonly userRepository: UserRepositoryImpl,
    private readonly deleteUserValidator: DeleteUserValidator,
  ) {}

  async execute(command: DeleteUserCommand): Promise<number> {
    await this.deleteUserValidator.validate(command);
    return await this.userRepository.delete(command.id);
  }
}
