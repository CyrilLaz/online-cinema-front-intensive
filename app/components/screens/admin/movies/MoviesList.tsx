import { FC } from 'react'

import AdminHeader from '@/components/ui/AdminHeader/AdminHeader'
import AdminTable from '@/components/ui/AdminTable/AdminTable'

import AdminNavigation from '@/ui/AdminNavigation/AdminNavigation'
import Heading from '@/ui/heading/Heading'

import Meta from '@/utils/meta/Meta'

import { useMovies } from './useMovies'

const UsersList: FC = () => {
	const { handleSearch, searchTerm, isLoading, data, deleteMovie } = useMovies()
	return (
		<Meta title="Movies">
			<AdminNavigation />
			<Heading title="Movies" />
			<AdminHeader handleSearch={handleSearch} searchTerm={searchTerm} />
			<AdminTable
				tableItems={data || []}
				isLoading={isLoading}
				removeHandler={deleteMovie}
				headerItems={['Title', 'Genres', 'Rating']}
			/>
		</Meta>
	)
}
export default UsersList
