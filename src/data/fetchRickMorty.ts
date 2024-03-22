export const getRickandMorty = async (id: number) => {
	try {
		// await "espera" hasta que no se resuelva el va a esperar para retornar
		const getDataRickandMorty = await fetch('https://rickandmortyapi.com/api/character/' + id).then((result) =>
			result.json()
		);
		return getDataRickandMorty;
	} catch (error) {
		console.error(error);
	}
};

export default getRickandMorty;
