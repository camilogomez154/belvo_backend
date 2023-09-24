import { RecordWithoutDefaultColumns } from '../../../../domain';
import { ProductEntity } from '../../../../libs/datasource';

export type CreateNewProductCommand =
  RecordWithoutDefaultColumns<ProductEntity>;
