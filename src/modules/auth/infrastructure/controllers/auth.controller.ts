import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { AuthService } from '../../app';
import { AuthRequestDto, AuthResponseDto } from './dtos';
import { Public } from 'src/common';

@ApiTags('Sign In')
@Controller('sign-in')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  @Public()
  @ApiOperation({ summary: 'Sign In' })
  @ApiResponse({
    status: 201,
    description: 'Sucess Request',
    type: AuthResponseDto,
  })
  @ApiResponse({ status: 400, description: 'Bad Request' })
  @ApiBody({ type: AuthRequestDto })
  public async createAuth(
    @Body() auth: AuthRequestDto,
  ): Promise<AuthResponseDto> {
    return await this.authService.signIn(auth.email, auth.password);
  }
}
