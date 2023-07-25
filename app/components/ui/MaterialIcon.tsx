import { FC } from 'react'
import * as MaterialIcons from 'react-icons/md'

import { TypeMaterialIconNames } from '@/shared/types/icon.types'

const MaterialIcon: FC<{ name: TypeMaterialIconNames }> = ({ name }) => {
	const IconComponent = MaterialIcons[name] || MaterialIcons.MdEmergency
	return <IconComponent />
}

export default MaterialIcon
