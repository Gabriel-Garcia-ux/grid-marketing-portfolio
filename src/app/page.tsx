import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import VideoBanner from "@/components/sections/VideoBanner";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid";
// import Services from "@/components/sections/Services";
// import Tools from "@/components/sections/Tools";
// import Experience from "@/components/sections/Experience";
// import Process from "@/components/sections/Process";
// import Contact from "@/components/sections/Contact";
// import SmoothScroll from "@/components/layout/SmoothScroll";
// import TornPaperCanvas from "@/components/motion/TornPaperCanvas";

export default function Home() {
  return (
    <>
      {/* <SmoothScroll> */}
        <Header />
        
        <main>
          <VideoBanner />
          <Hero />
          <About />
          
          <section id="portfolio" style={{ padding: '8rem 0', borderTop: '1px solid var(--line)' }}>
            <div className="container">
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 6vw, 5rem)', marginBottom: '3rem', letterSpacing: '0.04em' }}>PORTFÓLIO</h2>
              <PortfolioGrid />
            </div>
          </section>

          {/* 
          <Services />
          <Tools />
          <Experience />
          <Process />
          <Contact /> 
          */}
        </main>

        <Footer />
      {/* </SmoothScroll> */}
      {/* <TornPaperCanvas /> */}
    </>
  );
}
