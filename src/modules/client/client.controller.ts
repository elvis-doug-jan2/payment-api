import { Body, Controller, Get, Post } from '@nestjs/common'
import { IClient } from 'src/shared/interfaces/client.interface'
import { ClientDTO } from './client.dto'
import { ClientsService } from './client.service'
import { CheckSpecialCharsDocumentPipe } from 'src/pipe/removeSpecialCpfCaracters.pipe'

@Controller('clients')
export class UsersController {
  constructor(private readonly clientsService: ClientsService) {}

  @Get()
  async getAllClients(): Promise<IClient[]> {
    return this.clientsService.getAllClients()
  }

  @Post()
  async createNewClient(@Body(CheckSpecialCharsDocumentPipe) clientData: ClientDTO): Promise<IClient> {
    return this.clientsService.createNewClient(clientData)
  }
}
