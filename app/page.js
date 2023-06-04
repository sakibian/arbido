import About from "@components/About/About";
import Blog from "@components/Blog/Blog";
import Contact from "@components/Contact/Contact";
import Footer from "@components/Footer/Footer";
import Hero from "@components/Navbar/Hero";
import Navbar from "@components/Navbar/Navbar";
import OurPeople from "@components/Our People/OurPeople";
import Portfolio from "@components/Portfolio/Portfolio";
import ServiceCard01 from "@components/Services/ServiceCard01";
import Services from "@components/Services/Services";
import Statistics from "@components/Statistics/Statistics";
import { Toaster } from "react-hot-toast";

export default function Home() {
	return (
		<main>
			<Toaster />
			<Navbar />
			<Hero />
			<Services />
			<Portfolio />
			<About />
			<Statistics />
			<Blog />
			<OurPeople />
			<Contact />
			<Footer />
		</main>
	);
}
