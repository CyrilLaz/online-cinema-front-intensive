import { ChangeEvent, useMemo, useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { useDebounce } from '@/hooks/useDebounce'

import { MovieService } from '@/services/movie.service'

import { getGenreList } from '@/utils/movie/getGenreListEach'
import { toastError } from '@/utils/toast-error'

import { getAdminUrl } from '@/config/url.config'

export const useMovies = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const debouncedSearch = useDebounce(searchTerm, 500)

	const queryData = useQuery(
		['movies list', debouncedSearch],
		() => MovieService.getAll(debouncedSearch),
		{
			select: ({ data }) =>
				data.map((movie) => ({
					_id: movie._id,
					editUrl: getAdminUrl(`movie/edit/${movie._id}`),
					items: [movie.title, getGenreList(movie.genres),movie.rating.toFixed(1).toString()],
				})),
			onError: (error) => {
				toastError(error, 'Error while loading movies')
			},
		}
	)

	const { mutateAsync: deleteMovie } = useMutation(
		'delete movie',
		(id: string) => MovieService.delete(id),
		{
			onError: (error) => {
				toastError(error, 'error while deleting movie')
			},
			onSuccess: () => {
				toastr.success('Delete movie', 'Movie deleted successfully')
				queryData.refetch()
			},
		}
	)

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}
	return useMemo(
		() => ({ ...queryData, handleSearch, searchTerm, deleteMovie }),
		[deleteMovie, queryData, searchTerm]
	)
}
