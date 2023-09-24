import { RecordWithoutDefaultColumns, IGenericRepository } from '../core';
import { CategoryEntity } from '../../libs/datasource';

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
  getByName(name: string): Promise<CategoryEntity>;
}
