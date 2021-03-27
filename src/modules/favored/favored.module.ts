import { Module } from '@nestjs/common'
import { FavoredController } from './favored.controller'
import { FavoredService } from './favored.service'

@Module({
  imports: [],
  controllers: [FavoredController],
  providers: [FavoredService],
  exports: [FavoredService],
})
export class FavoredModule {}
