import { Module } from '@nestjs/common';

import { ProductController } from './product.controller';
import { ProductService } from './product.service';

import { ApplicationModule } from '../../../application/application.module';

@Module({
  imports: [ApplicationModule],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule {}
