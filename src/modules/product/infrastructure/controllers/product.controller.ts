import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ProductService } from '../../app';
import { ProductRequestDto, ProductResponseDto } from './dtos/product.dto';
import { AuthGuard } from 'src/common';

@ApiTags('Products')
@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  @UseGuards(AuthGuard)
  @ApiOperation({ summary: 'Create a new product' })
  @ApiBearerAuth()
  @ApiResponse({
    status: 201,
    description: 'Sucess Request',
    type: ProductResponseDto,
  })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @ApiBody({ type: ProductRequestDto })
  public async createProduct(
    @Body() product: ProductRequestDto,
  ): Promise<ProductResponseDto> {
    return await this.productService.createProduct(product);
  }

  @Put(':id')
  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @ApiParam({
    name: 'id',
    type: 'number',
    required: true,
    description: 'Id of the product to update',
  })
  @ApiOperation({ summary: 'Update a product' })
  @ApiResponse({
    status: 200,
    description: 'Sucess Request',
    type: ProductResponseDto,
  })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @ApiBody({ type: ProductRequestDto })
  public async updateProduct(
    @Param('id') id: number,
    @Body() product: ProductRequestDto,
  ): Promise<ProductResponseDto> {
    return await this.productService.updateProduct({ ...product, id });
  }

  @Get()
  @UseGuards(AuthGuard)
  @ApiOperation({ summary: 'List all products' })
  @ApiBearerAuth()
  @ApiResponse({
    status: 200,
    description: 'Sucess Request',
    type: ProductResponseDto,
    isArray: true,
  })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  public async getProducts(): Promise<ProductResponseDto[]> {
    return await this.productService.getProducts();
  }

  @Get(':id')
  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @ApiParam({
    name: 'id',
    type: 'number',
    required: true,
    description: 'Id of the product to get',
  })
  @ApiOperation({ summary: 'Get a product by id' })
  @ApiResponse({
    status: 200,
    description: 'Sucess Request',
    type: ProductResponseDto,
  })
  public async getProductById(
    @Param('id') id: number,
  ): Promise<ProductResponseDto> {
    return await this.productService.getProductById(id);
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  @ApiBearerAuth()
  @ApiParam({
    name: 'id',
    type: 'number',
    required: true,
    description: 'Id of the product to delete',
  })
  @ApiOperation({ summary: 'Delete a product' })
  @ApiResponse({ status: 204, description: 'Sucess Request' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  public async deleteProduct(@Param('id') id: number): Promise<void> {
    await this.productService.deleteProduct(id);
  }
}
