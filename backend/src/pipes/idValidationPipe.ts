import {
	PipeTransform,
	BadRequestException,
	ArgumentMetadata
} from '@nestjs/common'
import { Types } from 'mongoose'

export class idValidationPipe implements PipeTransform {
	transform(val: string, meta: ArgumentMetadata) {
		if (meta.type !== 'param') return val
		if (!Types.ObjectId.isValid(val))
			throw new BadRequestException('Invalid format id')
		return val
	}
}
