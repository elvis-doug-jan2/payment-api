import { Inject } from '@nestjs/common'
import { Model } from 'mongoose'
import { IClient } from 'src/shared/interfaces/client.interface'

export class PopulateDBRepository {
  constructor(
    @Inject('CLIENT')
    private readonly clientModel: Model<IClient>,
    @Inject('ACCOUNT')
    private readonly accountModel: Model<IClient>,
    @Inject('FAVORED')
    private readonly favoredModel: Model<IClient>,
  ) {}

  async checkTotalDocsForUsers(): Promise<number> {
    return this.clientModel.countDocuments({})
  }

  async checkTotalDocsForAccounts(): Promise<number> {
    return this.accountModel.countDocuments({})
  }

  async checkTotalDocsForFavoreds(): Promise<number> {
    return this.favoredModel.countDocuments({})
  }
}
