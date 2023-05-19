import dynamic from 'next/dynamic'
import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { stripHtml } from 'string-strip-html'

import AdminNavigation from '@/components/UI/AdminNavigation/AdminNavigation'
import SkeletonLoader from '@/components/UI/SkeletonLoader'
import Button from '@/components/UI/formElements/Button'
import Field from '@/components/UI/formElements/Field'
import SlugField from '@/components/UI/formElements/SlugField/SlugField'
import formStyles from '@/components/UI/formElements/admin-form.module.scss'

import Meta from '@/utils/meta/Meta'
import generateSlug from '@/utils/string/generateSlug'

import Heading from '../../../UI/heading/Heading'
import { IMovieEditInput } from './movie-edit.interface'
import { useMovieEdit } from './useMovieEdit'

const DynamicTextEditor = dynamic(
	() => import('@/components/UI/formElements/TextEditor'),
	{
		ssr: false
	}
)

const MovieEdit: FC = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
		setValue,
		getValues,
		control
	} = useForm<IMovieEditInput>({
		mode: 'onChange'
	})

	const { isLoading, onSubmit } = useMovieEdit(setValue)

	return (
		<Meta title="Edit movie">
			<AdminNavigation />
			<Heading title="Edit movie" />
			<form onSubmit={handleSubmit(onSubmit)} className={formStyles.form}>
				{isLoading ? (
					<SkeletonLoader count={3} />
				) : (
					<>
						<div className={formStyles.fields}>
							<Field
								{...register('name', {
									required: 'Name is required'
								})}
								placeholder="Name"
								error={errors.name}
								style={{ width: '31%' }}
							/>

							<div style={{ width: '31%' }}>
								<SlugField
									register={register}
									error={errors.slug}
									generate={() => {
										setValue('slug', generateSlug(getValues('name')))
									}}
								/>
							</div>

							<Field
								{...register('icon', {
									required: 'Icon is required'
								})}
								placeholder="Icon"
								error={errors.icon}
								style={{ width: '31%' }}
							/>
						</div>
						<Controller
							control={control}
							name="description"
							defaultValue=""
							render={({
								field: { value, onChange },
								fieldState: { error }
							}) => (
								<DynamicTextEditor
									onChange={onChange}
									value={value}
									error={error}
									placeholder="description"
								/>
							)}
							rules={{
								validate: {
									required: (v) =>
										(v && stripHtml(v).result.length > 0) ||
										'Description is required'
								}
							}}
						/>
						<Button>Update</Button>
					</>
				)}
			</form>
		</Meta>
	)
}

export default MovieEdit
