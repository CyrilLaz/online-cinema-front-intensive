export const getGenreListEach = (index: number, length: number, name: string) =>
	index === length - 1 ? name : name + ', '
