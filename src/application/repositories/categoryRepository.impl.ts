import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import {
  CategoryEntity,
  ICategoryRepository,
  RecordWithoutDefaultColumns,
} from '../../domain/';

@Injectable()
export class CategoryRepositoryImpl implements ICategoryRepository {
  constructor(
    @InjectRepository(CategoryEntity)
    private readonly repository: Repository<CategoryEntity>,
  ) {}

  async create(
    record: RecordWithoutDefaultColumns<CategoryEntity>,
  ): Promise<CategoryEntity> {
    const category = this.repository.create(record);
    return await this.repository.save(category);
  }

  async update(
    id: string,
    record: RecordWithoutDefaultColumns<CategoryEntity>,
  ): Promise<CategoryEntity> {
    const updated = await this.repository.update(id, record);
    console.log(updated);
    return await this.getById(id);
  }

  async delete(id: string): Promise<number> {
    const deleted = await this.repository.delete(id);
    console.log(deleted);
    return 1;
  }

  async get(): Promise<CategoryEntity[]> {
    return await this.repository.find();
  }

  async getById(id: string): Promise<CategoryEntity> {
    return await this.repository.findOne({ where: { id } });
  }

  async getByName(name: string): Promise<CategoryEntity> {
    return await this.repository.findOne({ where: { name } });
  }
}
