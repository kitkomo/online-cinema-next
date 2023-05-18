import { FC } from 'react'
import { FieldError, UseFormRegister } from 'react-hook-form'

import Field from '../Field'

import cl from './SlugField.module.scss'

interface ISlugField {
	error?: FieldError
	register: UseFormRegister<any>
	generate: () => void
}

const SlugField: FC<ISlugField> = ({ generate, register, error }) => {
	return (
		<div className="relative">
			<Field
				{...register('slug', {
					required: 'Slug is required'
				})}
				placeholder="Slug"
				error={error}
			/>
			<button className={cl.badge} onClick={generate}>
				generate
			</button>
		</div>
	)
}

export default SlugField
