import { Module } from '@nestjs/common'
import { AccountController } from './account.controller'
import { AccountService } from './account.service'
import { DatabaseModule } from 'src/config/database/database.module'
import { AccountRepository } from './account.repository'

@Module({
  imports: [DatabaseModule],
  controllers: [AccountController],
  providers: [AccountService, AccountRepository],
  exports: [AccountService],
})
export class AccountsModule {}
