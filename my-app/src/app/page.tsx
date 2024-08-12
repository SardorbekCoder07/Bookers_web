import BeautyServiceAll from "@/Components/BeautyService/BeautyServiceAll";
import Hero from "@/Components/Hero/Hero";
import HomeofferAll from "@/Components/HomeOffers/HomeofferAll";
import { Line } from "@/Components/Line/Line";
import Navbar from "@/Components/Navbar/Navbar";

export default function Home() {
  return (
    <main className=" container">
      <Navbar backgrounColor="bg-[#21212E]"/>
      <Hero/>
      <Line/>
      <HomeofferAll/>
      <Line/>
      <BeautyServiceAll/>
  </main>
  );
}
