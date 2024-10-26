import { IProduct } from '../interface/product.interface';

export abstract class ProductRepositoryAbstract {
  /**
   * Create a new product
   * @param {IProduct} product
   * @returns {Promise<IProduct>}
   */
  abstract createProduct(product: IProduct): Promise<IProduct>;

  /**
   * Update a product
   * @param {IProduct} product
   * @returns {Promise<IProduct>}
   */
  abstract updateProduct(product: IProduct): Promise<IProduct>;

  /**
   * Get a product by id
   * @param {number} id
   * @returns {Promise<IProduct>}
   */
  abstract getProductById(id: number): Promise<IProduct>;

  /**
   * Get all products
   * @returns {Promise<IProduct[]>}
   */
  abstract getProducts(): Promise<IProduct[]>;
}
