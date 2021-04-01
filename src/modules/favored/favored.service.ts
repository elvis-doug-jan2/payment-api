import { Injectable } from '@nestjs/common'
import { IFavored } from 'src/shared/interfaces/favored.interface'
import { FavoredDTO, QueryConsultFavoredDTO, ResponseFavoredDTO } from './favored.dto'
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

  async getAllFavoreds(page: number, perPage: number): Promise<ResponseFavoredDTO> {
    return this.favoredRepository.getAllFavoreds(page, perPage)
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
      accountData: accountData._id,
      status: favoredData.status,
      clientData: clientData._id,
    })
  }
}
