import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common'

@Injectable()
export class ParseIntPipe implements PipeTransform<string, number> {
  transform(value: string, metadata: ArgumentMetadata): number {
    const intValue = parseInt(value)

    if (isNaN(intValue)) {
      throw new BadRequestException(`Query '${metadata.data}' is required!`)
    }

    if (!intValue) {
      throw new BadRequestException(`Query '${metadata.data}' do not should be zero value!`)
    }

    return parseInt(value)
  }
}
