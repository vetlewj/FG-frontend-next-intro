import { cache } from "react";
import pokemonData from "./pokemon.json";

export const getPokemon = cache(async () => {
  // Her ville man normalt hentet fra en database, men her er det bare brukt en JSON-fil for enkelhets skyld
  return pokemonData.results;
});

export const getPokemonByName = cache(async (name: string) => {
  const allPokemon = await getPokemon();
  return allPokemon.find((p) => p.name === name);
});
