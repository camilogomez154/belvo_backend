import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import {
  ISessionRepository,
  RecordWithoutDefaultColumns,
  SessionEntity,
  UserEntity,
} from '../../domain';

@Injectable()
export class SessionRepositoryImpl implements ISessionRepository {
  constructor(
    @InjectRepository(SessionEntity)
    private readonly repository: Repository<SessionEntity>,
  ) {}

  async create(record: UserEntity): Promise<SessionEntity> {
    const session = this.repository.create({ user: record });
    return await this.repository.save(session);
  }

  async update(
    id: string,
    record: RecordWithoutDefaultColumns<SessionEntity>,
  ): Promise<SessionEntity> {
    await this.repository.update(id, record);
    return await this.getById(id);
  }

  async getById(id: string): Promise<SessionEntity> {
    return await this.repository.findOneBy({ id });
  }

  async getByUserId(id: string): Promise<SessionEntity> {
    return await this.repository.findOne({
      where: { user: { id }, isActive: true },
      relations: { user: true },
    });
  }
}
