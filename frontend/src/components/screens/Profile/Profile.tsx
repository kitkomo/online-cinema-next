import { FC } from 'react'
import { useForm } from 'react-hook-form'
import { IProfileInput } from './profile.interface'
import { useProfile } from './useProfile'
import Meta from '@/utils/meta/Meta'
import Heading from '@/components/UI/heading/Heading'
import cl from './profile.module.scss'
import SkeletonLoader from '@/components/UI/SkeletonLoader'
import AuthFields from '../Auth/AuthFields'
import Button from '@/components/UI/formElements/Button'

const Profile: FC = () => {

	const {handleSubmit, register, formState, setValue} = useForm<IProfileInput>({
		mode: 'onChange'
	})

	const {isLoading, onSubmit} = useProfile(setValue)

	return (
		<Meta title="Profile">
			<Heading title="Profile" />
			<form onSubmit={handleSubmit(onSubmit)} className={cl.form}>
				{isLoading ? (
					<SkeletonLoader count={2} />
				) : (
					<AuthFields
						register={register}
						formState={formState}
						isPasswordRequired={false}
					/>
				)}

				<Button>Update</Button>
			</form>
		</Meta>
	)
}

export default Profile