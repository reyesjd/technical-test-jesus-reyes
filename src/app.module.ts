import { Module } from '@nestjs/common';
import { DatabaseModule } from './database';
import { ProductModule } from './modules';

@Module({
  imports: [DatabaseModule, ProductModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
