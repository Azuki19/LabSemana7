interface character {
	image: string;
	name: string;
	status: string;
	species: string;
	type: string;
	origin: {
		name: string;
	};
	episode: string;
}

async function getCharacters(limit: number) {
	try {
		const getData = await fetch('https://rickandmortyapi.com/api/character').then((res) => res.json());

		const resultsCharacters: character[] = getData.results.slice(0, limit);
		return resultsCharacters;
	} catch (error) {
		console.log(error);
	}
}

export default getCharacters;
