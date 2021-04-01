import { Module } from '@nestjs/common'
import { DatabaseModule } from 'src/config/database/database.module'
import { PopulateDBProvider } from './populateDB.provider'
import { PopulateService } from './populateDB.service'
import { PopulateDBRepository } from './populateDB.repository'
import { FavoredModule } from 'src/modules/favored/favored.module'

@Module({
  imports: [DatabaseModule, FavoredModule],
  providers: [PopulateService, ...PopulateDBProvider, PopulateDBRepository],
  exports: [PopulateService],
})
export class PopulateDBModule {}
