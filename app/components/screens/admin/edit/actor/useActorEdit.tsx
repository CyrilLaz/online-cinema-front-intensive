import { useRouter } from 'next/router'
import { SubmitHandler, UseFormSetValue } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query'
import { toastr } from 'react-redux-toastr'

import { ActorService } from '@/services/actor.service'

import { getKeys } from '@/utils/object/getKeys'
import { toastError } from '@/utils/toast-error'

import { getAdminUrl } from '@/config/url.config'

import { IActorEdit } from './actor-edit.interface'

export const useActorEdit = (setValue: UseFormSetValue<IActorEdit>) => {
	const { push, query } = useRouter()
	const actorId = String(query.id)

	const { isLoading } = useQuery(
		['actor', actorId],
		() => ActorService.getById(actorId),
		{
			onSuccess: ({ data }) => {
				getKeys(data).forEach((key) => {
					setValue(key, data[key])
				})
			},
			onError: (error) => {
				toastError(error, 'Get actor')
			},
			enabled: !!query.id,
		}
	)

	const { mutateAsync } = useMutation(
		['update actor', actorId],
		(data: IActorEdit) => ActorService.update(actorId, data),
		{
			onSuccess() {
				toastr.success('Success', 'Actor updated successfully')
				push(getAdminUrl('actors'))
			},
			onError(error) {
				toastError(error, 'Error updating')
			},
		}
	)

	const onSubmit: SubmitHandler<IActorEdit> = async (data) => {
		await mutateAsync(data)
	}
	return { onSubmit, isLoading }
}
