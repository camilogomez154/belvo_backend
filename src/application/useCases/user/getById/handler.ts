import { Injectable, NotFoundException } from '@nestjs/common';

import { UserEntity } from '../../../../libs/datasource';

import { UserRepositoryImpl } from '../../../repositories';
import { IHandler } from '../../../core';

import { GetUserByIdCommand } from './command';

@Injectable()
export class GetUserByIdHandler
  implements IHandler<GetUserByIdCommand, UserEntity>
{
  constructor(private readonly userRepository: UserRepositoryImpl) {}

  async execute(command: GetUserByIdCommand): Promise<UserEntity> {
    const userFound = await this.userRepository.getById(command.id);

    if (!userFound)
      throw new NotFoundException(`User with id '${command.id}' not found.`);

    return userFound;
  }
}
