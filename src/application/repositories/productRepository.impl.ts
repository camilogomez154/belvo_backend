import { Repository } from 'typeorm';
import {
  ProductEntity,
  IProductRepository,
  RecordWithoutDefaultColumns,
} from '../../domain/';
import { InjectRepository } from '@nestjs/typeorm';

export class ProductRepositoryImpl implements IProductRepository {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly repository: Repository<ProductEntity>,
  ) {}

  async create(
    record: RecordWithoutDefaultColumns<ProductEntity>,
  ): Promise<ProductEntity> {
    const category = this.repository.create(record);
    return await this.repository.save(category);
  }

  async update(
    id: string,
    record: RecordWithoutDefaultColumns<ProductEntity>,
  ): Promise<ProductEntity> {
    const updated = await this.repository.update(id, record);
    console.log(updated);
    return await this.getById(id);
  }

  async delete(id: string): Promise<number> {
    const deleted = await this.repository.delete(id);
    console.log(deleted);
    return 1;
  }

  async get(): Promise<ProductEntity[]> {
    return await this.repository.find();
  }

  async getById(id: string): Promise<ProductEntity> {
    return await this.repository.findOne({ where: { id } });
  }
}
