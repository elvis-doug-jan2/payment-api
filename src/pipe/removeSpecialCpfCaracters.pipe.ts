import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common'
import { FavoredDTO } from 'src/modules/favored/favored.dto'

@Injectable()
export class CheckSpecialCharsDocumentPipe implements PipeTransform<FavoredDTO> {
  transform(value: FavoredDTO): FavoredDTO {
    const hasSpecialCaracters = new RegExp(/[-.]/g).test(value.clientData.document)
    if (hasSpecialCaracters) {
      throw new BadRequestException('CPF do not be special caracters.')
    }

    return value
  }
}
