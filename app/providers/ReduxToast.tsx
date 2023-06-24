import { FC } from 'react'
import ReduxToastr from 'react-redux-toastr'

const ReduxToast: FC = () => {
	return (
		<ReduxToastr
			newestOnTop={false}
			preventDuplicates
			progressBar
			closeOnToastrClick
			transitionIn="fadeIn"
			transitionOut="fadeOut"
			timeOut={4000}
		/>
	)
}

export default ReduxToast
