import { Inject } from '@nestjs/common'
import { Model } from 'mongoose'
import { IAccount } from 'src/shared/interfaces/account.interface'
import { AccountDTO } from './account.dto'

export class AccountRepository {
  constructor(
    @Inject('ACCOUNT')
    private readonly accountModel: Model<IAccount>,
  ) {}

  async getAllAccounts(): Promise<IAccount[]> {
    return this.accountModel.find().populate('clientId').lean()
  }

  async createUserAccount(accountData: AccountDTO): Promise<IAccount> {
    return this.accountModel.create(accountData)
  }

  async getAccountsIdByQuery(query: object): Promise<{ _id: string }[]> {
    return this.accountModel.find(query).select('_id').lean()
  }
}
