import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import { IHandler, PayloadToken } from '../../../core';
import { CreateSessionTokenCommand } from './command';

@Injectable()
export class CreateSessionTokenHandler
  implements IHandler<CreateSessionTokenCommand, PayloadToken>
{
  constructor(private readonly jwtService: JwtService) {}

  async execute({
    id,
    ...rest
  }: CreateSessionTokenCommand): Promise<PayloadToken> {
    const accessToken = await this.jwtService.signAsync({ sub: id, ...rest });
    return {
      refreshToken: '',
      sessionId: '',
      accessToken,
    };
  }
}
