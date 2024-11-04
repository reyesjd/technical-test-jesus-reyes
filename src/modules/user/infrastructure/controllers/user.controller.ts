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
  ApiBasicAuth,
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { UserService } from '../../app';
import { UserRequestDto, UserResponseDto } from './dtos';
import { AuthGuard } from 'src/common';

@ApiBearerAuth()
@ApiTags('Users')
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @UseGuards(AuthGuard)
  @ApiOperation({ summary: 'Create a new user' })
  @ApiResponse({
    status: 201,
    description: 'Sucess Request',
    type: UserResponseDto,
  })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @ApiBody({ type: UserRequestDto })
  public async createUser(
    @Body() user: UserRequestDto,
  ): Promise<UserResponseDto> {
    return await this.userService.createUser(user);
  }

  @Put(':id')
  @UseGuards(AuthGuard)
  @ApiParam({
    name: 'id',
    type: 'number',
    required: true,
    description: 'Id of the user to update',
  })
  @ApiOperation({ summary: 'Update a user' })
  @ApiResponse({
    status: 200,
    description: 'Sucess Request',
    type: UserResponseDto,
  })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @ApiBody({ type: UserRequestDto })
  public async updateUser(
    @Param('id') id: number,
    @Body() user: UserRequestDto,
  ): Promise<UserResponseDto> {
    return await this.userService.updateUser({ ...user, id });
  }

  @Get()
  @UseGuards(AuthGuard)
  @ApiOperation({ summary: 'List all users' })
  @ApiResponse({
    status: 200,
    description: 'Sucess Request',
    type: UserResponseDto,
    isArray: true,
  })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  public async getUsers(): Promise<UserResponseDto[]> {
    return await this.userService.getUsers();
  }

  @Get(':id')
  @UseGuards(AuthGuard)
  @ApiParam({
    name: 'id',
    type: 'number',
    required: true,
    description: 'Id of the user to get',
  })
  @ApiOperation({ summary: 'Get a user by id' })
  @ApiResponse({
    status: 200,
    description: 'Sucess Request',
    type: UserResponseDto,
  })
  public async getUserById(@Param('id') id: number): Promise<UserResponseDto> {
    return await this.userService.getUserById(id);
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  @ApiParam({
    name: 'id',
    type: 'number',
    required: true,
    description: 'Id of the user to delete',
  })
  @ApiOperation({ summary: 'Delete a user' })
  @ApiResponse({ status: 204, description: 'Sucess Request' })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  public async deleteUser(@Param('id') id: number): Promise<void> {
    await this.userService.deleteUser(id);
  }
}
