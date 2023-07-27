import { ChangeEvent, useCallback, useMemo } from 'react'
import { useMutation } from 'react-query'

import { FileService } from '@/services/file.service'

import { toastError } from '@/utils/toast-error'

type TypeUpload = (
	onChange: (...event: any[]) => void,
	folder?: string
) => {
	uploadFile: (e: ChangeEvent<HTMLInputElement>) => Promise<void>
	isLoading: boolean
}
export const useUpload: TypeUpload = (onChange, folder) => {
	const { isLoading, mutateAsync } = useMutation(
		(data: FormData) => FileService.upload(data, folder),
		{
			onSuccess({ data }) {
				onChange(data[0].url)
			},
			onError: (error) => {
				toastError(error, 'Error while uploading file')
			},
		}
	)

	const uploadFile = useCallback(
		async (e: ChangeEvent<HTMLInputElement>) => {
			const file = e.target.files
			if (!file?.length) return

			const formData = new FormData()
			formData.append('image', file[0])

			await mutateAsync(formData)
		},
		[mutateAsync]
	)

	return useMemo(
		() => ({
			uploadFile,
			isLoading,
		}),
		[isLoading, uploadFile]
	)
}
