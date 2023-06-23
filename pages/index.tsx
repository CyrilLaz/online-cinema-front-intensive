import { NextPage } from 'next'
import MainProvider from 'providers/MainProvider'

import Home from '@/components/screens/home/Home'

const HomePage: NextPage = () => {
	return (
		<MainProvider>
			<Home />
		</MainProvider>
	)
}

export default HomePage
