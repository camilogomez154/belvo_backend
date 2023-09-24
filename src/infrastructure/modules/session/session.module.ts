import { Module } from '@nestjs/common';

import { SessionController } from './session.controller';
import { SessionService } from './session.service';

import { ApplicationModule } from '../../../application/application.module';

@Module({
  imports: [ApplicationModule],
  controllers: [SessionController],
  providers: [SessionService],
})
export class SessionModule {}
