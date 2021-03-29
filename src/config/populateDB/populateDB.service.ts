import { Injectable } from '@nestjs/common'
import { PopulateDBRepository } from './populateDB.repository'
import * as colors from 'colors'

@Injectable()
export class PopulateService {
  constructor(private readonly populateDBRepository: PopulateDBRepository) {
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

  private async populateDabase(): Promise<boolean> {
    console.log('-------------------------------------------------------------'.yellow)
    console.log('--->    POPULANDO BANCO DE DADOS COM VALORES INICIAIS    <---'.cyan)
    console.log('-------------------------------------------------------------'.yellow)

    return new Promise((resolve, reject) => resolve(true))
  }
}
