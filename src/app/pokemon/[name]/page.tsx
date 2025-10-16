import { getPokemonByName } from '@/lib/db';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Image from 'next/image';

interface PokemonPageProps {
  params: Promise<{
    name: string;
  }>;
}

async function getPokemonDetailsFromApi(name: string) {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`, {
            cache: 'no-store',
        });

        if (!response.ok) {
            throw new Error('Failed to fetch pokemon details');
        }

        return response.json();
    } catch (error) {
        console.error('Error fetching pokemon details:', error);
        return null;
    }
}

export default async function PokemonPage({ params }: PokemonPageProps) {
  const { name } = await params;
  const pokemon = await getPokemonByName(name);
  const pokemonDetails = await getPokemonDetailsFromApi(name);

  if (!pokemon) {
    notFound();
  }

  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20">
        <Link href="/" >
          Back
        </Link>
        <h2 className="text-3xl font-bold mb-4 capitalize">
          <span className='font-normal'>Name:</span> {pokemon.name}
        </h2>
        {pokemonDetails && (
          <>
              <Image
                src={pokemonDetails.sprites.front_default}
                alt={pokemon.name}
                width={200}
                height={200}
                />
            </>
          )}
    </div>
  );
}
