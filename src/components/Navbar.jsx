import Image from "next/image";
import Link from "next/link";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import Login from "@/app/login/page";

export default function Navbar() {
    return (
        <nav className="bg-gray-800 text-gray-50 flex justify-between p-4">
            <div className="flex gap-4 text-lg font-bold">
                <div>
                    <Image src="/images/pokeball.png" width={30} height={30} alt="Pokenext"/>
                </div>
                <h1>PokeNext13</h1>
            </div>
                <ThemeSwitcher />
            <div className="flex gap-4">

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
            <div>
                <Login />
            </div>
            </div>
        </nav>
    )
}