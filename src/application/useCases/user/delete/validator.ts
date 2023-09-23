import { NotFoundException } from '@nestjs/common';

import { UserRepositoryImpl } from '../../../repositories';
import { IValidator } from '../../../core';

import { DeleteUserCommand } from './command';

export class DeleteUserValidator implements IValidator<DeleteUserCommand> {
  constructor(private readonly userRepository: UserRepositoryImpl) {}

  async validate(command: DeleteUserCommand): Promise<void> {
    const userFound = await this.userRepository.getById(command.id);

    if (!userFound)
      throw new NotFoundException(`User with id '${command.id}' not found.`);
  }
}
