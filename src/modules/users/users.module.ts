import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';

@Module({
  imports: [UsersController],
})
export class UsersModule {}
