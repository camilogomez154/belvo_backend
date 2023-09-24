import { Injectable, ConflictException } from '@nestjs/common';

import { SessionRepositoryImpl } from '../../../repositories';
import { IValidator } from '../../../core';

import { CreateSessionCommand } from './command';

@Injectable()
export class CreateSessionValidator
  implements IValidator<CreateSessionCommand>
{
  constructor(private readonly sessionRepository: SessionRepositoryImpl) {}

  async validate(command: CreateSessionCommand): Promise<void> {
    const session = await this.sessionRepository.getByUserId(command.id);

    if (session)
      throw new ConflictException(
        `Session of user '${command.name} ${command.lastname}' already exists.`,
      );
  }
}
