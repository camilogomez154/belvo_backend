import { UserEntity, RecordWithoutDefaultColumns } from '../../../../domain';

export type CreateNewUserCommand = RecordWithoutDefaultColumns<UserEntity>;
