import { ChangeEvent, useMemo, useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { ITableItem } from '@/components/ui/AdminTable/admin-table.interface'

import { useDebounce } from '@/hooks/useDebounce'

import { ActorService } from '@/services/actor.service'

import { toastError } from '@/utils/toast-error'

import { getAdminUrl } from '@/config/url.config'

export const useActors = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const debouncedSearch = useDebounce(searchTerm, 500)

	const queryData = useQuery(
		['actors list', debouncedSearch],
		() => ActorService.getAll(debouncedSearch),
		{
			select: ({ data }) =>
				data.map<ITableItem>((actor) => ({
					_id: actor._id,
					editUrl: getAdminUrl(`actor/edit/${actor._id}`),
					items: [actor.name, actor.countMovie.toString()],
				})),
			onError: (error) => {
				toastError(error, 'Error while loading users')
			},
		}
	)

	const { mutateAsync: deleteActor } = useMutation(
		'delete actor',
		(id: string) => ActorService.delete(id),
		{
			onError: (error) => {
				toastError(error, 'error while deleting actor')
			},
			onSuccess: () => {
				toastr.success('Delete actor', 'Actor deleted successfully')
				queryData.refetch()
			},
		}
	)

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}
	return useMemo(
		() => ({ ...queryData, handleSearch, searchTerm, deleteActor }),
		[deleteActor, queryData, searchTerm]
	)
}
