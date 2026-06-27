const BASE_URL = 'https://pokeapi.co/api/v2/';

const cache = {};

// Make a GET request to 'PokeAPI'.
// Throws on non-2xx so error bodies (incl. plain-text 404s) never get cached
// or treated as Pokémon data.
const get = async ( endpoint ) => {
	if ( ! cache[ endpoint ] ) {
		const res = await fetch( BASE_URL + endpoint );
		if ( ! res.ok ) {
			throw new Error( `PokeAPI ${ res.status } for ${ endpoint }` );
		}
		cache[ endpoint ] = await res.json();
	}

	return cache[ endpoint ];
};

// Fetch all pokemons.
export const fetchPokemons = ( limit, offset ) => {
	return get( `pokemon?limit=1025&offset=0` );
};

// Fetch specific pokemon data.
export const fetchPokemonData = ( pokemonId ) => {
	return get( `pokemon/${ pokemonId }` );
};