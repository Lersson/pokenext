import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
	title: "PokeNext13",
	description: "Gerenciamento de Pokemons",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className="h-screen flex flex-col bg-gray-700 text-white">
                <Navbar />
                <main className="flex-1 p-5">
                    {children}
                </main>
                <Footer />
            </body>
		</html>
	);
}
