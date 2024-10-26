import { BadRequestException } from '@nestjs/common';
import { ValueObject } from 'src/common';

export class QuantityVo extends ValueObject<number> {
  constructor(value: number) {
    super(value);
    this.validate(value);
  }

  private validate(value: number): void {
    if (value < 0) {
      throw new BadRequestException(
        `Value of quantity should be greater than 0`,
      );
    }

    if (!Number.isInteger(value)) {
      throw new BadRequestException(`Value of quantity should be an integer`);
    }
  }
}
