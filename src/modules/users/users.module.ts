import { Module } from '@nestjs/common'
import { UsersController } from './users.controller'
import { UsersService } from './users.service'
import { DatabaseModule } from 'src/config/database/database.module'
import { UserRepository } from './users.repository'

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [UsersService, UserRepository],
  exports: [UsersService],
})
export class UsersModule {}
