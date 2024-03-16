export const getCharacters = async (i: number) => {
	try {
		const characters = await fetch('https://rickandmortyapi.com/api/character' + i).then((res) => res.json());
		return characters;
	} catch (error) {
		console.error(error);
	}
};
