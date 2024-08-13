import BeautyServiceAll from "@/components/BeautyService/BeautyServiceAllBookers";
import Hero from "@/components/Hero/page";
import HomeofferAll from "@/components/HomeOffers/HomeofferAllBookers";
import { Line } from "@/components/Line/page";
import Navbar from "@/components/Navbar/page";

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
