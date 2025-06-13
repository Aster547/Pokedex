import React, { FC } from 'react';

interface PokecardProps {
  pokeId: number | string;
  pokemon: string;
  pokeURL: string;
}

const Pokecard: FC<PokecardProps> = ({ pokeId, pokemon, pokeURL }) => (
  <div className="w-64 h-84 bg-[#fbd743] border-2 rounded-4xl justify-center items-center flex flex-col">
    <img
      src={pokeURL}
      alt={pokemon}
      className="w-50 h-50 mt-2 bg-white rounded-3xl"
    />
    <h1 className="text-2xl font-bold mt-4">{pokemon}</h1>
    <h1 className="text-2xl font-bold">ID: {pokeId}</h1>
  </div>
);

export default Pokecard;