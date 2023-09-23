import { Injectable } from '@nestjs/common';

import { UserRepositoryImpl } from '../../../repositories';
import { UserEntity } from '../../../../domain';
import { IHandler } from '../../../core';

@Injectable()
export class getUserListHandler implements IHandler<undefined, UserEntity[]> {
  constructor(private readonly userRepository: UserRepositoryImpl) {}

  async execute(): Promise<UserEntity[]> {
    return await this.userRepository.get();
  }
}
