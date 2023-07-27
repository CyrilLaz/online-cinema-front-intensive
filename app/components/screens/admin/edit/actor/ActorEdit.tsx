import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'

// import { stripHtml } from 'string-strip-html'
import AdminNavigation from '@/components/ui/AdminNavigation/AdminNavigation'
import SkeletonLoader from '@/components/ui/Skeleton'
import MyButton from '@/components/ui/form-elements/MyButton'
import MyField from '@/components/ui/form-elements/MyField'
import SlugField from '@/components/ui/form-elements/SlugField/SlugField'
import UploadField from '@/components/ui/form-elements/UploadField/UploadField'
import Heading from '@/components/ui/heading/Heading'

import formStyles from '@/ui/form-elements/admin-form.module.scss'

import Meta from '@/utils/meta/Meta'
import { generateSlug } from '@/utils/strings/generateSlug'

import { IActorEdit } from './actor-edit.interface'
import { useActorEdit } from './useActorEdit'

// import dynamic from 'next/dynamic'

// const DynamicTextEditor = dynamic(()=>import('@/components/ui/form-elements/TextEditor'),{ssr:false})

const ActorEdit: FC = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
		setValue,
		getValues,
		control,
	} = useForm<IActorEdit>({ mode: 'onChange' })

	const { isLoading, onSubmit } = useActorEdit(setValue)

	return (
		<Meta title="Edit genre">
			<AdminNavigation />
			<Heading title="Edit genre" />
			<form className={formStyles.form} onSubmit={handleSubmit(onSubmit)}>
				{isLoading ? (
					<SkeletonLoader count={3} height={36} className="mt-4" />
				) : (
					<>
						<div className={formStyles.fields}>
							<MyField
								placeholder="Name"
								style={{ width: '48%' }}
								error={errors.name}
								{...register('name', { required: 'Name is required' })}
							/>
							<div style={{ width: '48%' }}>
								<SlugField
									generate={() =>
										setValue('slug', generateSlug(getValues('name')))
									}
									register={register}
									error={errors.slug}
								/>
							</div>
						</div>
						<Controller
							control={control}
							name="photo"
							defaultValue=""
							render={({
								field: { onChange, value },
								fieldState: { error },
							}) => (
								<UploadField
									onChange={onChange}
									error={error}
									folder="actors"
									value={value}
									placeholder="Photo"
								/>
							)}
							rules={{
								required: 'Photo is required',
							}}
						/>
						<MyButton>Update</MyButton>
					</>
				)}
			</form>
		</Meta>
	)
}
export default ActorEdit
