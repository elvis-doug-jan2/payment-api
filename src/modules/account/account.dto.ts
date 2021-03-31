import { IsNotEmpty, IsString, IsEmail } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class AccountDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  bankName: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  agencyNumber: string

  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  agencyDigit: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  accountType: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  accountNumber: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  accountDigit: string
}
