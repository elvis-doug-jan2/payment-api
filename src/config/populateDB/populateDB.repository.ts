import { Inject } from '@nestjs/common'
import { Model } from 'mongoose'
import { IUser } from 'src/modules/favored/interfaces/user.interface'

export class PopulateDBRepository {
  constructor(
    @Inject('USER')
    private readonly userModel: Model<IUser>,
    @Inject('ACCOUNT')
    private readonly accountModel: Model<IUser>,
    @Inject('FAVORED')
    private readonly favoredModel: Model<IUser>,
  ) {}

  async checkTotalDocsForUsers(): Promise<number> {
    return this.userModel.countDocuments({})
  }

  async checkTotalDocsForAccounts(): Promise<number> {
    return this.accountModel.countDocuments({})
  }

  async checkTotalDocsForFavoreds(): Promise<number> {
    return this.favoredModel.countDocuments({})
  }
}
