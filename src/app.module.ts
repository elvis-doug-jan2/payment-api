import { Module } from '@nestjs/common'
import { FavoredModule } from './modules/favored/favored.module'

@Module({
  imports: [FavoredModule],
})
export class AppModule {}
