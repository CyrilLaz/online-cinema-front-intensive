import { FC } from 'react'

import AdminHeader from '@/components/ui/AdminHeader/AdminHeader'
import AdminTable from '@/components/ui/AdminTable/AdminTable'

import AdminNavigation from '@/ui/AdminNavigation/AdminNavigation'
import Heading from '@/ui/heading/Heading'

import Meta from '@/utils/meta/Meta'

import { useGenres } from './useGenres'

const UsersList: FC = () => {
	const {
		handleSearch,
		searchTerm,
		isLoading,
		data,
		deleteGenre,
		createAsync,
	} = useGenres()
	return (
		<Meta title="Genres">
			<AdminNavigation />
			<Heading title="Genres" />
			<AdminHeader
				handleSearch={handleSearch}
				searchTerm={searchTerm}
				onClick={createAsync}
			/>
			<AdminTable
				tableItems={data || []}
				isLoading={isLoading}
				removeHandler={deleteGenre}
				headerItems={['Name', 'Slug']}
			/>
		</Meta>
	)
}
export default UsersList
