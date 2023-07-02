import { FC, useEffect, useState } from 'react'

import { useAuth } from '@/hooks/useAuth'

import { getAdminHomeUrl } from '@/config/url.config'

import MenuItem from '../MenuItem'

import LogoutButton from './LogoutButton'

const AuthItems: FC = () => {
	const { user } = useAuth()
	const [hydrated, setHydrated] = useState(false)

	useEffect(() => {
		setHydrated(true)
	}, [])

	return (
		<>
			{hydrated && user ? (
				<>
					<MenuItem
						item={{
							icon: 'MdSettingsApplications',
							title: 'Profile',
							link: '/profile',
						}}
					/>
					<LogoutButton />
				</>
			) : (
				<MenuItem
					item={{
						icon: 'MdLogin',
						title: 'Login',
						link: '/auth',
					}}
				/>
			)}
			{hydrated && user?.isAdmin && (
				<MenuItem
					item={{
						icon: 'MdLockPerson',
						link: getAdminHomeUrl(),
						title: 'Admin panel',
					}}
				/>
			)}
		</>
	)
}

export default AuthItems
