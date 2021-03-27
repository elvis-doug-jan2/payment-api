import { Controller, Get } from '@nestjs/common'
import { FavoredService } from './favored.service'

@Controller('favored')
export class FavoredController {
  constructor(private readonly favoredService: FavoredService) {}

  @Get()
  getHello(): string {
    return this.favoredService.getHello()
  }
}
