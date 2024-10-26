import { BadRequestException, Injectable } from '@nestjs/common';
import { IProduct, Product, ProductRepositoryAbstract } from '../domain';

@Injectable()
export class ProductService {
  constructor(private readonly productRepository: ProductRepositoryAbstract) {}

  public async createProduct(product: IProduct): Promise<IProduct> {
    const newProduct = new Product(product);

    return await this.productRepository.createProduct(newProduct);
  }

  public async getProducts(): Promise<IProduct[]> {
    return await this.productRepository.getProducts();
  }

  public async getProductById(id: number): Promise<IProduct> {
    const product = await this.productRepository.getProductById(id);

    if (!product) {
      throw new BadRequestException('Product does not exist');
    }

    return product;
  }

  public async updateProduct(product: IProduct): Promise<IProduct> {
    const productExists = await this.productRepository.getProductById(
      product.id,
    );

    if (!productExists) {
      throw new BadRequestException('Product does not exist');
    }

    const updatedProduct = new Product({
      ...productExists,
      ...product,
      updatedAt: new Date(),
    });

    return await this.productRepository.updateProduct(
      updatedProduct.toObject(),
    );
  }

  public async deleteProduct(id: number): Promise<void> {
    const productExists = await this.productRepository.getProductById(id);

    if (!productExists) {
      throw new BadRequestException('Product does not exist');
    }

    await this.productRepository.updateProduct({
      ...productExists,
      status: false,
      updatedAt: new Date(),
    });
  }
}
