import Head from 'next/head'
import ProgressBar from 'nextjs-progressbar'
import { FC } from 'react'

import { accentColor } from '@/config/constants'

import Favicons from './Favicons'
import { withChildren } from '@/shared/types/general.types'

const HeadProvider: FC<withChildren> = ({ children }) => {
	return (
		<>
			<ProgressBar
				color={accentColor}
				startPosition={0.3}
				stopDelayMs={200}
				height={3}
			/>
			<Head>
				<meta charSet="UTF-8" />
				<meta
					name="viewport"
					content="initial-scale=1.0, width=device-width, maximum-scale=1.0"
				/>
				<Favicons />
				<meta name="theme-color" content="#181b1e" />
				<meta name="msapplication-navbutton-color" content="#181b1e" />
				<meta name="apple-mobile-web-app-status-bar-style" content="#181b1e" />
			</Head>
			{children}
		</>
	)
}

export default HeadProvider
