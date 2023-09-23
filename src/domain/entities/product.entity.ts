import { Column, Entity, Index, ManyToOne } from 'typeorm';
import { BaseEntity } from '../core';
import { UserEntity } from './user.entity';
import { CategoryEntity } from './category.entity';

@Entity({ name: 'product' })
@Index(['name'])
export class ProductEntity extends BaseEntity {
  @Column()
  name: string;

  @Column()
  description: string;

  @Column({ nullable: true })
  image: string;

  @ManyToOne(() => UserEntity, (user) => user.products)
  user: UserEntity;

  @ManyToOne(() => CategoryEntity, (category) => category.products)
  category: CategoryEntity;
}
