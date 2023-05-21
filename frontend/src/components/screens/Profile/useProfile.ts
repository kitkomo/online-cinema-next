import { SubmitHandler, UseFormSetValue } from "react-hook-form"
import { IProfileInput } from "./profile.interface"
import { useMutation, useQuery } from "react-query"
import { UserService } from "@/services/user.service"
import { toastrError } from "@/utils/toastr.error"
import { toastr } from "react-redux-toastr"

export const useProfile = (setValue: UseFormSetValue<IProfileInput>) => {
	
	const { isLoading } = useQuery(
		'user-profile',
		() => UserService.getProfile(),
		{
			onSuccess({ data }) {
				setValue('email', data.email)
			},
			onError(error) {
				toastrError(error, 'Get profile')
			},
		}
	)

	const { mutateAsync } = useMutation(
		'update-profile',
		(data: IProfileInput) => UserService.updateProfile(data),
		{
			onSuccess() {
				toastr.success('Update profile', 'update was succesful')
			},
			onError(error) {
				toastrError(error, 'Update profile')
			}
		}
	)

	const onSubmit: SubmitHandler<IProfileInput> = async (data) => {
		await mutateAsync(data)
	}

	return {onSubmit, isLoading}
}