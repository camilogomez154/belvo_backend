import { PayloadToken } from '../../../core';
import { CreateSessionTokenCommand } from '../createToken/command';

export type ValidateSessionTokenCommand = PayloadToken;

export type ValidateSessionPayloadCommand = Omit<
  CreateSessionTokenCommand,
  'id'
> & { sub: string };
