'use client';

import BookersBussines from "@/Components/cards/BookersBussines";
import Hero from "@/Components/Hero/page";
import HeaderTitles from "@/Components/text/HeaderBookers";
import Subtitle from "@/Components/text/subtitle";

// Example slide data that matches the expected Hero prop
const slides = [
  {
    title: 'Slide 1 Title',
    description: 'Description for slide 1',
    description2: 'Additional description for slide 1',
    image: '/path/to/image1.jpg',
  },
  {
    title: 'Slide 2 Title',
    description: 'Description for slide 2',
    description2: 'Additional description for slide 2',
    image: '/path/to/image2.jpg',
  },
  // Add more slides as needed
];

const BookersBiznes: React.FC = () => {
  return (
    <div className="container">
      <Hero slides={slides} /> {/* Pass slides data to Hero */}
      <div className="w-full md:w-[70%] mb-5">
        <HeaderTitles text="" />
      </div>
      <div className="w-full md:w-[65%] mb-5">
        <Subtitle text="" />
      </div>
      <div className="w-full md:w-[60%] mb-10">
        <Subtitle text="" />
      </div>
      <div className="mb-10 w-full">
        <BookersBussines />
      </div>
    </div>
  );
};

export default BookersBiznes;
