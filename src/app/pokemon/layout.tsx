export default async function PokemonLayout({
    children,
    }: {
    children: React.ReactNode;
    }) {
    return (
    <div>
        <h1 className="text-center text-4xl my-10">Pokemon details</h1>
        {children}
    </div>
    );
    }