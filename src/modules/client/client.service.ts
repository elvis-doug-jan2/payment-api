import { Injectable } from '@nestjs/common'
import { ClientRepository } from './client.repository'
import { ClientDTO } from './client.dto'
import { IClient } from 'src/shared/interfaces/client.interface'

@Injectable()
export class ClientsService {
  constructor(private readonly clientRepository: ClientRepository) {}

  async getAllClients(): Promise<IClient[]> {
    return this.clientRepository.getAll()
  }

  async createNewClient(clientData: ClientDTO): Promise<IClient> {
    return this.clientRepository.createClient(clientData)
  }

  async getClientsIdByQuery(query: object): Promise<{ _id: string }[]> {
    return this.clientRepository.getClientsIdByQuery(query)
  }

  async getClientDataByDocument(document: string): Promise<IClient> {
    return this.clientRepository.getClientDataByDocument(document)
  }

  async addNewAccountIdOnUser(document: string, accountId: string): Promise<IClient> {
    return this.clientRepository.updateClientByDocument(document, { $push: { accountsId: accountId } })
  }
}
