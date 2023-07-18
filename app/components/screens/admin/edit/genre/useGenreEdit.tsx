import { useRouter } from 'next/router'
import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { GenreService } from '@/services/genre.service'

import { getKeys } from '@/utils/object/getKeys'
import { toastError } from '@/utils/toast-error'

import { getAdminUrl } from '@/config/url.config'

import { IGenreEdit } from './genre-edit.interface'

export const useGenreEdit = (setValue: UseFormSetValue<IGenreEdit>) => {
	const { push, query } = useRouter()
	const genreId = String(query._id)

	const { isLoading } = useQuery(
		['genre', genreId],
		() => GenreService.getById(genreId),
		{
			onSuccess: ({ data }) => {
				getKeys(data).forEach((key) => {
					setValue(key, data[key])
				})
			},
			onError: (error) => {
				toastError(error, 'Get genre')
			},
			enabled: !!query._id,
		}
	)

	const { mutateAsync } = useMutation(
		['update genre', genreId],
		(data: IGenreEdit) => GenreService.update(genreId, data),
		{
			onSuccess() {
				toastr.success('Success', 'Genre updated successfully')
				push(getAdminUrl('/genres'))
			},
			onError(error) {
				toastError(error, 'Error updating')
			},
		}
	)

	const onSubmit: SubmitHandler<IGenreEdit> = async (data) => {
		await mutateAsync(data)
	}
	return { onSubmit, isLoading }
}
