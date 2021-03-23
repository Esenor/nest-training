import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';

@Injectable()
export class ParseIntPipe implements PipeTransform {
  transform(value: string, metadata: ArgumentMetadata) {
    const val = parseInt(value);
    if (isNaN(val)) {
      throw new BadRequestException(`Validation fail, ${val} is not a number`);
    }
    return val;
  }
}
