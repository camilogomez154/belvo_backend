// Modules
import { Body, Controller, Delete, Post, UseGuards } from '@nestjs/common';
import { ApiHeaders, ApiTags } from '@nestjs/swagger';

// Services
import { SessionService } from './session.service';

import { AuthorizationGuard } from '../../guards';
import { AuthenticationDto } from './dto';

@ApiTags('session')
@Controller('session')
export class SessionController {
  constructor(private readonly sessionService: SessionService) {}

  @Post('authentication')
  async authentication(@Body() authentication: AuthenticationDto) {
    return await this.sessionService.authentication(authentication);
  }

  @ApiHeaders([
    {
      name: 'refreshToken',
      description:
        'Token para hacer re-crear el token en caso de estar vencido',
    },
    {
      name: 'sessionId',
      description: 'session id es para validar la sesión en la base de datos.',
    },
  ])
  @UseGuards(AuthorizationGuard)
  @Delete('logout')
  async logout() {
    return await this.sessionService.logout();
  }
}
