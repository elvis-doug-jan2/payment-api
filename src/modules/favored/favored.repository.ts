import { Inject } from '@nestjs/common'
import { Model } from 'mongoose'
import { IFavored, IFavoredData } from 'src/shared/interfaces/favored.interface'
import { FavoredDTO } from './favored.dto'

export class FavoredRepository {
  constructor(
    @Inject('FAVORED')
    private readonly favoredModel: Model<IFavored>,
  ) {}

  async getAllFavoreds(): Promise<IFavored[]> {
    return this.favoredModel.find().populate('clientId').populate('accountId').lean()
  }

  async createFavoredRegistry(favoredData: IFavoredData): Promise<IFavored> {
    return this.favoredModel.create(favoredData)
  }
}
