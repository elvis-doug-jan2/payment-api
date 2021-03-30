import { IsNotEmpty, IsString, IsOptional, IsEmail, IsArray } from 'class-validator'
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger'

export class UsersDTO {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string

  // @ApiProperty()
  // @IsNotEmpty()
  // @IsString()
  // surName: string

  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  email: string

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  cpf: string

  @ApiProperty()
  @IsOptional()
  @IsArray()
  accountsId: string[]
}
