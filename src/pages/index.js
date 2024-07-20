import Image from "next/image";
import { Inter } from "next/font/google";
import About from "@/sections/About";
import Explore from "@/sections/Explore";
import GetStarted from "@/sections/GetStarted";
import Hero from "@/sections/Hero";
import Insights from "@/sections/Insights";
import WhatsNew from "@/sections/WhatsNew";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Hero />
    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      <Explore />
    </div>
    <div className="relative">
      <GetStarted />
      <div className="gradient-04 z-0" />
      <WhatsNew />
    </div>

    <div className="relative">
      <Insights />
      <div className="gradient-04 z-0" />
    </div>
    <Footer />
  </div>
  );
}
