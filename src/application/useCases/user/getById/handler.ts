import { Injectable } from '@nestjs/common';

import { UserRepositoryImpl } from '../../../repositories';
import { UserEntity } from '../../../../domain';
import { IHandler } from '../../../core';

import { GetUserByIdCommand } from './command';

@Injectable()
export class GetUserByIdHandler
  implements IHandler<GetUserByIdCommand, UserEntity>
{
  constructor(private readonly userRepository: UserRepositoryImpl) {}

  async execute(command: GetUserByIdCommand): Promise<UserEntity> {
    return await this.userRepository.getById(command.id);
  }
}
