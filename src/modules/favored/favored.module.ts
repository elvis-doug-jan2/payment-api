import { Module } from '@nestjs/common'
import { FavoredController } from './favored.controller'
import { FavoredService } from './favored.service'
import { DatabaseModule } from 'src/config/database/database.module'
import { FavoredRepository } from './favored.repository'
import { UsersModule } from '../client/client.module'
import { AccountsModule } from '../account/account.module'

@Module({
  imports: [DatabaseModule, UsersModule, AccountsModule],
  controllers: [FavoredController],
  providers: [FavoredService, FavoredRepository],
  exports: [FavoredService],
})
export class FavoredModule {}
