import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'

import { UserService } from '@/services/user.service'

import { IProfileInput } from './profile.interface'
import { toastError } from '@/utils/toast-error'
import { toastr } from 'react-redux-toastr'

export const useProfile = (setValue: UseFormSetValue<IProfileInput>) => {

	const { isLoading } = useQuery('profile', () => UserService.getProfile(), {
		onSuccess: ({ data: { email } }) => {
			setValue('email', email)
		},
		onError: (error) => {
			toastError(error, 'Get profile failed')
		},
	})

	const { mutateAsync } = useMutation(
		'update profile',
		(data:IProfileInput) => UserService.updateProfile(data),
		{
			onSuccess() {
				toastr.success('Success', 'Profile updated successfully')
			},
			onError(error) {
				toastError(error, 'Error updating')
			},
		}
	)

	const onSubmit: SubmitHandler<IProfileInput> = async (data) => {
		await mutateAsync(data)
	}
	return { onSubmit, isLoading }
}
