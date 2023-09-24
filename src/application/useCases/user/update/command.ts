import { RecordWithoutDefaultColumns } from '../../../../domain';
import { UserEntity } from '../../../../libs/datasource';

export type UpdateUserCommand = {
  id: string;
  record: RecordWithoutDefaultColumns<UserEntity>;
};
