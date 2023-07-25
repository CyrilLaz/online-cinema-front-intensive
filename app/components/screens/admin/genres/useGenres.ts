import { useRouter } from 'next/router'
import { ChangeEvent, useMemo, useState } from 'react'
import {  useMutation, useQuery, useQueryClient } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { ITableItem } from '@/components/ui/AdminTable/admin-table.interface'

import { useDebounce } from '@/hooks/useDebounce'

import { GenreService } from '@/services/genre.service'

import { toastError } from '@/utils/toast-error'

import { getAdminUrl } from '@/config/url.config'

export const useGenres = () => {
	const { push } = useRouter()
	const [searchTerm, setSearchTerm] = useState('')
	const debouncedSearch = useDebounce(searchTerm, 500)
	const queryClient = useQueryClient();

	const queryData = useQuery(
		['genres','genres list', debouncedSearch],
		() => GenreService.getAll(debouncedSearch),
		{
			select: ({ data }) =>
				data.map<ITableItem>((genre) => ({
					_id: genre._id,
					editUrl: getAdminUrl(`genre/edit/${genre._id}`),
					items: [genre.name, genre.slug],
				})),
			onError: (error) => {
				toastError(error, 'Error while loading users')
			},
		}
	)

	const { mutateAsync: createAsync } = useMutation({
		mutationFn: () => GenreService.create(),
		onSuccess({ data: id }) {
			toastr.success('Success', 'Genre create successfully')
			push(getAdminUrl(`genre/edit/${id}`))
		},
		onError(error) {
			toastError(error, 'Error updating')
		},
	})

	const { mutateAsync: deleteGenre } = useMutation(
		(id: string) => GenreService.delete(id),
		{
			onError: (error) => {
				toastError(error, 'error while deleting genre')
			},
			onSuccess: () => {
				toastr.success('Delete genre', 'Genre deleted successfully')
				queryClient.invalidateQueries(['genres'])
			},
		}
	)

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}
	return useMemo(
		() => ({
			...queryData,
			handleSearch,
			createAsync,
			searchTerm,
			deleteGenre,
		}),
		[createAsync, deleteGenre, queryData, searchTerm]
	)
}
