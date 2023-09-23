import { UserEntity } from '../entities';
import {
  RecordWithoutDefaultColumns,
  IGenericRepository,
  IRepository,
} from '../core';

export interface IUserRepository
  extends IRepository<UserEntity>,
    IGenericRepository<UserEntity> {
  create(record: RecordWithoutDefaultColumns<UserEntity>): Promise<UserEntity>;
  update(
    id: string,
    record: RecordWithoutDefaultColumns<UserEntity>,
  ): Promise<UserEntity>;
  delete(id: string): Promise<number>;
  get(): Promise<UserEntity[]>;
  getById(id: string): Promise<UserEntity>;
}
