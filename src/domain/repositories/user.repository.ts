import { RecordWithoutDefaultColumns, IGenericRepository } from '../core';
import { UserEntity } from '../entities';

export interface IUserRepository extends IGenericRepository<UserEntity> {
  create(record: RecordWithoutDefaultColumns<UserEntity>): Promise<UserEntity>;
  update(
    id: string,
    record: RecordWithoutDefaultColumns<UserEntity>,
  ): Promise<UserEntity>;
  delete(id: string): Promise<number>;
  get(): Promise<UserEntity[]>;
  getById(id: string): Promise<UserEntity>;
}
