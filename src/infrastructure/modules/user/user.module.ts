import { Module } from '@nestjs/common';

import { UserController } from './user.controller';
import { UserService } from './user.service';

import { ApplicationModule } from '../../../application/application.module';

@Module({
  imports: [ApplicationModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
