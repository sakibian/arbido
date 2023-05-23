import Hero from "@components/Navbar/Hero";
import Navbar from "@components/Navbar/Navbar";

export default function Home() {
	return (
		<main className="min-h-screen">
			<Navbar />
			<Hero />
		</main>
	);
}
