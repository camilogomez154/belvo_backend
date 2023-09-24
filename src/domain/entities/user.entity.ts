import { Column, Entity, Index, OneToMany } from 'typeorm';
import { BaseEntity } from '../core';
import { ProductEntity } from './product.entity';
import { CategoryEntity } from './category.entity';
import { SessionEntity } from './session.entity';
import { Exclude } from 'class-transformer';

@Entity({ name: 'user' })
@Index(['name'])
export class UserEntity extends BaseEntity {
  @Column()
  name: string;

  @Column()
  lastname: string;

  @Column()
  email: string;

  @Exclude()
  @Column()
  password: string;

  @Column({ nullable: true })
  image: string;

  @Column({ nullable: true })
  role: string;

  @OneToMany(() => ProductEntity, (product) => product.user)
  products: ProductEntity[];

  @OneToMany(() => CategoryEntity, (category) => category.user)
  categories: CategoryEntity[];

  @OneToMany(() => SessionEntity, (session) => session.user)
  sessions: SessionEntity[];
}
