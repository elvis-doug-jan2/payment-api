import { Module } from '@nestjs/common'
import { FavoredController } from './favored.controller'
import { FavoredService } from './favored.service'
import { DatabaseModule } from 'src/config/database/database.module'
import { FavoredRepository } from './favored.repository'

@Module({
  imports: [DatabaseModule],
  controllers: [FavoredController],
  providers: [FavoredService, FavoredRepository],
  exports: [FavoredService],
})
export class FavoredModule {}
