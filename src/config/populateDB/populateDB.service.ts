import { Injectable } from '@nestjs/common'
import { PopulateDBRepository } from './populateDB.repository'
import { favoredMockList } from '../../../insertFavored'
import * as colors from 'colors'
import { FavoredService } from 'src/modules/favored/favored.service'

@Injectable()
export class PopulateService {
  constructor(
    private readonly populateDBRepository: PopulateDBRepository,
    private readonly favoredService: FavoredService,
  ) {
    colors.enable()
  }

  async checkDB(): Promise<void> {
    const databaseIsEmpty = await this.checkIfDBIsEmpty()

    if (databaseIsEmpty) await this.populateDabase()
    else console.log(`----> DATABASE HAVE DATA, DON'T NEED POPULATE. <----`.green)
  }

  private async checkIfDBIsEmpty(): Promise<boolean> {
    const totalUsersDocs = await this.populateDBRepository.checkTotalDocsForUsers()
    const totalAccountsDocs = await this.populateDBRepository.checkTotalDocsForAccounts()
    const totalFavoredDocs = await this.populateDBRepository.checkTotalDocsForFavoreds()

    const totalDocs = [totalUsersDocs, totalAccountsDocs, totalFavoredDocs]

    return totalDocs.every((docs) => docs === 0)
  }

  private async populateDabase(): Promise<void> {
    console.log('-------------------------------------------------------------'.yellow)
    console.log('--->      POPULATING DATABASE WITH INITIAL VALUES...     <---'.cyan)

    for (const favoredMock of favoredMockList) {
      await this.favoredService.createFavoredRegistry(favoredMock)
    }

    console.log('--->                 POPULATED DATABASE!!!               <---'.cyan)
    console.log('-------------------------------------------------------------'.yellow)
  }
}
