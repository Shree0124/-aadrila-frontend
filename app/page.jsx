
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Industries from "./components/Industries";
import Product from "./components/Products";
import Blog from "./components/Blog";

export default function Home() {
  return (
    <>
      <Navbar />

      <section
        id="home"
        className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/bg-home.jpg')" }}
      >
        {/* Padding top to offset fixed navbar height */}
        <div className="pt-[85px] w-full px-6 lg:px-16">
          <Hero />
        </div>
      </section>

       <section
        id="industries"
        className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/bg-home.jpg')" }}
      >
        {/* Padding top to offset fixed navbar height */}
        <div className="pt-[85px] w-full px-6 lg:px-16">
          <Industries />
        </div>

      </section>

       <section
        id="products"
        className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/bg-home.jpg')" }}
      >
        {/* Padding top to offset fixed navbar height */}
        <div className="pt-[85px] w-full px-6 lg:px-16">
          <Product />
        </div>
      </section>


        <section
        id="blog"
        className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/bg-home.jpg')" }}
      >
        {/* Padding top to offset fixed navbar height */}
        <div className="pt-[85px] w-full px-6 lg:px-16">
          <Blog />
        </div>
      </section>

      <section
        id="contact"
        className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/bg-contact.jpg')" }}
      >
        <div className="pt-[85px] w-full px-6 lg:px-16">
          <Contact />
        </div>
      </section>

      <section
        id="about"
        className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/bg-about.jpg')" }}
      >
        <div className="pt-[85px] w-full px-6 lg:px-16">
          <About />
        </div>
      </section>
    </>
  );
}
