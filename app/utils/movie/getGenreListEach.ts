export const getGenreListEach = (index: number, length: number, name: string) =>
	index === length - 1 ? name : name + ', '

export const getGenreList = (array: Array<{ name: string }>) =>
	array.map(({ name }) => name).join(', ')
