import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Request } from 'express';

import { ValidateSessionTokenHandler } from '../../application';

@Injectable()
export class AuthorizationGuard implements CanActivate {
  constructor(
    private readonly validateSessionTokenHandler: ValidateSessionTokenHandler,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<Request>();

    const accessToken = request.headers.authorization?.split(' ').at(1);
    const refreshToken = request.headers['refreshToken'] as string;
    const sessionId = request.headers['sessionId'] as string;

    await this.validateSessionTokenHandler.execute({
      accessToken,
      refreshToken,
      sessionId,
    });

    return true;
  }
}
