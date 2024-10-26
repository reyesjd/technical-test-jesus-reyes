import { BadRequestException } from '@nestjs/common';

type Primitives = string | number | boolean | Date;

export abstract class ValueObject<T extends Primitives> {
  readonly value: T;

  public constructor(value: T, isOptional = false) {
    if (!isOptional) {
      this.isDefined(value);
    }
    this.value = value;
  }

  private isDefined(value: T): void {
    if (value === null || value === undefined) {
      throw new BadRequestException(
        `Value of ${this.constructor.name} should not be null or undefined`,
      );
    }
  }
}
