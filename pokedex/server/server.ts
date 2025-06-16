// Exported function to fetch Pikachu data from PokéAPI
import { Pokemon } from '@/customTypes'; // Adjust the path as needed

const url = "https://pokeapi.co/api/v2/pokemon?limit=10";

fetch(url)
  .then((res) => res.json())
  .then((data: {results: Pokemon[]} ) => {
    
  })
  .catch((err) => {
    console.error("Error fetching Pokémon data:", err);
  });