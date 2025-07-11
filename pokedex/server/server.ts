import http, { IncomingMessage, ServerResponse } from 'http';
import { Pokemon } from '@/customTypes';

const limit = 10;
const offset = 0;
const PORT = 8080;

const url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
// Gets the first 10 Pokémon
async function getPokemon(): Promise<Pokemon[]> {
  try {
    // res is the HTTP response object from PokeAPI
    const res = await fetch(url);
    // data is the parsed JSON object from the response
    const data = await res.json();
    // returns the array of Pokémon from the data
    return data.results as Pokemon[];
  } catch (err) {
    console.error("Error fetching Pokemon data:", err);
    return [];
  }
}

http.createServer(async (req: IncomingMessage, res: ServerResponse) => {
  console.log("I am listenning");
  if (req.url === '/pokemon') {
    
    console.log("Request received");
      
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    const seconds = 300;

    res.setHeader('Cache-Control', `public, max-age=${seconds}`);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    const pokemon = await getPokemon();
    res.end(JSON.stringify(pokemon));
  } else {
    res.writeHead(404);
    res.end('Not Found');
  }
}).listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

/*
import { Pokemon } from '@/customTypes';

const url = "https://pokeapi.co/api/v2/pokemon?limit=10";

const pokeCache: Pokemon[] = []

async function fetchPokemon() {
  return fetch(url)
    .then((res) => res.json())
    .then((data: {results: Pokemon[]} ) => data.results)
    .catch((err) => {
      console.error("Error fetching Pokémon data:", err);
      return [];
    });
}
*/