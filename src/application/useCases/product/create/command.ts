import { ProductEntity, RecordWithoutDefaultColumns } from '../../../../domain';

export type CreateNewProductCommand =
  RecordWithoutDefaultColumns<ProductEntity>;
