import { instance as axios } from 'api/interceptors'

export const FileService = {
	upload(file: FormData, folder?: string) {
		return axios.post<{ url: string; name: string }[]>('/files', file, {
			params: { folder },
			headers: { 'Content-Type': 'application/form-data' },
		})
	},
}
