import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'

import AuthFields from '@/components/screens/auth/AuthFields'
import AdminNavigation from '@/components/ui/AdminNavigation/AdminNavigation'
import SkeletonLoader from '@/components/ui/Skeleton'
import MyButton from '@/components/ui/form-elements/MyButton'
import Heading from '@/components/ui/heading/Heading'

import Meta from '@/utils/meta/Meta'

import { useUserEdit } from './useUserEdit'
import { IUserEdit } from './user-edit.interface'

const UserEdit: FC = () => {
	const { handleSubmit, register, formState, setValue, control } =
		useForm<IUserEdit>({ mode: 'onChange' })

	const { isLoading, onSubmit } = useUserEdit(setValue)

	return (
		<Meta title="Edit genre">
			<AdminNavigation />
			<Heading title="Edit genre" />
			<form className="admin-form" onSubmit={handleSubmit(onSubmit)}>
				{isLoading ? (
					<SkeletonLoader count={3} height={36} className="mt-4" />
				) : (
					<>
						<AuthFields formState={formState} register={register} />

						<Controller
							control={control}
							name="isAdmin"
							render={({ field }) => (
								<button
									className="text-link block mb-7"
									onClick={(e) => {
										e.preventDefault()
										field.onChange(!field.value)
									}}
								>
									{field.value ? 'Make it regular user' : 'make it Admin'}
								</button>
							)}
						></Controller>
					</>
				)}
				<MyButton>Update</MyButton>
			</form>
		</Meta>
	)
}
export default UserEdit
