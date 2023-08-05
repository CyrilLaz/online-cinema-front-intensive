import dynamic from 'next/dynamic'
import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'

import AdminNavigation from '@/components/ui/AdminNavigation/AdminNavigation'
import SkeletonLoader from '@/components/ui/Skeleton'
import MyButton from '@/components/ui/form-elements/MyButton'
import MyField from '@/components/ui/form-elements/MyField'
import SlugField from '@/components/ui/form-elements/SlugField/SlugField'
import UploadField from '@/components/ui/form-elements/UploadField/UploadField'
import Heading from '@/components/ui/heading/Heading'

// import Select from '@/components/ui/select/Select'
import formStyles from '@/ui/form-elements/admin-form.module.scss'

import Meta from '@/utils/meta/Meta'
import { generateSlug } from '@/utils/strings/generateSlug'

import { IMovieEdit } from './movie-edit.interface'
import { useAdminActors } from './useAdminActor'
import { useAdminGenres } from './useAdminGenre'
import { useMovieEdit } from './useMovieEdit'

const DynamicSelect = dynamic(() => import('@/components/ui/select/Select'), {
	ssr: false,
})
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
	const { isLoading: isActorsLoading, data: actorsData } = useAdminActors()
	const { isLoading: isGenresLoading, data: genresData } = useAdminGenres()

	return (
		<Meta title="Edit movie">
			<AdminNavigation />
			<Heading title="Edit movie" />
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
							{/* <div className={formStyles.fields}> */}
							<MyField
								placeholder="Country"
								style={{ width: '31%' }}
								error={errors.parameters?.country}
								{...register('parameters.country', {
									required: 'Country is required',
								})}
							/>
							<MyField
								placeholder="Duration (MIN)"
								style={{ width: '31%' }}
								error={errors.parameters?.duration}
								{...register('parameters.duration', {
									required: 'Duration is required',
								})}
							/>
							<MyField
								placeholder="Year"
								style={{ width: '31%' }}
								error={errors.parameters?.year}
								{...register('parameters.year', {
									required: 'Year is required',
								})}
							/>
							<Controller
								control={control}
								name="genres"
								render={({ field, fieldState: { error } }) => (
									<DynamicSelect
										error={error}
										placeholder="Genres"
										field={field}
										options={genresData || []}
										isMulti
										isLoading={isGenresLoading}
									/>
								)}
								rules={{
									required: 'Poster is required',
								}}
							/>
							<Controller
								control={control}
								name="actors"
								render={({ field, fieldState: { error } }) => (
									<DynamicSelect
										error={error}
										placeholder="Actors"
										field={field}
										options={actorsData || []}
										isMulti
										isLoading={isActorsLoading}
									/>
								)}
								rules={{
									required: 'Poster is required',
								}}
							/>
							<Controller
								control={control}
								name="poster"
								defaultValue=""
								render={({
									field: { onChange, value },
									fieldState: { error },
								}) => (
									<UploadField
										onChange={onChange}
										error={error}
										folder="movies"
										value={value}
										placeholder="Poster"
									/>
								)}
								rules={{
									required: 'Poster is required',
								}}
							/>
							<Controller
								control={control}
								name="bigPoster"
								defaultValue=""
								render={({
									field: { onChange, value },
									fieldState: { error },
								}) => (
									<UploadField
										onChange={onChange}
										error={error}
										folder="movies"
										value={value}
										placeholder="Big Poster"
									/>
								)}
								rules={{
									required: 'Big poster is required',
								}}
							/>
							<Controller
								control={control}
								name="videoUrl"
								defaultValue=""
								render={({
									field: { onChange, value },
									fieldState: { error },
								}) => (
									<UploadField
										onChange={onChange}
										error={error}
										folder="movies"
										value={value}
										placeholder="Movie"
										isNoImage
										style={{ marginTop: -25 }}
									/>
								)}
								rules={{
									required: 'Movie is required',
								}}
							/>
						</div>
						<MyButton>Update</MyButton>
					</>
				)}
			</form>
		</Meta>
	)
}
export default MovieEdit
