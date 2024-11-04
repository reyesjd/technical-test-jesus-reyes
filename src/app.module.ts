import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { DatabaseModule } from './database';
import { AuthModule, ProductModule, UserModule } from './modules';
import { AuthGuard } from './common/guards/auth.guard';

@Module({
  imports: [DatabaseModule, ProductModule, UserModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
