import { Module } from '@nestjs/common'
import { DatabaseModule } from './config/database/database.module'
import { PopulateDBModule } from './config/populateDB/populateDB.module'
import { FavoredModule } from './modules/favored/favored.module'
import { PopulateService } from './config/populateDB/populateDB.service'
import { UsersModule } from './modules/users/users.module'
import { AccountsModule } from './modules/account/account.module'

@Module({
  imports: [DatabaseModule, PopulateDBModule, FavoredModule, UsersModule, AccountsModule],
})
export class AppModule {
  constructor(private readonly pDBService: PopulateService) {
    this.populateDbOnRunProject()
  }

  private async populateDbOnRunProject(): Promise<void> {
    await this.pDBService.checkDB()
  }
}
