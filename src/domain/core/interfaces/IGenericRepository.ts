import { RecordWithoutDefaultColumns } from '../types/recordWithoutDefaultColumns';

export interface IGenericRepository<T> {
  create(record: RecordWithoutDefaultColumns<T>): Promise<T>;
  update(id: string, record: RecordWithoutDefaultColumns<T>): Promise<T>;
  delete(id: string): Promise<number>;
  get(): Promise<T[]>;
  getById(id: string): Promise<T>;
}
