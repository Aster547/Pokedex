'use client'

import Pokecard from "@/components/Pokecard";
import { fetchPikachu } from "@/server/server";
import { useEffect, useState } from "react";
import { Pokemon } from '@/customTypes'; // Adjust the path as needed

export default function Home() {

  const [pikachu, setPikachu] = useState<Pokemon | null>(null);

  useEffect(() => {
    try {
      async function getPikachu() {
        const data = await fetchPikachu();
        if (data) {
          setPikachu(data);
        }
        else {
          console.log("Pikachu retrieval failed.");
        }
      }

      getPikachu();
    }
    catch(err){
      console.log(err);
    }

  },[]);

  return (
    <div>
      <div className="w-[100%] h-24 bg-red-500 flex items-center">
        <h1 className="text-4xl font-bold text-[#fbd743]">
          Pokedex
        </h1>
      </div>

      <ul>
        {pikachu ? (
          <Pokecard pokemon={pikachu} />
        ) : (
          <li className="text-center text-xl">Loading...</li>
        )}
      </ul>
    </div>
  );
}
