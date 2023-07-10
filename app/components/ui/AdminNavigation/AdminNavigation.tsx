import { FC } from 'react'
import style from './AdminNavigation.module.scss'
import { navItems } from './admin-navigation.data'
import NavItem from './NavItem'
const AdminNavigation: FC = () => {
	return <nav className={style.nav}>
        <ul>{navItems.map(item=><NavItem item={item} key={item.title}/>)}</ul>
    </nav>
}
export default AdminNavigation
