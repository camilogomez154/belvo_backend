import { Injectable } from '@nestjs/common';

import { UserEntity } from '../../../../libs/datasource';

import { UserRepositoryImpl } from '../../../repositories';
import { IHandler } from '../../../core';

@Injectable()
export class GetUserListHandler implements IHandler<undefined, UserEntity[]> {
  constructor(private readonly userRepository: UserRepositoryImpl) {}

  async execute(): Promise<UserEntity[]> {
    return await this.userRepository.get();
  }
}
