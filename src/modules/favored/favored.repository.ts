import { Inject } from '@nestjs/common'
import { Model } from 'mongoose'
import { IFavored, IFavoredData } from 'src/shared/interfaces/favored.interface'
import { FavoredDTO, ResponseFavoredDTO } from './favored.dto'

export class FavoredRepository {
  constructor(
    @Inject('FAVORED')
    private readonly favoredModel: Model<IFavored>,
  ) {}

  async getAllFavoreds(page: number, perPage: number): Promise<ResponseFavoredDTO> {
    const totalFavoredsDocs = await this.favoredModel.countDocuments()

    return this.favoredModel
      .find()
      .populate('clientId')
      .populate('accountId')
      .skip((page - 1) * perPage)
      .limit(perPage)
      .lean()
      .then((docs) => ({
        favoreds: docs,
        page,
        perPage,
        totalItens: totalFavoredsDocs,
        totalPages: totalFavoredsDocs / perPage,
      }))
  }

  async createFavoredRegistry(favoredData: IFavoredData): Promise<IFavored> {
    return this.favoredModel.create(favoredData)
  }
}
