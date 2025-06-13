import Pokecard from "@/components/Pokecard";

export default function Home() {
  return (
    <div>
      <div className="w-[100%] h-24 bg-red-500 flex items-center">
        <h1 className="text-4xl font-bold text-[#fbd743]">
          Pokedex
        </h1>
      </div>
      <Pokecard pokeId={1010} pokemon="Charmander" pokeURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"  />

    </div>
  );
}
