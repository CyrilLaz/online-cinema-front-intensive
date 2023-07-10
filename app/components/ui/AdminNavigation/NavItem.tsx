import classNames from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'

import styles from './AdminNavigation.module.scss'
import { INavItem } from './admin-navigation.interface'

const NavItem: FC<{ item: INavItem }> = ({ item: { link, title } }) => {
	const { asPath } = useRouter()
	console.log('asPath', asPath)
	console.log('link', link)
	return (
		<li>
			<Link
				href={link}
				className={classNames({ [styles.active]: asPath === link })}
			>
				{title}
			</Link>
		</li>
	)
}
export default NavItem
