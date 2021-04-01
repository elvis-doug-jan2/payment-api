import { Body, Controller, Get, Post, Query } from '@nestjs/common'
import { ParseIntPipe } from 'src/pipe/parseIntParams.pipe'
import { CheckSpecialCharsDocumentPipe } from 'src/pipe/removeSpecialCpfCaracters.pipe'
import { IFavored } from 'src/shared/interfaces/favored.interface'
import { FavoredDTO, QueryConsultFavoredDTO, ResponseFavoredDTO } from './favored.dto'
import { FavoredService } from './favored.service'

@Controller('favoreds')
export class FavoredController {
  constructor(private readonly favoredService: FavoredService) {}

  @Get()
  async getAllFavoreds(
    @Query('page', new ParseIntPipe()) page: number,
    @Query('per_page', new ParseIntPipe()) perPage: number,
  ): Promise<ResponseFavoredDTO> {
    return this.favoredService.getAllFavoreds(page, perPage)
  }

  @Post()
  async createNewFavoredRegistry(@Body(CheckSpecialCharsDocumentPipe) favoredData: FavoredDTO): Promise<IFavored> {
    return this.favoredService.createFavoredRegistry(favoredData)
  }
}
