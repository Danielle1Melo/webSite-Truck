import { About } from "@/components/about/About";
import { Banner } from "@/components/banner/Banner";
import { Budget } from "@/components/budget/Budget";
import { Header } from "@/components/header/Header";
import { Navbar } from "@/components/navbar/Navbar";
import { Services } from "@/components/servic/genericCard/Service";
import { Localization } from "@/components/where/Localization";


export default function Home() {
  return (
    <div>
      <Header />

      <Navbar />

      <Banner />

      <Services />

      <Budget />

      <About />

      <Localization />
    </div>
  );
}
