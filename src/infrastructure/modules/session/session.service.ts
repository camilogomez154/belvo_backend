import { Injectable } from '@nestjs/common';
import { AuthenticationDto } from './dto';

import {
  AuthenticationUserHandler,
  CreateSessionTokenHandler,
  CreateSessionHandler,
} from '../../../application';

@Injectable()
export class SessionService {
  constructor(
    private readonly authenticationUserHandler: AuthenticationUserHandler,
    private readonly createSessionTokenHandler: CreateSessionTokenHandler,
    private readonly createSessionHandler: CreateSessionHandler,
  ) {}

  async authentication(authentication: AuthenticationDto) {
    const userAuthenticated =
      await this.authenticationUserHandler.execute(authentication);
    const sessionId =
      await this.createSessionHandler.execute(userAuthenticated);
    const payload =
      await this.createSessionTokenHandler.execute(userAuthenticated);

    return { ...payload, sessionId };
  }

  async logout() {}
}
