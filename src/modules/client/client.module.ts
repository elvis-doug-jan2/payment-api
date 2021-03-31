import { Module } from '@nestjs/common'
import { UsersController } from './client.controller'
import { ClientsService } from './client.service'
import { DatabaseModule } from 'src/config/database/database.module'
import { ClientRepository } from './client.repository'

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [ClientsService, ClientRepository],
  exports: [ClientsService],
})
export class UsersModule {}
