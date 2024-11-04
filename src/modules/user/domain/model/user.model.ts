import { IUser } from '../interface';
import { EmailVo, PasswordVo } from './value-objects';

export class User {
  constructor(user: IUser) {
    this._id = user.id;
    this._email = new EmailVo(user.email);
    this._password = new PasswordVo(user.password);
    this._createdAt = user.createdAt || new Date();
    this._updatedAt = user.updatedAt || new Date();
    this._status = user.status || true;
  }

  private _id?: number;

  get id(): number | undefined {
    return this._id;
  }

  set id(value: number | undefined) {
    this._id = value;
  }

  private _email: EmailVo;

  get email(): string {
    return this._email.value;
  }

  set email(value: string) {
    this._email = new EmailVo(value);
  }

  private _password: PasswordVo;

  get password(): string {
    return this._password.value;
  }

  set password(value: string) {
    this._password = new PasswordVo(value);
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

  public toObject(): IUser {
    return {
      id: this.id,
      email: this.email,
      password: this.password,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
      status: this.status,
    };
  }
}
