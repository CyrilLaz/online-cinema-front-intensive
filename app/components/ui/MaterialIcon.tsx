import { FC } from 'react'
import * as MaterialIcons from 'react-icons/md'

import { useRenderClient } from '@/hooks/useRenderClient'

import { TypeMaterialIconNames } from '@/shared/types/icon.types'

const MaterialIcon: FC<{ name: TypeMaterialIconNames }> = ({ name }) => {
	const { isRenderClient } = useRenderClient()
	const IconComponent = MaterialIcons[name] || MaterialIcons.MdEmergency
	if (isRenderClient) return <IconComponent />
	return null
}

export default MaterialIcon
