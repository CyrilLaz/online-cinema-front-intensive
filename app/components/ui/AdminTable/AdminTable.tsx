import { FC } from 'react'

import SkeletonLoader from '../Skeleton'

import styles from './AdminTable.module.scss'
import AdminTableHeader from './AdminTableHeader'
import TableItem from './TableItem'
import { IAdminTable } from './admin-table.interface'

const AdminTable: FC<IAdminTable> = ({
	headerItems,
	isLoading,
	removeHandler,
	tableItems,
}) => {
	return (
		<div>
			<AdminTableHeader headerItems={headerItems} />
			{isLoading ? (
				<SkeletonLoader count={1} height={48} className="mt-4" />
			) : tableItems.length ? (
				tableItems.map((item) => (
					<TableItem
						key={item._id}
						tableItem={item}
						removeHandler={() => removeHandler(item._id)}
					/>
				))
			) : (
				<div className={styles.notFound}>Not found</div>
			)}
		</div>
	)
}
export default AdminTable
