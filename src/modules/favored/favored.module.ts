import { Module } from '@nestjs/common'
import { FavoredController } from './favored.controller'
import { FavoredService } from './favored.service'
import { DatabaseModule } from 'src/config/database/database.module'

@Module({
  imports: [DatabaseModule],
  controllers: [FavoredController],
  providers: [FavoredService],
  exports: [FavoredService],
})
export class FavoredModule {}
