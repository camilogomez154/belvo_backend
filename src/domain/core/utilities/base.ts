import { Exclude } from 'class-transformer';
import {
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export abstract class BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  readonly id!: string;

  @Column({ default: true })
  readonly isActive: boolean;

  @CreateDateColumn()
  readonly createdAt!: Date;

  @Exclude()
  @UpdateDateColumn()
  readonly updatedAt!: Date;
}
