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
    return this.userModel.find().sort({ createdAt: -1 }).lean()
  }

  async createUser(userData: UsersDTO): Promise<IUser> {
    return this.userModel.create(userData)
  }

  async getUserDataByCpf(cpf: string): Promise<IUser> {
    return this.userModel.findOne({ cpf }).lean()
  }

  async updateUserByCpf(cpf: string, newData: object): Promise<any> {
    return this.userModel.findOneAndUpdate({ cpf }, newData, { new: true }).lean()
  }
}
