"use client"
import { useEffect, useState } from "react";
import { reviews } from "@/utils/Items";
import Image from "next/image";
import Frame7 from "../public/Frame7.png"
export default function Testimonials() {
  const [reviewsData, setReviewsData] = useState(reviews);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = reviewsData.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, reviewsData]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <section className="flex flex-col items-center w-4/5 mt-10">
      <div className="mb-6">
      <div className="flex flex-col items-center justify-center gap-[1rem]">
      <div className="font-medium text-[18px] text-[#FF5555] leading-[28px]">TESTIMONIAL</div>
      <div className="font-bold text-[2rem] sm:text-[3rem] font-clash">What Our Users Say About Us?</div>
      </div>
      </div>
      <div className="relative w-full flex items-center justify-center flex-col-reverse lg:flex-row">
        <Image
          src={Frame7}
          alt=""
          className="w-full lg:w-1/2 object-cover hidden lg:block"
        />
        <div className="overflow-hidden w-full lg:w-1/2">
          <div className="flex transition-transform duration-700 ease-in-out transform" style={{ transform: `translateX(-${index * 100}%)` }}>
            {reviewsData.map((item, personIndex) => {
              const { id, image, name, heading, review, rating } = item;
              return (
                <article className="min-w-full flex flex-col items-center justify-center p-5 text-center" key={id}>
                  <Image src={image} alt="name" className="rounded-full w-24 h-24 mb-4 object-cover" />
                  <h3 className="text-xl font-semibold mb-2">{name}</h3>
                  <h4 className="text-lg font-medium mb-2">{heading}</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{review}</p>
                  <div className="flex">
                    {Array.from({ length: rating }, (_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.522 4.674a1 1 0 00.95.69h4.905c.969 0 1.371 1.24.588 1.81l-3.98 2.893a1 1 0 00-.364 1.118l1.52 4.673c.3.921-.755 1.688-1.54 1.118L10 15.347l-3.98 2.893c-.784.57-1.838-.197-1.54-1.118l1.52-4.673a1 1 0 00-.364-1.118L2.655 9.1c-.783-.57-.38-1.81.588-1.81h4.905a1 1 0 00.95-.69l1.522-4.674z" />
                      </svg>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
