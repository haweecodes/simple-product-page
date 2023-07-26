"use client";
import React, { useState } from "react";
import Image from "next/image";
import { ImageGalleryProps } from "@/app/types/ImageGallery";
import { useSwipeable } from "react-swipeable";

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, propKey }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const handlers = useSwipeable({
    onSwipedLeft: () => handlePrevNext(-1),
    onSwipedRight: () => handlePrevNext(1),
  });

  const handlePrevNext = (step: number) => {
    setCurrentImage((prevImage) => (prevImage + step + images.length) % images.length);
  };

  return (
    <div className="relative" {...handlers}>
      <Image
        className="w-full h-full object-contain"
        src={images[currentImage][propKey] as string}
        alt={`Image ${currentImage + 1}`}
        width={400}
        height={1000}
      />

      <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4">
        <button
         onClick={() => handlePrevNext(-1)}
          className="text-white font-bold bg-gray-800 rounded-full p-2 focus:outline-none"
        >
          &larr;
        </button>
        <button
         onClick={() => handlePrevNext(1)}
          className="text-white font-bold bg-gray-800 rounded-full p-2 focus:outline-none"
        >
          &rarr;
        </button>
      </div>
    </div>
  );
};

export default ImageGallery;
