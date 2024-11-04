import { Module } from '@nestjs/common';
import { UserModule } from '../user/user.module';
import { AuthController } from './infrastructure';
import { AuthService } from './app';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: 'secret',
      signOptions: { expiresIn: '60s' },
    }),
    UserModule,
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
