import { UserEntity, RecordWithoutDefaultColumns } from '../../../../domain';

export type UpdateUserCommand = {
  id: string;
  record: RecordWithoutDefaultColumns<UserEntity>;
};
