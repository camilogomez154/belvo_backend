import { CategoryEntity } from '../entities';
import {
  RecordWithoutDefaultColumns,
  IGenericRepository,
  IRepository,
} from '../core';

export interface ICategoryRepository
  extends IRepository<CategoryEntity>,
    IGenericRepository<CategoryEntity> {
  create(
    record: RecordWithoutDefaultColumns<CategoryEntity>,
  ): Promise<CategoryEntity>;
  update(
    id: string,
    record: RecordWithoutDefaultColumns<CategoryEntity>,
  ): Promise<CategoryEntity>;
  delete(id: string): Promise<number>;
  get(): Promise<CategoryEntity[]>;
  getById(id: string): Promise<CategoryEntity>;
}
