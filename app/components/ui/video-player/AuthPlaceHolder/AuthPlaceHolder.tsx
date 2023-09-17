import { FC } from 'react'

import { AuthButton } from './AuthButton'

export const AuthPlaceHolder: FC<{ slug: string }> = ({ slug }) => {
	return (
		<div>
			<div>
				<p>You must be logged in to start watching</p>
				<AuthButton slug={slug} />
			</div>
		</div>
	)
}
