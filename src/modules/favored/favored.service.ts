import { Injectable } from '@nestjs/common'
import { IFavored } from 'src/shared/interfaces/favored.interface'
import { FavoredDTO } from './favored.dto'
import { FavoredRepository } from './favored.repository'
import { UsersService } from '../../modules/users/users.service'
import { AccountService } from '../account/account.service'

@Injectable()
export class FavoredService {
  constructor(
    private readonly favoredRepository: FavoredRepository,
    private readonly usersService: UsersService,
    private readonly accountService: AccountService,
  ) {}

  async getAllFavoreds(): Promise<IFavored[]> {
    return this.favoredRepository.getAllFavoreds()
  }

  async createFavoredRegistry(favoredData: FavoredDTO): Promise<IFavored> {
    const accountData = await this.accountService.createNewAccount(favoredData.accountData)

    let userData = await this.usersService.getUserDataByCpf(favoredData.userData.cpf)

    if (!userData) {
      userData = await this.usersService.createNewUser({ ...favoredData.userData, accountsId: [accountData._id] })
    } else {
      await this.usersService.addNewAccountIdOnUser(favoredData.userData.cpf, accountData._id)
    }

    console.log('::::::::::::', accountData, userData)

    console.log({
      accountId: accountData._id,
      status: favoredData.status,
      userId: userData._id,
    })

    return this.favoredRepository.createFavoredRegistry({
      accountId: accountData._id,
      status: favoredData.status,
      userId: userData._id,
    })
  }
}
