import { Module } from '@nestjs/common'
import { FavoredController } from './favored.controller'
import { FavoredService } from './favored.service'
import { FavoredProvider } from './favored.provider'
import { DatabaseModule } from 'src/config/database/database.module'

@Module({
  imports: [DatabaseModule],
  controllers: [FavoredController],
  providers: [FavoredService, ...FavoredProvider],
  exports: [FavoredService],
})
export class FavoredModule {}
