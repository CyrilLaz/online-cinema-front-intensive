export const convertMongoDate = (date: string) => {
	console.log(date)
	return new Date(date).toLocaleDateString('ru')
}
