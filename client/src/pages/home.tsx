import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import About from "@/components/about";
import Projects from "@/components/projects";
import YouTube from "@/components/youtube";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="font-inter bg-slate-50 text-slate-800">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <YouTube />
      <Contact />
      <Footer />
    </div>
  );
}
