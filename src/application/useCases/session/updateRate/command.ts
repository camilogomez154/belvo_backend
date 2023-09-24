import { SessionEntity } from '../../../../domain';

export type UpdateSessionRateCommand = Required<Pick<SessionEntity, 'id'>>;
