import { BadRequestException } from '@nestjs/common';
import { ValueObject } from 'src/common';

export class NameVo extends ValueObject<string> {
  constructor(value: string) {
    super(value);
    this.validate(value);
  }

  private validate(value: string): void {
    if (typeof value !== 'string') {
      throw new BadRequestException(`Value of name should be a string`);
    }

    if (value.length > 255) {
      throw new BadRequestException('Name should be less than 255 characters');
    }
  }
}
