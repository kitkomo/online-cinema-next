import { Injectable } from '@nestjs/common'
import { GenreModel } from './genre.model'
import { InjectModel } from 'nestjs-typegoose'
import { ModelType } from '@typegoose/typegoose/lib/types'
import { CreateGenreDto } from './dto/create-genre.dto'

@Injectable()
export class GenreService {
	constructor(
		@InjectModel(GenreModel)
		private readonly genreModel: ModelType<GenreModel>
	) {}

	async getAll(searchTerm?: string) {
		let options = {}

		if (searchTerm) {
			options = {
				$or: [
					{
						name: new RegExp(searchTerm, 'i')
					},
					{
						slug: new RegExp(searchTerm, 'i')
					},
					{
						description: new RegExp(searchTerm, 'i')
					}
				]
			}
		}

		return this.genreModel
			.find(options)
			.select('-updatedAt -__v')
			.sort({ createdAt: 'desc' })
			.exec()
	}

	async bySlug(slug: string) {
		return this.genreModel.findOne({ slug }).exec()
	}

	async getPopular() {
		return this.genreModel
			.find()
			.select('-updatedAt -__v')
			.sort({ createdAt: 'desc' })
			.exec()
	}

	async getCollections() {
		const genres = await this.getAll()

		const collections = genres

		return collections
	}

	/* Admin area */

	async byId(id: string) {
		return this.genreModel.findById(id).exec()
	}

	async create() {
		const defaultValue: CreateGenreDto = {
			description: '',
			icon: '',
			name: '',
			slug: ''
		}
		const genre = await this.genreModel.create(defaultValue)
		return genre._id
	}

	async update(id: string, dto: CreateGenreDto) {
		return this.genreModel
			.findByIdAndUpdate(id, dto, { new: true })
			.exec()
	}

	async delete(id: string) {
		return this.genreModel.findByIdAndDelete(id).exec()
	}
}
