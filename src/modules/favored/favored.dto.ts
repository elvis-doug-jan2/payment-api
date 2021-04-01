import { IsNotEmpty, IsString } from 'class-validator'
import { ClientDTO } from '../client/client.dto'
import { AccountDTO } from '../account/account.dto'
import { ApiProperty } from '@nestjs/swagger'

export class FavoredDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  status: string

  @ApiProperty()
  clientData: ClientDTO

  @ApiProperty()
  accountData: AccountDTO
}

export class ResponseFavoredDTO {
  favoreds: FavoredDTO[]
  page: number
  perPage: number
  totalItens: number
  totalPages: number
}

export class QueryConsultFavoredDTO {
  document: string
  agencyNumber: string
  accountType: string
  name: string
}
