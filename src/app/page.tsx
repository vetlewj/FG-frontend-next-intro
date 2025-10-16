import PokemonList from '@/components/PokemonList';
import { getPokemon } from './lib/db';

export default async function Home() {
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
