import { RecordWithoutDefaultColumns, IGenericRepository } from '../core';
import { CategoryEntity } from '../entities';

export interface ICategoryRepository
  extends IGenericRepository<CategoryEntity> {
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
  getCategoryByName(name: string): Promise<CategoryEntity>;
}