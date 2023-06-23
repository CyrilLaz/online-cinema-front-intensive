import { FC } from 'react'

const NotAuthFavorites: FC = () => {
	return (
		<p className="mt-11 bg-gray-700 bg-opacity-20 py-3 px-5 rounded-lg  text-white text-opacity-80 block">
			For viewing favorites plz authorize!
		</p>
	)
}

export default NotAuthFavorites
