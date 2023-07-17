import ActorsList from '@/screens/admin/actors/ActorsList'
import { NextPageAuth } from '@/shared/types/auth.types'

const ActorsListPage: NextPageAuth = () => {
	return <ActorsList/>
}
ActorsListPage.isOnlyAdmin = true
export default ActorsListPage
