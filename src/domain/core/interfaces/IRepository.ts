import { Repository } from 'typeorm';

import { BaseEntity } from '../utilities';

export interface IRepository<T extends BaseEntity> {
  readonly repository: Repository<T>;
}
