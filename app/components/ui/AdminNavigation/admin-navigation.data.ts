import { getAdminHomeUrl, getAdminUrl } from '@/config/url.config'

import { INavItem } from './admin-navigation.interface'

export const navItems: INavItem[] = [
	{ link: getAdminHomeUrl(), title: 'Statistics' },
	{ link: getAdminUrl('users'), title: 'Users' },
	{ link: getAdminUrl('movies'), title: 'Movies' },
	{ link: getAdminUrl('actors'), title: 'Actors' },
	{ link: getAdminUrl('genres'), title: 'Genres' },
]
