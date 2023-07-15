import { FC } from 'react'

import styles from './AdminTable.module.scss'
import AdminActions from './adminActions/AdminActions'
import { IAdminTableItem } from './admin-table.interface'

const TableItem: FC<IAdminTableItem> = ({ removeHandler, tableItem }) => {
	return (
		<div className={styles.item}>
			{tableItem.items.map((value) => (
				<div key={value}>{value}</div>
			))}
			<AdminActions
				editUrl={tableItem.editUrl}
				removeHandler={removeHandler}
			/>
		</div>
	)
}
export default TableItem
