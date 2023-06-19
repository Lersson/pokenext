import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
import Providers from "./providers";

export const metadata = {
	title: "PokeNext13",
	description: "Gerenciamento de Pokemons",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className="h-screen flex flex-col ">
                <Providers>
                    <Navbar />
                    <main className="flex-1 p-5 dark:bg-gray-700 dark:text-white">
                        {children}
                    </main>
                    <Footer />
                </Providers>
            </body>
		</html>
	);
}
