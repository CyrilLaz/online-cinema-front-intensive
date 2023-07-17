import { FC } from 'react'

import AdminHeader from '@/components/ui/AdminHeader/AdminHeader'
import AdminTable from '@/components/ui/AdminTable/AdminTable'

import AdminNavigation from '@/ui/AdminNavigation/AdminNavigation'
import Heading from '@/ui/heading/Heading'

import Meta from '@/utils/meta/Meta'

import { useActors } from './useActors'

const ActorsList: FC = () => {
	const { handleSearch, searchTerm, isLoading, data, deleteUser } = useActors()
	return (
		<Meta title="Actors">
			<AdminNavigation />
			<Heading title="Actors" />
			<AdminHeader handleSearch={handleSearch} searchTerm={searchTerm} />
			<AdminTable
				tableItems={data || []}
				isLoading={isLoading}
				removeHandler={deleteUser}
				headerItems={['Name', 'Count movies']}
			/>
		</Meta>
	)
}
export default ActorsList
