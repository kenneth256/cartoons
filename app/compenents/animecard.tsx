import Image from "next/image";
import { Prop } from "./lib/types";
import React from "react";
import { MotionDiv } from "./motionDiv";


const variants = {
    hidden: { opacity: 0,},
    visible: { opacity: 1,},
}
const AnimeCard = ({ anime, index }: Prop) => {
  return (
    <MotionDiv variants={variants} initial='hidden' animate='visible' transition={{
        delay: index * 0.25 ,
        ease: 'easeInOut',
        duration: 0.5,
    }} className="max-w-sm rounded relative w-full">
      <div className="relative w-full h-[37vh]">
        <Image
          src={`https://shikimori.one${anime.image.original}`}
          alt={anime.name}
          fill
          className="rounded-xl"
        />
      </div>
      <div className="py-4 flex flex-col gap-3">
        <div className="flex items-center gap-1 justify-between">
          <h2 className="font-bold text-white text-xl line-clamp-1 w-full bg-gray-700">
            {anime.name}
          </h2>
          <div className="py-1 px-2 bg-[#161921] rounded-sm">
            <p className="text-white text-sm font-bold capitalize">{anime.kind}</p>
          </div>
        </div>
        <div className="flex gap-4 items-center ">
            <div className="flex flex-row gap-2 items-center">
                <Image 
                src='./episodes.svg'
                alt='episodes'
                width={20}
                height={20}
                className="object-contain"
                />
                <p className="text-white">{anime.episodes || anime.episodes} </p>

            </div>
            <div className="flex flex-row gap-2 items-center">
                <Image 
                src='./star.svg'
                alt='star'
                width={18}
                height={18}
                className="object-contain"
                
                />
                <p className="text-[#ffad49] font-bold text-base"> {anime.score}</p>
            </div>

        </div>
      </div>
    </MotionDiv>
  );
};

export default AnimeCard;