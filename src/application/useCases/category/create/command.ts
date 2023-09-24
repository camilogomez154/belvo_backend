import { CategoryEntity } from '../../../../libs/datasource';

import { RecordWithoutDefaultColumns } from '../../../../domain';

export type CreateNewCategoryCommand =
  RecordWithoutDefaultColumns<CategoryEntity>;
