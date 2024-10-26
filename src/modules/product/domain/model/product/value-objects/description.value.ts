import { BadRequestException } from '@nestjs/common';
import { ValueObject } from 'src/common';

export class DescriptionVo extends ValueObject<string | undefined> {
  constructor(value?: string) {
    super(value, true);
    this.validate(value);
  }

  private validate(value?: string): void {
    if (value && typeof value !== 'string') {
      throw new BadRequestException(`Value of description should be a string`);
    }

    if (value && value.length > 1000) {
      throw new BadRequestException(
        `Description should be less than 1000 characters`,
      );
    }
  }
}
