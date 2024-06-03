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
    }, 5000);
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
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
