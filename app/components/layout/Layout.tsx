import { FC } from 'react'

import style from './Layout.module.scss'
import Navigation from './Navigation/Navigation'
import Sidebar from './Sidebar/Sidebar'
import { withChildren } from '@/shared/types/general.types'

const Layout: FC<withChildren> = ({ children }) => {
	return (
		<div className={style.layout}>
			<Navigation />
			<div className={style.center}>{children}</div>
			<Sidebar />
		</div>
	)
}

export default Layout
