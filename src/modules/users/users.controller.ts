import { Body, Controller, Get, Post } from '@nestjs/common'
import { IUser } from 'src/shared/interfaces/user.interface'
import { UsersDTO } from './users.dto'
import { UsersService } from './users.service'

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async getAllUsers(): Promise<IUser[]> {
    return this.usersService.getAllUsers()
  }

  @Post()
  async createNewUser(@Body() userData: UsersDTO): Promise<IUser> {
    return this.usersService.createNewUser(userData)
  }
}
