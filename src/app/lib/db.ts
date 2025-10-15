import { cache } from "react";
import pokemonData from "./pokemon.json";

export const getPokemon = cache(async () => {
  // Se for dere at den her henter fra en database i stedet, her er bare JSON-fil for å lage et enkelt eksempel
  return pokemonData.results;
});
