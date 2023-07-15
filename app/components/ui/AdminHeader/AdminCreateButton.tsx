import { FC } from 'react'

import MyButton from '../form-elements/MyButton'

const AdminCreateButton: typeof MyButton = ({ onClick }) => {
	return <MyButton onClick={onClick}>Create new</MyButton>
}
export default AdminCreateButton
