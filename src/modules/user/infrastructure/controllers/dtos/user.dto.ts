import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class UserRequestDto {
  @ApiProperty({
    example: 'jdreyesmed@gmail.com',
    description: 'The email of the the user',
    required: true,
  })
  @IsNotEmpty({ message: 'The email is required' })
  @IsString({
    message: 'The email must be string',
  })
  email: string;

  @ApiProperty({
    example: 'hola@12345',
    description: 'The password of the user',
    required: true,
  })
  @IsNotEmpty({ message: 'The email is required' })
  @IsString({
    message: 'The email must be string',
  })
  password: string;
}

export class UserResponseDto extends UserRequestDto {
  @ApiProperty({
    example: 1,
    description: 'The id of the User',
    required: true,
    type: Number,
  })
  id?: number;

  @ApiProperty({
    example: '2021-09-01T00:00:00.000Z',
    description: 'The date of creation of the User',
    required: true,
    type: Date,
  })
  createdAt?: Date;

  @ApiProperty({
    example: '2021-09-01T00:00:00.000Z',
    description: 'The date of the last update of the User',
    required: true,
    type: Date,
  })
  updatedAt?: Date;

  @ApiProperty({
    example: true,
    description: 'The status of the User (true is active, false is deleted)',
    required: true,
    type: Boolean,
  })
  status?: boolean;
}
