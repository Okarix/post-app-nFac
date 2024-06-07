import { CardComponent } from './card-component';

export default function CardWrapper() {
	return (
		<main className='grid grid-flow-row gap-6'>
			<CardComponent />
			<CardComponent />
			<CardComponent />
			<CardComponent />
			<CardComponent />
		</main>
	);
}
