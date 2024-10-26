import { IProduct } from '../../interface';
import { DescriptionVo, NameVo, PriceVo, QuantityVo } from './value-objects';

export class Product {
  constructor(product: IProduct) {
    this._id = product.id;
    this._name = new NameVo(product.name);
    this._description = new DescriptionVo(product.description);
    this._price = new PriceVo(product.price);
    this._quantity = new QuantityVo(product.quantity);
    this._createdAt = product.createdAt || new Date();
    this._updatedAt = product.updatedAt || new Date();
    this._status = product.status || true;
  }

  private _id?: number;

  get id(): number | undefined {
    return this._id;
  }

  set id(value: number | undefined) {
    this._id = value;
  }

  private _name: NameVo;

  get name(): string {
    return this._name.value;
  }

  set name(value: string) {
    this._name = new NameVo(value);
  }

  private _description: DescriptionVo;

  get description(): string {
    return this._description.value;
  }

  set description(value: string) {
    this._description = new DescriptionVo(value);
  }

  private _price: PriceVo;

  get price(): number {
    return this._price.value;
  }

  set price(value: number) {
    this._price = new PriceVo(value);
  }

  private _quantity: QuantityVo;

  get quantity(): number {
    return this._quantity.value;
  }

  set quantity(value: number) {
    this._quantity = new QuantityVo(value);
  }

  private _createdAt: Date;

  get createdAt(): Date {
    return this._createdAt;
  }

  set createdAt(value: Date) {
    this._createdAt = value;
  }

  private _updatedAt?: Date;

  get updatedAt(): Date | undefined {
    return this._updatedAt;
  }

  set updatedAt(value: Date | undefined) {
    this._updatedAt = value;
  }

  private _status: boolean;

  get status(): boolean {
    return this._status;
  }

  set status(value: boolean) {
    this._status = value;
  }

  public toObject(): IProduct {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      price: this.price,
      quantity: this.quantity,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      status: this.status,
    };
  }
}
