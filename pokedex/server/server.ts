// Exported function to fetch Pikachu data from PokéAPI
import { Pokemon } from '@/customTypes'; // Adjust the path as needed

export async function fetchPikachu(): Promise<Pokemon | undefined> {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data: Pokemon = await response.json();
    console.log('Pikachu data:', data);
    return data;
  } catch (error) {
    console.error('Fetch error:', error);
    return undefined;
  }
}


