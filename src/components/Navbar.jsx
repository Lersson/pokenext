import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="bg-gray-800 text-gray-50 flex justify-between p-4">
            <div className="flex gap-3 text-lg font-bold">
                <Image src="/images/pokeball.png" width={30} height={30} alt="Pokenext"/>
                <h1>PokeNext13</h1>
            </div>
            <ul className="flex gap-4">
                <li>
                    <Link href="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        Sobre
                    </Link>
                </li>
            </ul>
        </nav>
    )
}