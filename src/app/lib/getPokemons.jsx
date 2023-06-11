export default async function getPokemons(){

    // const maxPokemons = 251
    const maxPokemons = 1000
    const api = 'https://pokeapi.co/api/v2/pokemon/'

    const res = await fetch(`${api}/?limit=${maxPokemons}`)
    const data = await res.json()

    data.results.forEach((item, index) => {
        item.id = index + 1
        item.idImage = index + 1
        //adicionando 00 no 1 099 no 99 etc.
        //ajustei a aula para pegar de https://www.pokemon.com/us/pokedex
        let ajustado = String(item.id).padStart(3,'0');
        item.idImage = ajustado 
    })
    
    return data
}