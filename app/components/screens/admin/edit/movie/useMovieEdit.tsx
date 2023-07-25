import { useRouter } from 'next/router'
import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { MovieService } from '@/services/movie.service'

import { getKeys } from '@/utils/object/getKeys'
import { toastError } from '@/utils/toast-error'

import { getAdminUrl } from '@/config/url.config'

import { IMovieEdit } from './movie-edit.interface'

export const useMovieEdit = (setValue: UseFormSetValue<IMovieEdit>) => {
	const { push, query } = useRouter()
	const movieId = String(query.id)

	const { isLoading } = useQuery(
		['movie', movieId],
		() => MovieService.getById(movieId),
		{
			onSuccess: ({ data }) => {
				getKeys(data).forEach((key) => {
					setValue(key, data[key])
				})
			},
			onError: (error) => {
				toastError(error, 'Get movie')
			},
			enabled: !!query.id,
		}
	)

	const { mutateAsync } = useMutation(
		['update movie', movieId],
		(data: IMovieEdit) => MovieService.update(movieId, data),
		{
			onSuccess() {
				toastr.success('Success', 'Movie updated successfully')
				push(getAdminUrl('movies'))
			},
			onError(error) {
				toastError(error, 'Error updating')
			},
		}
	)

	const onSubmit: SubmitHandler<IMovieEdit> = async (data) => {
		await mutateAsync(data)
	}
	return { onSubmit, isLoading }
}
