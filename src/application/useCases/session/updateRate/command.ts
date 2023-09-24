import { SessionEntity } from '../../../../libs/datasource';

export type UpdateSessionRateCommand = Required<Pick<SessionEntity, 'id'>>;
