import Images from "@/assets/ImagesConst";
import Image from "next/image";
export default function Home() {
  return (
    <main className="">
      <Image src={Images.Logo} className="" alt="Next.js Logo" width={180} height={37} priority />
    </main>
  );
}
