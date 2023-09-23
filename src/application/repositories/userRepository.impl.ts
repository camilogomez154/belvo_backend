import { Repository } from 'typeorm';
import {
  UserEntity,
  IUserRepository,
  RecordWithoutDefaultColumns,
} from '../../domain/';
import { InjectRepository } from '@nestjs/typeorm';

export class UserRepositoryImpl implements IUserRepository {
  constructor(
    @InjectRepository(UserEntity)
    private readonly repository: Repository<UserEntity>,
  ) {}

  async create(
    record: RecordWithoutDefaultColumns<UserEntity>,
  ): Promise<UserEntity> {
    const category = this.repository.create(record);
    return await this.repository.save(category);
  }

  async update(
    id: string,
    record: RecordWithoutDefaultColumns<UserEntity>,
  ): Promise<UserEntity> {
    const updated = await this.repository.update(id, record);
    console.log(updated);
    return await this.getById(id);
  }

  async delete(id: string): Promise<number> {
    const deleted = await this.repository.delete(id);
    console.log(deleted);
    return 1;
  }

  async get(): Promise<UserEntity[]> {
    return await this.repository.find();
  }

  async getById(id: string): Promise<UserEntity> {
    return await this.repository.findOne({ where: { id } });
  }
}
