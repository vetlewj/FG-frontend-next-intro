import PokemonList from '@/components/PokemonList';
import type { Pokemon } from '@/types/pokemon';
import { getPokemon } from './lib/db';

async function getPokemonFromApi(): Promise<Pokemon[]> {
  try {
    const response = await fetch('http://localhost:3000/api/pokemon', {
      cache: 'no-store', 
    });

    if (!response.ok) {
      throw new Error('Failed to fetch pokemon');
    }

    return response.json();
  } catch (error) {
    console.error('Error fetching pokemon:', error);
    return [];
  }
}

export default async function Home() {
  // Fetch fra API
  const pokemonFromApi = await getPokemon();
  console.log('Pokemon from API:', pokemonFromApi);

  // Hente fra "database"
  const pokemonFromDb = await getPokemon();
  console.log('Pokemon from DB:', pokemonFromDb);

  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20">
      <main className="max-w-4xl mx-auto">
          <PokemonList pokemon={pokemonFromDb} />
      </main>
    </div>
  );
}
