import { useQuery } from 'react-query'

import { IOption } from '@/components/ui/select/select.interface'

import { ActorService } from '@/services/actor.service'

import { toastError } from '@/utils/toast-error'

export const useAdminActors = () => {
	const queryData = useQuery({
		queryKey: 'List of Actors',
		queryFn: () => ActorService.getAll(),
		select: ({ data }) =>
			data.map((actor): IOption => ({ label: actor.name, value: actor._id })),
		onError(error) {
			toastError(error, 'List of Actors ')
		},
	})
	return queryData
}
