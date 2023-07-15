import { useRouter } from 'next/router'
import { FC } from 'react'

import MaterialIcon from '../../MaterialIcon'

import style from './AdminActions.module.scss'

interface IAdminAction {
	editUrl: string
	removeHandler: () => void
}

const AdminActions: FC<IAdminAction> = ({ editUrl, removeHandler }) => {
	const { push } = useRouter()

	return (
		<div className={style.actions}>
			<button
				onClick={() => {
					push(editUrl)
				}}
			>
				<MaterialIcon name="MdEdit" />
			</button>
			<button onClick={removeHandler}>
				<MaterialIcon name="MdClose" />
			</button>
		</div>
	)
}
export default AdminActions
