import { FC } from 'react'
import { useForm } from 'react-hook-form'

import AdminNavigation from '@/components/ui/AdminNavigation/AdminNavigation'
import SkeletonLoader from '@/components/ui/Skeleton'
import MyField from '@/components/ui/form-elements/MyField'
import Heading from '@/components/ui/heading/Heading'

import Meta from '@/utils/meta/Meta'

import { IGenreEdit } from './genre-edit.interface'
import { useGenreEdit } from './useGenreEdit'

const GenreEdit: FC = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
		setValue,
		getValues,
	} = useForm<IGenreEdit>({ mode: 'onChange' })

	const { isLoading, onSubmit } = useGenreEdit(setValue)
	return (
		<Meta title="Edit genre">
			<AdminNavigation />
			<Heading title="Edit genre" />
			{isLoading ? (
				<SkeletonLoader count={3} height={36} className="mt-4" />
			) : (
				<form onSubmit={handleSubmit(onSubmit)}>
					<MyField
						placeholder="Name"
						style={{ width: '31%' }}
						error={errors.name}
						{...register('name', { required: 'Name is required' })}
					/>
					<div style={{ width: '31%' }}>{/* slug field */}</div>
					<MyField
						placeholder="Icon"
						style={{ width: '31%' }}
						error={errors.name}
						{...register('icon', { required: 'Icon is required' })}
					/>
					{/*Tex editor */}
					<button>Update</button>
				</form>
			)}
		</Meta>
	)
}
export default GenreEdit
