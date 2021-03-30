import { Injectable } from '@nestjs/common'
import { UserRepository } from './users.repository'
import { UsersDTO } from './users.dto'
import { IUser } from 'src/shared/interfaces/user.interface'

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UserRepository) {}

  async getAllUsers(): Promise<IUser[]> {
    return this.userRepository.getAll()
  }

  async createNewUser(userData: UsersDTO): Promise<IUser> {
    return this.userRepository.createUser(userData)
  }

  async getUserDataByCpf(cpf: string): Promise<IUser> {
    return this.userRepository.getUserDataByCpf(cpf)
  }

  async addNewAccountIdOnUser(cpf: string, accountId: string): Promise<any> {
    return this.userRepository.updateUserByCpf(cpf, { $push: { accountsId: accountId } })
  }
}
