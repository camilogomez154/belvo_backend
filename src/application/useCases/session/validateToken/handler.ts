import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { IHandler } from '../../../core';

import { ValidateSessionTokenValidator } from './validator';
import {
  ValidateSessionTokenCommand,
  ValidateSessionPayloadCommand,
} from './command';

@Injectable()
export class ValidateSessionTokenHandler
  implements
    IHandler<ValidateSessionTokenCommand, ValidateSessionPayloadCommand>
{
  constructor(
    private readonly validateSessionTokenValidator: ValidateSessionTokenValidator,
    private readonly jwtService: JwtService,
  ) {}

  async execute(
    command: ValidateSessionTokenCommand,
  ): Promise<ValidateSessionPayloadCommand> {
    await this.validateSessionTokenValidator.validate(command);
    return await this.jwtService.verifyAsync<ValidateSessionPayloadCommand>(
      command.accessToken,
    );
  }
}
