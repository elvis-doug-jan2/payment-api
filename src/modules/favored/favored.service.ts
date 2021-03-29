import { Injectable } from '@nestjs/common'
import { IFavored } from 'src/shared/interfaces/favored.interface'
import { FavoredDTO } from './favored.dto'
import { FavoredRepository } from './favored.repository'

@Injectable()
export class FavoredService {
  constructor(private readonly favoredRepository: FavoredRepository) {}

  async getAllFavoreds(): Promise<IFavored[]> {
    return this.favoredRepository.getAllFavoreds()
  }

  async createFavoredRegistry(favoredData: FavoredDTO): Promise<IFavored> {
    return this.favoredRepository.createFavoredRegistry(favoredData)
  }
}
