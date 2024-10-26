import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { ValidationError } from 'class-validator';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const status = exception.getStatus
      ? exception.getStatus()
      : HttpStatus.INTERNAL_SERVER_ERROR;

    const responseBody = exception.getResponse() as any;
    let message: string;

    if (typeof responseBody === 'string') {
      message = responseBody;
    } else {
      if (responseBody?.message instanceof Array) {
        message = responseBody.message[0];
      } else {
        message = responseBody?.message || 'An error occurred';
      }
    }

    response.status(status).json({
      message,
      data: {},
      timestamp: new Date().toISOString(),
    });
  }
}
