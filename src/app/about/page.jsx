import Image from "next/image";

export default function About() {
    return (
        <div className="flex justify-center">
            <div className="text-center w-1/2"> 
                <h1 className="text-xl font-bold">Sobre o Projeto</h1>
                <p>Projetinho para testar as habilidades em Nextjs 13 com diversas funcionalidades..Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem voluptatum nihil, facere porro in, sed recusandae similique nostrum quas veniam, accusamus illum ducimus necessitatibus tenetur distinctio fugiat doloremque iure obcaecati.</p>
                <div className="flex justify-center">
                    <Image src={'/images/charizard.png'} width={300} height={300} alt="Charizard"/>
                </div>
            </div>
        </div>
    )
}