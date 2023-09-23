import { Injectable } from '@nestjs/common';
import { AuthenticationDto } from './dto';

import {
  AuthenticationUserHandler,
  CreateSessionTokenHandler,
} from '../../../application';

@Injectable()
export class SessionService {
  constructor(
    private readonly authenticationUserHandler: AuthenticationUserHandler,
    private readonly createSessionTokenHandler: CreateSessionTokenHandler,
  ) {}

  async authentication(authentication: AuthenticationDto) {
    const userAuthenticated =
      await this.authenticationUserHandler.execute(authentication);
    const payload = this.createSessionTokenHandler.execute(userAuthenticated);
    return payload;
  }

  async logout() {}
}
