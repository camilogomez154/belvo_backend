import { Injectable } from '@nestjs/common';

import { SessionRepositoryImpl } from '../../../repositories';
import { IHandler } from '../../../core';

import { CreateSessionCommand } from './command';
import { CreateSessionValidator } from './validator';

@Injectable()
export class CreateSessionHandler
  implements IHandler<CreateSessionCommand, string>
{
  constructor(
    private readonly sessionRepository: SessionRepositoryImpl,
    private readonly createSessionValidator: CreateSessionValidator,
  ) {}

  async execute(command: CreateSessionCommand): Promise<string> {
    await this.createSessionValidator.validate(command);
    const session = await this.sessionRepository.create(command);
    return session.id;
  }
}
