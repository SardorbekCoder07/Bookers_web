"use client";

import BookersBussines from "@/Components/cards/BookersBussines";
import Hero from "@/Components/Hero/page";
import HeaderTitles from "@/Components/text/HeaderBookers";
import Subtitle from "@/Components/text/subtitle";


const BookersBiznes = () => {

  return (
    <div className=" container">
      <Hero title={'fewfew'} />
      <div className="w-full md:w-[70%] mb-5">
        <HeaderTitles text={''} />
      </div>
      <div className="w-full md:w-[65%] mb-5">
        <Subtitle text={''} />
      </div>
      <div className="w-full md:w-[60%] mb-10">
        <Subtitle text={''} />
      </div>
      <div className="mb-10 w-full">
        <BookersBussines />
      </div>
    </div>
  );
};

export default BookersBiznes;