import { useRouter } from 'next/router'
import { useEffect } from 'react'

import { useAuth } from '@/hooks/useAuth'

export const useAuthRedirect = () => {
	const { user } = useAuth()
	const { query, push } = useRouter()
	console.log(query)

	const redirect = query.redirect ? query.redirect.toString() : '/'

	useEffect(() => {
		if (user) push(redirect)
	}, [redirect, push, user])
}
