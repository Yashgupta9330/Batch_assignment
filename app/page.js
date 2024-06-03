import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import Footer from "@/components/Footer";
import Banner from "@/components/Banner";
import Questions from "@/components/Question";
import Testimonials from "@/components/Testimonial";
import Heading1 from "@/components/Latest";



export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center overflow-x-hidden">
    <Navbar/>
    <Heading1/>
    <Section/>
    <Questions/>
    <Testimonials/>
    <Banner/>
    <Footer/>
  </main>
  );
}
