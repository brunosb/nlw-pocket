import { Plus } from 'lucide-react'
import letsStartIllustration from '../assets/lets-start-illustration.svg'
import logoInOrbit from '../assets/logo-in-orbit.svg'
import { Button } from './ui/button'
import { DialogTrigger } from './ui/dialog'

export function EmptyGoals() {
	return (
		<div className="h-screen flex flex-col justify-center items-center gap-8">
			<img src={logoInOrbit} alt="in.orbit" />
			<img src={letsStartIllustration} alt="lets start" />
			<p className="text-zinc-300 leading-relaxed max-w-80 text-center">
				Você ainda não cadastrou nenhuma meta, que tal cadastrar uma agora
				mesmo?
			</p>

			<DialogTrigger asChild>
				<Button>
					<Plus className="size-4" />
					Cadastrar meta
				</Button>
			</DialogTrigger>
		</div>
	)
}
