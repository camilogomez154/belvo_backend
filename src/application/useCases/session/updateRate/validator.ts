import { Injectable, ConflictException } from '@nestjs/common';

import { SessionRepositoryImpl } from '../../../repositories';
import { IValidator } from '../../../core';

import { UpdateSessionRateCommand } from './command';

@Injectable()
export class UpdateSessionRateValidator
  implements IValidator<UpdateSessionRateCommand>
{
  constructor(private readonly sessionRepository: SessionRepositoryImpl) {}

  async validate(command: UpdateSessionRateCommand): Promise<void> {
    const session = await this.sessionRepository.getById(command.id);

    if (!session)
      throw new ConflictException(`Session with id '${command.id}' not found.`);

    if (!session.isActive)
      throw new ConflictException(
        `Session with id '${command.id}' is not active.`,
      );
  }
}
