import http, { IncomingMessage, ServerResponse } from 'http';
import { Pokemon } from '@/customTypes';

const limit = 10;
const offset = 0;

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

http.createServer((req: IncomingMessage, res: ServerResponse) => {
  if (req.url === '/pokemon') {
    // Set cache headers

    const seconds = 300;

    res.setHeader('Cache-Control', `public, max-age=${seconds}`);
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(getPokemon()));
  } else {
    res.writeHead(404);
    res.end('Not Found');
  }
}).listen(3000);


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