import Images from "@/assets/ImagesConst"
import Image from "next/image"

export const Line = () => {
    return (
      <div className='py-10 w-full'>
        <Image src={Images.line} className="w-full" alt='img' />
      </div>
    )
}