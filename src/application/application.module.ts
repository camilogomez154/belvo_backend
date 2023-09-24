import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { respositories, useCases } from './core';
import { DatasourceModule } from './datasource/datasource.module';

@Module({
  imports: [
    DatasourceModule,
    JwtModule.register({
      secret: 'texto_para_generar_un_token_bien_random_estatico_por_ahora_XD',
      signOptions: { expiresIn: '60 minutes' },
    }),
  ],
  providers: [...respositories, ...useCases],
  exports: [...respositories, ...useCases],
})
export class ApplicationModule {}
