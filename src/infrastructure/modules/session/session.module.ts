import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { DatasourceModule } from '../../datasource/datasource.module';

import { SessionController } from './session.controller';
import { SessionService } from './session.service';

import {
  AuthenticationUserValidator,
  AuthenticationUserHandler,
  CreateSessionTokenHandler,
  ValidateSessionTokenHandler,
  ValidateSessionTokenValidator,
  CreateSessionHandler,
  CreateSessionValidator,
  SessionRepositoryImpl,
  UserRepositoryImpl,
} from '../../../application';

@Module({
  imports: [
    DatasourceModule,
    JwtModule.register({
      secret: 'texto_para_generar_un_token_bien_random_estatico_por_ahora_XD',
      signOptions: { expiresIn: '60 minutes' },
    }),
  ],
  controllers: [SessionController],
  providers: [
    AuthenticationUserValidator,
    AuthenticationUserHandler,
    CreateSessionTokenHandler,
    ValidateSessionTokenHandler,
    ValidateSessionTokenValidator,
    CreateSessionHandler,
    CreateSessionValidator,
    SessionRepositoryImpl,
    UserRepositoryImpl,
    SessionService,
  ],
})
export class SessionModule {}
