import { ApiProperty } from '@nestjs/swagger';
import {
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  MaxLength,
} from 'class-validator';

export class ProductRequestDto {
  @ApiProperty({
    example: 'Tomato',
    description: 'The name of the product',
    required: true,
    type: String,
    maxLength: 255,
  })
  @IsNotEmpty({ message: 'Name is required' })
  @IsString({ message: 'Name must be a string' })
  @MaxLength(255, { message: 'Name must be less than 255 characters' })
  name: string;

  @ApiProperty({
    example: 'The tomato is a vegetable',
    description: 'The description of the product',
    required: false,
    type: String,
  })
  @IsOptional()
  @IsString({ message: 'Description must be a string' })
  description?: string;

  @ApiProperty({
    example: 10.5,
    description: 'The price of the product',
    required: true,
    type: Number,
  })
  @IsNotEmpty({ message: 'Price is required' })
  @IsNumber(
    {
      maxDecimalPlaces: 2,
    },
    { message: 'Price must be a decimal number with 2 decimal places' },
  )
  @IsPositive({ message: 'Price must be a positive number' })
  price: number;

  @ApiProperty({
    example: 10,
    description: 'The quantity of the product',
    required: true,
    type: Number,
  })
  @IsNotEmpty({ message: 'Quantity is required' })
  @IsNumber({}, { message: 'Quantity must be a number' })
  @IsPositive({ message: 'Quantity must be a positive number' })
  @IsInt({ message: 'Quantity must be an integer' })
  quantity: number;
}

export class ProductResponseDto extends ProductRequestDto {
  @ApiProperty({
    example: 1,
    description: 'The id of the product',
    required: true,
    type: Number,
  })
  id?: number;

  @ApiProperty({
    example: '2021-09-01T00:00:00.000Z',
    description: 'The date of creation of the product',
    required: true,
    type: Date,
  })
  createdAt?: Date;

  @ApiProperty({
    example: '2021-09-01T00:00:00.000Z',
    description: 'The date of the last update of the product',
    required: true,
    type: Date,
  })
  updatedAt?: Date;

  @ApiProperty({
    example: true,
    description: 'The status of the product (true is active, false is deleted)',
    required: true,
    type: Boolean,
  })
  status?: boolean;
}
