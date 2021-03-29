import { Body, Controller, Get, Post } from '@nestjs/common'
import { IAccount } from 'src/shared/interfaces/account.interface'
import { AccountDTO } from './account.dto'
import { AccountService } from './account.service'

@Controller('accounts')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Get()
  async getAllAccounts(): Promise<IAccount[]> {
    return this.accountService.getAllAccounts()
  }

  @Post()
  async createNewAccount(@Body() userData: AccountDTO): Promise<IAccount> {
    return this.accountService.createNewAccount(userData)
  }
}
