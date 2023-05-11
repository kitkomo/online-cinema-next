import { Injectable } from '@nestjs/common'
import { InjectModel } from 'nestjs-typegoose'
import { ActorModel } from './actor.model'
import { ModelType } from '@typegoose/typegoose/lib/types'
import { ActorDto } from './actor.dto'

@Injectable()
export class ActorService {
	constructor(
		@InjectModel(ActorModel)
		private readonly ActorModel: ModelType<ActorModel>
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
					}
				]
			}
		}

		return this.ActorModel
			.find(options)
			.select('-updatedAt -__v')
			.sort({ createdAt: 'desc' })
			.exec()
	}

	async bySlug(slug: string) {
		return this.ActorModel.findOne({ slug }).exec()
	}

	async getPopular() {
		return this.ActorModel
			.find()
			.select('-updatedAt -__v')
			.sort({ createdAt: 'desc' })
			.exec()
	}

	/* Admin area */

	async byId(id: string) {
		return this.ActorModel.findById(id).exec()
	}

	async create() {
		const defaultValue: ActorDto = {
			name: '',
			slug: '',
			photo: ''
		}
		const actor = await this.ActorModel.create(defaultValue)
		return actor._id
	}

	async update(id: string, dto: ActorDto) {
		return this.ActorModel
			.findByIdAndUpdate(id, dto, { new: true })
			.exec()
	}

	async delete(id: string) {
		return this.ActorModel.findByIdAndDelete(id).exec()
	}
}
