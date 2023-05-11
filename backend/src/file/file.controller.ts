import {
	Controller,
	HttpCode,
	Post,
	UseInterceptors,
	UploadedFile,
	Query
} from '@nestjs/common'
import { FileService } from './file.service'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { FileInterceptor } from '@nestjs/platform-express'

@Controller('files')
export class FileController {
	constructor(private readonly filesService: FileService) {}

	@HttpCode(200)
	@Auth()
	@Post('login')
	@UseInterceptors(FileInterceptor('image'))
	async uploadFile(
		@UploadedFile() file: Express.Multer.File,
		@Query('folder') folder?: string
	) {
		return this.filesService.saveFiles([file], folder)
	}
}
