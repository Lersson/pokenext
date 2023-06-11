import getSinglePokemon from "@/app/lib/getSinglePokemon";
import Image from "next/image";
import styles from "@/app/styles/Pokemon.module.css"
import { Suspense } from "react";
import Loading from "@/app/loading";

export default async function Pokemon({ params: { id } }) {
	const pokemon = await getSinglePokemon({ id });

	return (
		<div className="container">
			<div>
				<p className="text-center font-bold text-4xl p-4"> {pokemon.name} #{id} </p>
			</div>
            <div className="flex gap-4 flex-col sm:flex-row justify-center">
                <div className="bg-gray-800 rounded-lg w-fit p-4">
                    <Image
                        src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png`} //detail - imagem em baixa resolução
                        width={300}
                        height={300}
                        placeholder="blur"
                        blurDataURL="/images/placeholder.png"
                        alt={pokemon.name}/>
                </div>
                <div className="bg-green-600 rounded-lg p-3 text-center">
                    <span className="text-lg font-bold">Características</span>
                    <div className="flex justify-center p-3 gap-3">
                        <p>Altura: {pokemon.height * 10} cm</p>
                        <p>Peso: {pokemon.weight /10 } Kg</p>
                    </div>

                    <div>
                        <span>Tipo:</span>
                        <div className="flex gap-3 justify-center p-3">
                            {pokemon.types.map((item, index) => (
                                <span key={index} className={`${styles['type_'+item.type.name]} p-2 pl-4 pr-4 rounded-xl`}>{item.type.name}</span>
                            ))}
                        </div>
                    </div>
                    <div>
                        <span>Habilidades/Skills:</span>
                        <div className="flex gap-3 justify-center p-3">
                            {pokemon.abilities.map((item, index) => (
                                <span key={index} className="bg-gray-600 rounded-full pr-4 pl-4">{item.ability.name}</span>
                            ))}
                        </div>
                        
                    </div>
                </div>
            </div>
			
		</div>
	);
}
