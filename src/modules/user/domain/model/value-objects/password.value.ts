import { BadRequestException } from '@nestjs/common';
import { ValueObject } from 'src/common';

export class PasswordVo extends ValueObject<string> {
  constructor(value: string) {
    super(value);
    this.validate(value);
  }

  private validate(value: string): void {
    /*if (
      !value.match(
        /^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$/,
      )
    ) {
      throw new BadRequestException(
        'Password mus have minimum eight characters, at least one letter, one number and one special character',
      );
    }*/
  }
}
