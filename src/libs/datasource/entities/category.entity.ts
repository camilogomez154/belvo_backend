import { Column, Entity, Index, ManyToOne, OneToMany } from 'typeorm';
import { BaseEntity } from '../utilities';
import { ProductEntity } from './product.entity';
import { UserEntity } from './user.entity';

@Entity({ name: 'category' })
@Index(['name'])
export class CategoryEntity extends BaseEntity {
  @Column()
  name: string;

  @Column()
  description: string;

  @Column({ nullable: true })
  image: string;

  @ManyToOne(() => UserEntity, (user) => user.categories)
  user: UserEntity;

  @OneToMany(() => ProductEntity, (product) => product.category)
  products: ProductEntity[];
}
