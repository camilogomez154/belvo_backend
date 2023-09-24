import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Request } from 'express';

import {
  ValidateSessionTokenHandler,
  UpdateSessionRateHandler,
} from '../../application';

@Injectable()
export class AuthorizationGuard implements CanActivate {
  constructor(
    private readonly validateSessionTokenHandler: ValidateSessionTokenHandler,
    private readonly updateSessionRateHandler: UpdateSessionRateHandler,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<Request>();

    const accessToken = request.headers.authorization?.split(' ').at(1);
    const refreshToken = request.headers['refreshtoken'] as string;
    const sessionId = request.headers['sessionid'] as string;

    await this.validateSessionTokenHandler.execute({
      accessToken,
      refreshToken,
      sessionId,
    });

    await this.updateSessionRateHandler.execute({ id: sessionId });

    return true;
  }
}
