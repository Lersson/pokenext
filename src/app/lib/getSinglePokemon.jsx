export default async function getSinglePokemon({id}){
    
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${Number(id)}`) //o number remove os zeros à esquerda

    if (!res.ok) { 
        throw new Error('Failed to fetch pokemon')   
    }

    return res.json()
}