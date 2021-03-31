import { IsNotEmpty, IsString, IsOptional, IsEmail, IsArray } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'

export class ClientDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string

  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  email: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  document: string

  @ApiProperty()
  @IsOptional()
  @IsArray()
  accountsId?: string[]
}
