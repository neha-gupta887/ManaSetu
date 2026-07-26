import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import WhyChoose from "../components/WhyChoose";
import Testimonials from "../components/Testimonials";
import CallToAction from "../components/CallToAction";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />

      {/* Prevent content from hiding behind fixed navbar */}
      <main className="pt-20">
        <Hero />
        <Features />
        <HowItWorks />
        <WhyChoose />
        <Testimonials />
        <CallToAction />
        <Footer />
      </main>
    </>
  );
}

export default Home;