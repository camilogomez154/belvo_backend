import { Injectable, NotFoundException } from '@nestjs/common';

import { UserRepositoryImpl } from '../../../repositories';
import { IValidator } from '../../../core';

import { UpdateUserCommand } from './command';

@Injectable()
export class UpdateUserValidator implements IValidator<UpdateUserCommand> {
  constructor(private readonly userRepository: UserRepositoryImpl) {}

  async validate(command: UpdateUserCommand): Promise<void> {
    const userFound = await this.userRepository.getById(command.id);

    if (!userFound)
      throw new NotFoundException(`User with id '${command.id}' not found.`);
  }
}
