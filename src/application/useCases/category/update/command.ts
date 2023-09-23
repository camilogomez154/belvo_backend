import {
  CategoryEntity,
  RecordWithoutDefaultColumns,
} from '../../../../domain';

export type UpdateCategoryCommand = {
  id: string;
  record: RecordWithoutDefaultColumns<CategoryEntity>;
};
