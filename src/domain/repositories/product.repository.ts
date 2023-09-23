import { ProductEntity } from '../entities';
import { RecordWithoutDefaultColumns, IGenericRepository } from '../core';

export interface IProductRepository extends IGenericRepository<ProductEntity> {
  create(
    record: RecordWithoutDefaultColumns<ProductEntity>,
  ): Promise<ProductEntity>;
  update(
    id: string,
    record: RecordWithoutDefaultColumns<ProductEntity>,
  ): Promise<ProductEntity>;
  delete(id: string): Promise<number>;
  get(): Promise<ProductEntity[]>;
  getById(id: string): Promise<ProductEntity>;
}
