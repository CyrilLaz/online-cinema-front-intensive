import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'

import AdminNavigation from '@/components/ui/AdminNavigation/AdminNavigation'
import SkeletonLoader from '@/components/ui/Skeleton'
import MyButton from '@/components/ui/form-elements/MyButton'
import MyField from '@/components/ui/form-elements/MyField'
import SlugField from '@/components/ui/form-elements/SlugField/SlugField'
import Heading from '@/components/ui/heading/Heading'

import formStyles from '@/ui/form-elements/admin-form.module.scss'

import Meta from '@/utils/meta/Meta'
import { generateSlug } from '@/utils/strings/generateSlug'

import { IMovieEdit } from './movie-edit.interface'
import { useMovieEdit } from './useMovieEdit'
import dynamic from 'next/dynamic'

// const DynamicTextEditor = dynamic(()=>import('@/components/ui/form-elements/TextEditor'),{ssr:false})

const MovieEdit: FC = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
		setValue,
		getValues,
		control,
	} = useForm<IMovieEdit>({ mode: 'onChange' })

	const { isLoading, onSubmit } = useMovieEdit(setValue)
	
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
								placeholder="Title"
								style={{ width: '48%' }}
								error={errors.title}
								{...register('title', { required: 'Title is required' })}
							/>
							<div style={{ width: '48%' }}>
								<SlugField
									generate={() =>
										setValue('slug', generateSlug(getValues('title')))
									}
									register={register}
									error={errors.slug}
								/>
							</div>
							{/* <MyField
								placeholder="Icon"
								style={{ width: '31%' }}
								error={errors.}
								{...register('icon', { required: 'Icon is required' })}
							/> */}

						</div>
							{/* <Controller
								control={control}
								name="description"
								defaultValue=""
								render={({
									field: { onChange, value },
									fieldState: { error },
								}) => (
									<DynamicTextEditor
										onChange={onChange}
										placeholder="Description"
										value={value}
										error={error}
									/>
								)}
								rules={{
									validate: {
										required: (v) =>
											(v && stripHtml(v).result.length > 0) ||
											'Description is required',
									},
								}}
							/> */}
						<MyButton>Update</MyButton>
					</>
				)}
			</form>
		</Meta>
	)
}
export default MovieEdit
