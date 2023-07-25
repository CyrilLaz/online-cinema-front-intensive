import ActorEdit from '@/components/screens/admin/edit/actor/ActorEdit'

import { NextPageAuth } from '@/shared/types/auth.types'

const ActorEditPage: NextPageAuth = () => {
	return <ActorEdit />
}
ActorEditPage.isOnlyAdmin = true
export default ActorEditPage
