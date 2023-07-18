import { useRouter } from 'next/router'

import GenreEdit from '@/components/screens/admin/edit/genre/GenreEdit'

import { NextPageAuth } from '@/shared/types/auth.types'

const GenreEditPage: NextPageAuth = () => {
	return <GenreEdit />
}
GenreEditPage.isOnlyAdmin = true
export default GenreEditPage
