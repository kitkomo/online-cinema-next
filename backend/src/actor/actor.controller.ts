import { Controller, Get, Param, Query, UsePipes, ValidationPipe, HttpCode, Post, Put, Body, Delete, NotFoundException } from '@nestjs/common'
import { ActorService } from './actor.service';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { idValidationPipe } from 'src/pipes/idValidationPipe';
import { ActorDto } from './actor.dto';

@Controller('actors')
export class ActorController {
	constructor(private readonly ActorService: ActorService) {}

	@Get('by-slug/:slug')
	async bySlug(@Param('slug') slug: string) {
		return this.ActorService.bySlug(slug)
	}

	@Get()
	async getAll(@Query('searchTerm') searchTerm?: string) {
		return this.ActorService.getAll(searchTerm)
	}

	@Get('/popular')
	async getPopular() {
		return this.ActorService.getPopular()
	}

	@Get(':id')
	@Auth('admin')
	async get(@Param('id', idValidationPipe) id: string) {
		return this.ActorService.byId(id)
	}

	@UsePipes(new ValidationPipe())
	@Post()
	@HttpCode(200)
	@Auth('admin')
	async create() {
		return this.ActorService.create()
	}

	@UsePipes(new ValidationPipe())
	@Put(':id')
	@HttpCode(200)
	@Auth('admin')
	async update(
		@Param('id', idValidationPipe) id: string,
		@Body() dto: ActorDto
	) {
		const updateGenre = await this.ActorService.update(id, dto)
		if (!updateGenre) throw new NotFoundException('Genre not found')
		return updateGenre
	}

	@Delete(':id')
	@Auth('admin')
	async delete(@Param('id', idValidationPipe) id: string) {
		const deletedDoc = await this.ActorService.delete(id)
		if (!deletedDoc) throw new NotFoundException('Genre not found')
	}
}
