import { SessionEntity, UserEntity } from '../../libs/datasource';
import { RecordWithoutDefaultColumns } from '../core';

export interface ISessionRepository {
  create(record: UserEntity): Promise<SessionEntity>;
  update(
    id: string,
    record: RecordWithoutDefaultColumns<SessionEntity>,
  ): Promise<SessionEntity>;
  getById(id: string): Promise<SessionEntity>;
  getByUserId(id: string): Promise<SessionEntity>;
}
