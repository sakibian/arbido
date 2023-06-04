import Blog from "@components/Blog/Blog";
import Hero from "@components/Navbar/Hero";
import Navbar from "@components/Navbar/Navbar";
import OurPeople from "@components/Our People/OurPeople";
import Testimonials from "@components/Testimonials/Testimonials";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Blog />
      <OurPeople />
      <Testimonials />
    </main>
  );
}
