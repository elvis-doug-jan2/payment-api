import { Body, Controller, Get, Post } from '@nestjs/common'
import { CheckSpecialCharsDocumentPipe } from 'src/pipe/removeSpecialCpfCaracters.pipe'
import { IFavored } from 'src/shared/interfaces/favored.interface'
import { FavoredDTO } from './favored.dto'
import { FavoredService } from './favored.service'

@Controller('favoreds')
export class FavoredController {
  constructor(private readonly favoredService: FavoredService) {}

  @Get()
  async getAllFavoreds(): Promise<IFavored[]> {
    return this.favoredService.getAllFavoreds()
  }

  @Post()
  async createNewFavoredRegistry(@Body(CheckSpecialCharsDocumentPipe) favoredData: FavoredDTO): Promise<IFavored> {
    return this.favoredService.createFavoredRegistry(favoredData)
  }
}
