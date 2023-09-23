import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { SessionModule } from './session/session.module';
import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [UserModule, SessionModule, CategoryModule, ProductModule],
})
export class ModulesModule {}
