import { Inject } from '@nestjs/common'
import { Model } from 'mongoose'
import { IClient } from 'src/shared/interfaces/client.interface'
import { ClientDTO } from './client.dto'

export class ClientRepository {
  constructor(
    @Inject('CLIENT')
    private readonly clientModel: Model<IClient>,
  ) {}

  async getAll(): Promise<IClient[]> {
    return this.clientModel.find().sort({ createdAt: -1 }).lean()
  }

  async createClient(clientData: ClientDTO): Promise<IClient> {
    return this.clientModel.create(clientData)
  }

  async getClientDataByDocument(document: string): Promise<IClient> {
    return this.clientModel.findOne({ document }).lean()
  }

  async updateClientByDocument(document: string, newData: object): Promise<IClient> {
    return this.clientModel.findOneAndUpdate({ document }, newData, { new: true }).lean()
  }
}
