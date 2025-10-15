'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
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
                <li key={p.name} className="border-b border-gray-200 last:border-b-0">
                  <Link 
                    href={`/pokemon/${p.name}`}
                    className="block px-4 py-3 hover:cursor-pointer transition-colors capitalize"
                  >
                    {p.name}
                  </Link>
                </li>
              ))
            ) : (
              <li className="px-4 py-3">
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
