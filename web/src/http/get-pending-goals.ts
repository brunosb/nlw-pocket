type PendingGoalsResponse = {
	id: string
	title: string
	desiredWeeklyFrequency: number
	completionCount: number
}[]

export async function getPendingGoals(): Promise<PendingGoalsResponse> {
	const response = await fetch('http://localhost:3333/pending-goals')
	const data = (await response.json()) as { pendingGoals: PendingGoalsResponse }
	return data.pendingGoals
}
