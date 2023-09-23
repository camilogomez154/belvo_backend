// Modules
import { Controller, Delete, Post } from '@nestjs/common';

// Services
import { SessionService } from './session.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('session')
@Controller('session')
export class SessionController {
  constructor(private readonly sessionService: SessionService) {}

  @Post('authentication')
  async authentication() {
    return await this.sessionService.authentication();
  }

  @Delete('logout')
  async logout() {
    return await this.sessionService.logout();
  }
}
