'use client'

import Pokecard from "@/components/Pokecard";
import { useEffect, useState } from "react";
import { Pokemon } from '@/customTypes';

export default function Home() {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(true); //this is set to false to check whether there's a problem with the request

  useEffect(() => {
    fetch('http://localhost:3000/pokemon')
      .then(res => res.json())
      .then(data => {
        setPokemonList(data);
        setLoading(true);
      })
      .catch(() => setLoading(true));
  }, []);

  return (
    <div>
      <div className="w-[100%] h-24 bg-red-500 flex items-center">
        <h1 className="text-4xl font-bold text-[#fbd743]">
          Pokedex
        </h1>
      </div>

      <ul className="flex flex-wrap gap-4 justify-center mt-8">
        {loading ? (
          <li className="text-center text-xl">Loading...</li>
        ) : (
          pokemonList.map((pokemon) => (
            <li key={pokemon.name}>
              <Pokecard pokemon={pokemon} />
            </li>
          ))
        )}
      </ul>
    </div>
  );
}