import dayjs from 'dayjs'
import { client, db } from '.'
import { goalCompletions, goals } from './schema'

async function seed() {
	await db.delete(goalCompletions)
	await db.delete(goals)

	const result = await db
		.insert(goals)
		.values([
			{
				title: 'Correr 10km',
				desiredWeeklyFrequency: 1,
			},
			{
				title: 'Ler um livro',
				desiredWeeklyFrequency: 2,
			},
			{
				title: 'Meditar',
				desiredWeeklyFrequency: 7,
			},
			{
				title: 'Praticar yoga',
				desiredWeeklyFrequency: 3,
			},
			{
				title: 'Aprender um novo idioma',
				desiredWeeklyFrequency: 4,
			},
		])
		.returning()

	const startOfWeek = dayjs().startOf('week')

	await db.insert(goalCompletions).values([
		{
			goalId: result[0].id,
			createdAt: startOfWeek.toDate(),
		},
		{
			goalId: result[2].id,
			createdAt: startOfWeek.add(1, 'day').toDate(),
		},
	])
}

seed().finally(() => {
	client.end()
})
