"use client"


import type {Pokemon} from "@/types/pokemon";
import {Suspense} from "react";
import ClientPokemonList from "@/components/ClientPokemonList";

async function getPokemonFromApi(): Promise<Pokemon[]> {
    try {
        const response = await fetch('http://localhost:3000/api/pokemon', {
            cache: 'no-store',
        });

        if (!response.ok) {
            throw new Error('Failed to fetch pokemon');
        }

        // Timeout for å simulere treg API
        await new Promise((resolve) => setTimeout(resolve, 2000));

        return response.json();
    } catch (error) {
        console.error('Error fetching pokemon:', error);
        return [];
    }
}


export default function ClientPage() {
    // Her kan man også bruke biblioteker som React Query hvis man vil det
    // Fetch fra API
    const pokemonFromApi = getPokemonFromApi();
    return (
        <>
            <h1 className={"text-center text-4xl my-10"}>Klient side fetching</h1>
            <Suspense fallback={<div className={"text-center"}>Laster...</div>}>
                <ClientPokemonList pokemon={pokemonFromApi}/>
            </Suspense>
        </>
    );
}