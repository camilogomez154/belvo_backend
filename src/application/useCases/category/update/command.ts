import { RecordWithoutDefaultColumns } from '../../../../domain';
import { CategoryEntity } from '../../../../libs/datasource';

export type UpdateCategoryCommand = {
  id: string;
  record: RecordWithoutDefaultColumns<CategoryEntity>;
};
