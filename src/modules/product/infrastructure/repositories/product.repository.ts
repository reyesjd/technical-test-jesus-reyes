import { Injectable } from '@nestjs/common';
import { IProduct, ProductRepositoryAbstract } from '../../domain';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from 'src/common';
import { Repository } from 'typeorm';

@Injectable()
export class ProductRepository implements ProductRepositoryAbstract {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>,
  ) {}

  /**
   * Create a new product
   * @param {IProduct} product
   * @returns {Promise<IProduct>}
   */
  public async createProduct(product: IProduct): Promise<IProduct> {
    const newProduct = this.productRepository.create(product);
    return await this.productRepository.save(newProduct);
  }

  /**
   * Update a product
   * @param {IProduct} product
   * @returns {Promise<IProduct>}
   */
  public async updateProduct(product: IProduct): Promise<IProduct> {
    await this.productRepository.update(product.id, product);
    return this.getProductById(product.id);
  }

  /**
   * Get a product by id
   * @param {number} id
   * @returns {Promise<IProduct>}
   */
  public async getProductById(id: number): Promise<IProduct> {
    return await this.productRepository.findOneBy({ id, status: true });
  }

  /**
   * Get a products
   * @param {number} id
   * @returns {Promise<IProduct[]>}
   */
  public async getProducts(): Promise<IProduct[]> {
    return await this.productRepository.findBy({
      status: true,
    });
  }
}
