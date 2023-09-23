import { Injectable, UnauthorizedException } from '@nestjs/common';

import { IValidator } from '../../../core';

import { ValidateSessionTokenCommand } from './command';

@Injectable()
export class ValidateSessionTokenValidator
  implements IValidator<ValidateSessionTokenCommand>
{
  async validate(command: ValidateSessionTokenCommand): Promise<void> {
    if (!command.accessToken) {
      throw new UnauthorizedException(
        'Access Token is required to access correctly in the system.',
      );
    }

    if (!command.sessionId) {
      throw new UnauthorizedException(
        'Session ID is required to access correctly in the system.',
      );
    }
  }
}
