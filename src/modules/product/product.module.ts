import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProductEntity } from 'src/common';

import { ProductController, ProductRepository } from './infrastructure';
import { ProductService } from './app';
import { ProductRepositoryAbstract } from './domain';

@Module({
  imports: [TypeOrmModule.forFeature([ProductEntity])],
  controllers: [ProductController],
  providers: [
    {
      provide: ProductRepositoryAbstract,
      useClass: ProductRepository,
    },
    ProductService,
  ],
})
export class ProductModule {}
