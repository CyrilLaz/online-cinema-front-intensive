import { useQuery } from 'react-query'

import { GenreService } from '@/services/genre.service'

import { getGenreUrl } from '@/config/url.config'

import { IMenuItem } from '../menu.interface'

export const usePopularGenres = () => {
	const queryData = useQuery(
		'popular genre menu',
		() => GenreService.getPopular(),
		{
			select: ({ data }) =>
				data
					.map(
						(genre) =>
							({
								icon: genre.icon,
								title: genre.name,
								link: getGenreUrl(genre.slug),
							} as IMenuItem)
					)
					.splice(0, 4),
		}
	)

	return queryData
}
