import {
	Body,
	Controller,
	Delete,
	Get,
	HttpCode,
	NotFoundException,
	Param,
	Post,
	Put,
	Query,
	UsePipes,
	ValidationPipe
} from '@nestjs/common'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { CreateGenreDto } from './dto/create-genre.dto'
import { idValidationPipe } from 'src/pipes/idValidationPipe'
import { GenreService } from './genre.service'

@Controller('genre')
export class GenreController {
	constructor(private readonly genreService: GenreService) {}

	@Get('by-slug/:slug')
	async bySlug(@Param('slug') slug: string) {
		return this.genreService.bySlug(slug)
	}

	@Get()
	async getAll(@Query('searchTerm') searchTerm?: string) {
		return this.genreService.getAll(searchTerm)
	}

	@Get('/popular')
	async getPopular() {
		return this.genreService.getPopular()
	}

	@Get('/collections')
	async getCollections() {
		return this.genreService.getCollections()
	}

	@Get(':id')
	@Auth('admin')
	async get(@Param('id', idValidationPipe) id: string) {
		return this.genreService.byId(id)
	}

	@UsePipes(new ValidationPipe())
	@Post()
	@HttpCode(200)
	@Auth('admin')
	async create() {
		return this.genreService.create()
	}

	@UsePipes(new ValidationPipe())
	@Put(':id')
	@HttpCode(200)
	@Auth('admin')
	async update(
		@Param('id', idValidationPipe) id: string,
		@Body() dto: CreateGenreDto
	) {
		const updateGenre = await this.genreService.update(id, dto)
		if (!updateGenre) throw new NotFoundException('Genre not found')
		return updateGenre
	}

	@Delete(':id')
	@Auth('admin')
	async delete(@Param('id', idValidationPipe) id: string) {
		const deletedDoc = await this.genreService.delete(id)
		if (!deletedDoc) throw new NotFoundException('Genre not found')
	}
}
