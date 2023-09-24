import { RecordWithoutDefaultColumns } from '../../../../domain';
import { ProductEntity } from '../../../../libs/datasource';

export type UpdateProductCommand = {
  id: string;
  record: RecordWithoutDefaultColumns<ProductEntity>;
};
