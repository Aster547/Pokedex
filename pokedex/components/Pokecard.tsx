import { FC } from 'react';
import { Pokemon } from '@/customTypes'; // Adjust the path as needed

type PokecardProps = {
  pokemon: Pokemon;
};

const Pokecard: FC<PokecardProps> = ({ pokemon }) => (
  <div className="w-64 h-84 bg-[#fbd743] border-2 rounded-4xl justify-center items-center flex flex-col">
    <img
      src={pokemon.sprites?.front_default}
      alt="pokemon sprites"
      className="w-50 h-50 mt-2 bg-white rounded-3xl"
    />
    <h1 className="text-2xl font-bold mt-4">{pokemon.name}</h1>
    <h1 className="text-2xl font-bold">ID: {pokemon.id}</h1>
  </div>
);

export default Pokecard;