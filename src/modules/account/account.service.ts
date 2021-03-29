import { Injectable } from '@nestjs/common'
import { AccountRepository } from './account.repository'
import { AccountDTO } from './account.dto'
import { IAccount } from 'src/shared/interfaces/account.interface'

@Injectable()
export class AccountService {
  constructor(private readonly accountRepository: AccountRepository) {}

  async getAllAccounts(): Promise<IAccount[]> {
    return this.accountRepository.getAllAccounts()
  }

  async createNewAccount(accountData: AccountDTO): Promise<IAccount> {
    return this.accountRepository.createUserAccount(accountData)
  }
}
