import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { UserRepositoryImpl } from '../../../repositories';
import { IValidator } from '../../../core';
import { Hash } from '../../../utilities';

import { AuthenticationUserCommand } from './command';

@Injectable()
export class AuthenticationUserValidator
  implements IValidator<AuthenticationUserCommand>
{
  constructor(private readonly userRepository: UserRepositoryImpl) {}

  async validate(command: AuthenticationUserCommand): Promise<void> {
    const userFound = await this.userRepository.getByEmail(command.email);

    if (!userFound)
      throw new NotFoundException(
        `User with email '${command.email} not found.'`,
      );

    if (!Hash.compare(command.password, userFound.password))
      throw new ConflictException(
        `User with email '${command.email}' password not match.`,
      );
  }
}
