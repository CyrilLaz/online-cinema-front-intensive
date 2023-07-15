import { ChangeEvent, useMemo, useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { ITableItem } from '@/components/ui/AdminTable/admin-table.interface'

import { useDebounce } from '@/hooks/useDebounce'

import { UserService } from '@/services/user.service'

import { convertMongoDate } from '@/utils/date/convertMongoDate'
import { toastError } from '@/utils/toast-error'

import { getAdminUrl } from '@/config/url.config'

export const useUsers = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const debouncedSearch = useDebounce(searchTerm, 500)

	const queryData = useQuery(
		['users list', debouncedSearch],
		() => UserService.getAll(debouncedSearch),
		{
			select: ({ data }) =>
				data.map<ITableItem>((user) => ({
					_id: user._id,
					editUrl: getAdminUrl(`user/edit/${user._id}`),
					items: [user.email, convertMongoDate(user.createdAt)],
				})),
			onError: (error) => {
				toastError(error, 'Error while loading users')
			},
		}
	)

	const { mutateAsync: deleteUser } = useMutation(
		'delete user',
		(id: string) => UserService.deleteUser(id),
		{
			onError: (error) => {
				toastError(error, 'error while deleting user')
			},
			onSuccess: () => {
				toastr.success('Delete user', 'User deleted successfully')
				queryData.refetch()
			},
		}
	)

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}
	return useMemo(
		() => ({ ...queryData, handleSearch, searchTerm, deleteUser }),
		[deleteUser, queryData, searchTerm]
	)
}
