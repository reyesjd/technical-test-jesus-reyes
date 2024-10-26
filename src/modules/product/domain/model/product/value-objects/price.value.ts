import { BadRequestException } from '@nestjs/common';
import { ValueObject } from 'src/common';

export class PriceVo extends ValueObject<number> {
  constructor(value: number) {
    super(value);
    this.validate(value);
  }

  private validate(value: number): void {
    if (value < 0) {
      throw new BadRequestException(`Value of price should be greater than 0`);
    }
  }
}
