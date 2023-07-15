import { ChangeEvent, FC } from 'react'

import SearchField from '../SearchField/SearchField'

import AdminCreateButton from './AdminCreateButton'
import style from './adminHeader.module.scss'

export interface IAdminHeader {
	onClick?: () => void
	searchTerm: string
	handleSearch: (e: ChangeEvent<HTMLInputElement>) => void
}

const AdminHeader: FC<IAdminHeader> = ({
	onClick,
	handleSearch,
	searchTerm,
}) => {
	return (
		<div className={style.header}>
			<SearchField handleSearch={handleSearch} searchTerm={searchTerm} />
			{onClick && <AdminCreateButton onClick={onClick} />}
		</div>
	)
}

export default AdminHeader
