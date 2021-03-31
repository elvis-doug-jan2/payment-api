import { Injectable } from '@nestjs/common'
import { IFavored } from 'src/shared/interfaces/favored.interface'
import { FavoredDTO } from './favored.dto'
import { FavoredRepository } from './favored.repository'
import { ClientsService } from '../client/client.service'
import { AccountService } from '../account/account.service'

@Injectable()
export class FavoredService {
  constructor(
    private readonly favoredRepository: FavoredRepository,
    private readonly clientsService: ClientsService,
    private readonly accountService: AccountService,
  ) {}

  async getAllFavoreds(): Promise<IFavored[]> {
    return this.favoredRepository.getAllFavoreds()
  }

  async createFavoredRegistry(favoredData: FavoredDTO): Promise<IFavored> {
    const accountData = await this.accountService.createNewAccount(favoredData.accountData)

    let clientData = await this.clientsService.getClientDataByDocument(favoredData.clientData.document)

    if (!clientData) {
      clientData = await this.clientsService.createNewClient({
        ...favoredData.clientData,
        accountsId: [accountData._id],
      })
    } else {
      await this.clientsService.addNewAccountIdOnUser(favoredData.clientData.document, accountData._id)
    }

    return this.favoredRepository.createFavoredRegistry({
      accountId: accountData._id,
      status: favoredData.status,
      clientId: clientData._id,
    })
  }
}
