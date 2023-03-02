import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

async function getAllPokemon() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=10");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function getPokemon(url: string) {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function PokemonCard(pokemon: any) {
  const pokemonData = await getPokemon(pokemon.url);

  return (
    <Link href={`/pokemon/${pokemonData.id}`}>
      <Image
        src={pokemonData.sprites.other['official-artwork'].front_default}
        alt={pokemon.name}
        width={200}
        height={200}
      />
      <p>{pokemon.name}</p>
    </Link>
  )
}

export default async function Home() {
  const data = await getAllPokemon();
  return (
    <main className="bg-black flex flex-col items-center">
      <h1 className="text-white text-3xl">Home</h1>
      <div className="w-full flex flex-col items-center">
        {data.results.map((pokemon: any) => (
          <div key={pokemon.name}>
            {/* @ts-expect-error Server Component */}
            <PokemonCard {...pokemon} />
          </div>
        ))}
      </div>
    </main>
  );
}
