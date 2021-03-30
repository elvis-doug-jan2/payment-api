import { IsNotEmpty, IsString } from 'class-validator'
import { UsersDTO } from '../users/users.dto'
import { AccountDTO } from '../account/account.dto'
import { ApiProperty } from '@nestjs/swagger'

export class FavoredDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  status: string

  @ApiProperty()
  userData: UsersDTO

  @ApiProperty()
  accountData: AccountDTO
}
