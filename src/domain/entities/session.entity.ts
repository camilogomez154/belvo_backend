import { Column, Entity, ManyToOne } from 'typeorm';
import { BaseEntity } from '../core';
import { UserEntity } from './user.entity';

@Entity({ name: 'session' })
export class SessionEntity extends BaseEntity {
  @Column({ default: 0 })
  rate: number;

  @ManyToOne(() => UserEntity, (user) => user.sessions)
  user: UserEntity;
}
