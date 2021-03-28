import { Injectable } from '@nestjs/common'

@Injectable()
export class FavoredService {
  getHello(): string {
    return 'Hello World!'
  }
}
