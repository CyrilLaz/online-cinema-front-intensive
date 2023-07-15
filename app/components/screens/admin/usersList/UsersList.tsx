import { FC } from 'react'

import AdminHeader from '@/components/ui/AdminHeader/AdminHeader'
import AdminTable from '@/components/ui/AdminTable/AdminTable'

import AdminNavigation from '@/ui/AdminNavigation/AdminNavigation'
import Heading from '@/ui/heading/Heading'

import Meta from '@/utils/meta/Meta'

import { useUsers } from './useUsers'

const UsersList: FC = () => {
	const { handleSearch, searchTerm, isLoading, data, deleteUser } = useUsers()
	return (
		<Meta title="Users">
			<AdminNavigation />
			<Heading title="Users" />
			<AdminHeader handleSearch={handleSearch} searchTerm={searchTerm} />
			<AdminTable
				tableItems={data || []}
				isLoading={isLoading}
				removeHandler={deleteUser}
				headerItems={['Email', 'Date register']}
			/>
		</Meta>
	)
}
export default UsersList
