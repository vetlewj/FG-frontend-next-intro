export interface Pokemon {
  name: string;
}

export interface PokemonListResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Pokemon[];
}

export interface PokemonWithId {
  id: number;
  name: string;
}
