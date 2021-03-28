import { Inject } from '@nestjs/common'
import { Model } from 'mongoose'
import { IUser } from 'src/shared/interfaces/user.interface'

export class UserRepository {
  constructor(
    @Inject('USER')
    private readonly userModel: Model<IUser>,
  ) {}

  async getAll(): Promise<any> {
    return this.userModel.find().lean()
  }
}
