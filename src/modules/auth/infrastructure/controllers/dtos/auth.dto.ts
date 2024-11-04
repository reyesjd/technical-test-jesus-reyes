import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class AuthRequestDto {
  @ApiProperty({
    example: 'jdreyesmed@gmail.com',
    description: 'The email of the the auth',
    required: true,
  })
  @IsNotEmpty({ message: 'The email is required' })
  @IsString({
    message: 'The email must be string',
  })
  email: string;

  @ApiProperty({
    example: 'hola@12345',
    description: 'The password of the auth',
    required: true,
  })
  @IsNotEmpty({ message: 'The email is required' })
  @IsString({
    message: 'The email must be string',
  })
  password: string;
}

export class AuthResponseDto {
  @ApiProperty({
    example: 1,
    description: 'token',
    required: true,
  })
  access_token: string;
}
