import { ProductEntity, RecordWithoutDefaultColumns } from '../../../../domain';

export type UpdateProductCommand = {
  id: string;
  record: RecordWithoutDefaultColumns<ProductEntity>;
};
