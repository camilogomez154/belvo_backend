import {
  CategoryEntity,
  RecordWithoutDefaultColumns,
} from '../../../../domain';

export type CreateNewCategoryCommand =
  RecordWithoutDefaultColumns<CategoryEntity>;
