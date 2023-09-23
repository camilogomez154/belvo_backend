import * as Entities from '../../entities';
import { BaseEntity } from '../utilities';

const entitiesToUse = Object.values(Entities);

export type RecordWithoutDefaultColumns<T = typeof entitiesToUse> = Omit<
  Partial<T>,
  keyof BaseEntity
>;
