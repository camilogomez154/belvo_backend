import { BaseEntity, entities } from '../../../libs/datasource';

export type RecordWithoutDefaultColumns<T = typeof entities> = Omit<
  Partial<T>,
  keyof BaseEntity | 'products' | 'categories' | 'sessions' | 'user'
>;
