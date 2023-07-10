import Admin from '@/components/screens/admin/home/Admin'
import { NextPageAuth } from '@/shared/types/auth.types'

const ManagePage: NextPageAuth = () => {
	return <Admin/>
}
ManagePage.isOnlyAdmin = true
export default ManagePage
