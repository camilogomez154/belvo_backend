import { ConflictException, Injectable } from '@nestjs/common';

import { UserRepositoryImpl } from '../../../repositories';
import { IValidator } from '../../../core';

import { CreateNewUserCommand } from './command';

@Injectable()
export class CreateNewUserValidator
  implements IValidator<CreateNewUserCommand>
{
  constructor(private readonly userRepository: UserRepositoryImpl) {}

  async validate(command: CreateNewUserCommand): Promise<void> {
    const userFound = await this.userRepository.getByEmail(command.email);

    if (userFound) {
      throw new ConflictException(
        `User with email '${command.email} already exists'`,
      );
    }
  }
}
