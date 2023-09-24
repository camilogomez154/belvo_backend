import { Injectable } from '@nestjs/common';

import { SessionRepositoryImpl } from '../../../repositories';
import { IHandler } from '../../../core';

import { UpdateSessionRateValidator } from './validator';
import { UpdateSessionRateCommand } from './command';

@Injectable()
export class UpdateSessionRateHandler
  implements IHandler<UpdateSessionRateCommand, void>
{
  constructor(
    private readonly sessionRepository: SessionRepositoryImpl,
    private readonly updateSessionRateValidator: UpdateSessionRateValidator,
  ) {}

  async execute(command: UpdateSessionRateCommand): Promise<void> {
    await this.updateSessionRateValidator.validate(command);

    const session = await this.sessionRepository.getById(command.id);
    await this.sessionRepository.update(command.id, { rate: session.rate + 1 });
  }
}
