import dynamic from 'next/dynamic'
import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { stripHtml } from 'string-strip-html'

import AdminNavigation from '@/components/UI/AdminNavigation/AdminNavigation'
import SkeletonLoader from '@/components/UI/SkeletonLoader'
import Button from '@/components/UI/formElements/Button'
import Field from '@/components/UI/formElements/Field'
import SlugField from '@/components/UI/formElements/SlugField/SlugField'
import UploadField from '@/components/UI/formElements/UploadField/UploadField'
import formStyles from '@/components/UI/formElements/admin-form.module.scss'

import Meta from '@/utils/meta/Meta'
import generateSlug from '@/utils/string/generateSlug'

import Heading from '../../../UI/heading/Heading'

import { IMovieEditInput } from './movie-edit.interface'
import { useAdminActor } from './useAdminActor'
import { useAdminGenre } from './useAdminGenre'
import { useMovieEdit } from './useMovieEdit'

const DynamicSelect = dynamic(() => import('@/components/UI/Select/Select'), {
	ssr: false
})

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
	const { isLoading: isGenresLoading, data: genres } = useAdminGenre()
	const { isLoading: isActorsLoading, data: actors } = useAdminActor()



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
								{...register('title', {
									required: 'Title is required'
								})}
								placeholder="Title"
								error={errors.title}
							/>

							<div>
								<SlugField
									register={register}
									error={errors.slug}
									generate={() => {
										setValue('slug', generateSlug(getValues('title')))
									}}
								/>
							</div>

							<Field
								{...register('parameters.country', {
									required: 'Country is required'
								})}
								placeholder="Country"
								error={errors.parameters?.country}
								style={{ width: '31%' }}
							/>
							<Field
								{...register('parameters.duration', {
									required: 'Duration is required'
								})}
								placeholder="Duration (min.)"
								error={errors.parameters?.duration}
								style={{ width: '31%' }}
							/>
							<Field
								{...register('parameters.year', {
									required: 'Year is required'
								})}
								placeholder="Year"
								error={errors.parameters?.year}
								style={{ width: '31%' }}
							/>
						</div>
						<Controller
							control={control}
							name="poster"
							defaultValue=""
							render={({
								field: { value, onChange },
								fieldState: { error }
							}) => (
								<UploadField
									onChange={onChange}
									value={value}
									error={error}
									folder="movies"
									placeholder="Poster"
								/>
							)}
							rules={{
								validate: {
									required: (v) =>
										(v && stripHtml(v).result.length > 0) ||
										'Poster is required'
								}
							}}
						/>

						<Controller
							control={control}
							name="genres"
							render={({ field, fieldState: { error } }) => (
								<DynamicSelect
									field={field}
									options={genres || []}
									isLoading={isGenresLoading}
									isMulti
									placeholder="Genres"
									error={error}
								/>
							)}
							rules={{
								required: 'Please select at least one genre'
							}}
						/>

						<Controller
							control={control}
							name="actors"
							render={({ field, fieldState: { error } }) => (
								<DynamicSelect
									field={field}
									options={actors || []}
									isLoading={isActorsLoading}
									isMulti
									placeholder="Actors"
									error={error}
								/>
							)}
							rules={{
								required: 'Please select at least one genre'
							}}
						/>

						<Controller
							control={control}
							name="bigPoster"
							defaultValue=""
							render={({
								field: { value, onChange },
								fieldState: { error }
							}) => (
								<UploadField
									onChange={onChange}
									value={value}
									error={error}
									folder="movies"
									placeholder="Big poster"
								/>
							)}
							rules={{
								validate: {
									required: (v) =>
										(v && stripHtml(v).result.length > 0) ||
										'Big poster is required'
								}
							}}
						/>
						<Controller
							control={control}
							name="videoUrl"
							defaultValue=""
							render={({
								field: { value, onChange },
								fieldState: { error }
							}) => (
								<UploadField
									onChange={onChange}
									value={value}
									error={error}
									folder="movies"
									placeholder="Video"
									style={{ marginTop: -25 }}
									isNoImage
								/>
							)}
							rules={{
								validate: {
									required: (v) =>
										(v && stripHtml(v).result.length > 0) || 'Video is required'
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
