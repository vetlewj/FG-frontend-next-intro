'use client';

import { useMemo, useState } from 'react';
import type { Pokemon } from '@/types/pokemon';

interface PokemonListProps {
  pokemon: Pokemon[];
}

export default function PokemonList({ pokemon }: PokemonListProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPokemon = useMemo(() => {
    if (!searchTerm) {
      return pokemon;
    }
    
    return pokemon.filter((p) =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [pokemon, searchTerm]);

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2  border border-gray-200"
        />
      </div>
        <ul>
            {filteredPokemon.length > 0 ? (
              filteredPokemon.map((p) => (
                <li key={p.name} className="px-2 py-2">
                  {p.name}
                </li>
              ))
            ) : (
              <li>
                No Pokemon found
              </li>
            )}
            </ul>

      <div className="mt-4 text-sm text-center">
        Showing {filteredPokemon.length} of {pokemon.length} Pokemon
      </div>
    </div>
  );
}
