import { Inject } from '@nestjs/common'
import { Model } from 'mongoose'
import { IUser } from 'src/shared/interfaces/user.interface'
import { UsersDTO } from './users.dto'

export class UserRepository {
  constructor(
    @Inject('USER')
    private readonly userModel: Model<IUser>,
  ) {}

  async getAll(): Promise<IUser[]> {
    return this.userModel.find().lean()
  }

  async createUser(userData: UsersDTO): Promise<IUser> {
    userData.cpf = userData.cpf.replace(/-/g, '')

    return this.userModel.create(userData)
  }
}
