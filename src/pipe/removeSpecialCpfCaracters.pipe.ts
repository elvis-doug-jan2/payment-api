import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common'
import { FavoredDTO } from 'src/modules/favored/favored.dto'

@Injectable()
export class CheckSpecialCharsCPFPipe implements PipeTransform<FavoredDTO> {
  transform(value: FavoredDTO): FavoredDTO {
    const hasSpecialCaracters = new RegExp(/[-.]/g).test(value.userData.cpf)
    if (hasSpecialCaracters) {
      throw new BadRequestException('CPF do not be special caracters.')
    }

    return value
  }
}
