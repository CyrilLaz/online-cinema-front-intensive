import exp from 'constants'

import { IMenu } from './menu.interface'

export const firstMenu: IMenu = {
	title: 'Menu',
	items: [
		{ icon: 'MdHome', title: 'Home', link: '/' },
		{ icon: 'MdExplore', link: '/genres', title: 'Discovery' },
		{ icon: 'MdRestartAlt', link: '/fresh', title: 'Fresh movies' },
		{ icon: 'MdFireExtinguisher', link: '/trending', title: 'Trending now' },
	],
}

export const userMenu: IMenu = {
	title: 'General',
	items: [],
}

