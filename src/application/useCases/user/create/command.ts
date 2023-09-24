import { RecordWithoutDefaultColumns } from '../../../../domain';
import { UserEntity } from '../../../../libs/datasource';

export type CreateNewUserCommand = RecordWithoutDefaultColumns<UserEntity>;
