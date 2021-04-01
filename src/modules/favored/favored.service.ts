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

  async getAllFavoreds(
    page: number,
    perPage: number,
    queryObject: QueryConsultFavoredDTO,
  ): Promise<ResponseFavoredDTO> {
    const query = JSON.parse(JSON.stringify(queryObject))

    const userQuery = {}
    const accountQuery = {}

    const isUserQuery = (field: string, value: string): void => {
      userQuery[field] = value
    }

    const isAccountQuery = (field: string, value: string): void => {
      accountQuery[field] = value
    }

    const checkWhatQueryIs = {
      document: isUserQuery,
      agencyNumber: isAccountQuery,
      accountType: isAccountQuery,
      name: isUserQuery,
    }

    Object.getOwnPropertyNames(query).forEach((propertie) => {
      checkWhatQueryIs[propertie](propertie, query[propertie])
    })

    const accountsId = await this.accountService
      .getAccountsIdByQuery(accountQuery)
      .then((list) => list.map((item) => ({ accountData: `ObjectId(${item._id})` })))
    const clientsId = await this.clientsService
      .getClientsIdByQuery(userQuery)
      .then((list) => list.map((item) => ({ clientData: `ObjectId(${item._id})` })))

    console.log(JSON.stringify(accountsId), JSON.stringify(clientsId))

    return this.favoredRepository.getAllFavoreds(page, perPage, query)
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
