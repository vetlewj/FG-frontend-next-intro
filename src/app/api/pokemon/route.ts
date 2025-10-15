import { NextResponse } from "next/server";
import type { PokemonListResponse } from "@/types/pokemon";

export async function GET() {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=200");

    if (!response.ok) {
      throw new Error("Failed to fetch pokemon");
    }

    const data: PokemonListResponse = await response.json();

    return NextResponse.json(data.results);
  } catch (error) {
    console.error("Error fetching pokemon:", error);
    return NextResponse.json(
      { error: "Failed to fetch pokemon" },
      { status: 500 }
    );
  }
}
