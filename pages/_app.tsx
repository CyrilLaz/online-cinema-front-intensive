import type { AppProps } from 'next/app'
import MainProvider from 'providers/MainProvider'

import '@/assets/styles/globals.scss'
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'
import { TypeComponentAuthFields } from '@/shared/types/auth.types'

function MyApp({ Component, pageProps }: AppProps & TypeComponentAuthFields) {
	return (
		<MainProvider Component={Component}>
			<Component {...pageProps} />
		</MainProvider>
	)
}

export default MyApp
