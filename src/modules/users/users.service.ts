import { Injectable } from '@nestjs/common'
import { UserRepository } from './users.repository'

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UserRepository) {}

  async getAllUsers(): Promise<any> {
    return this.userRepository.getAll()
  }

  getHello(): string {
    return 'Hello World!'
  }
}
