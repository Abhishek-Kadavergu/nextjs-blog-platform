"use client";

import { assets, blog_data } from "@/Assets/assets";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useParams } from "next/navigation";

const Page = () => {
  const params = useParams();
  const id = params?.id as string;

  type Blog = (typeof blog_data)[0];
  const [data, setData] = useState<Blog | undefined>();

  useEffect(() => {
    const blogId = parseInt(id);
    const blog = blog_data.find((item) => item.id === blogId);
    setData(blog);
  }, [id]);

  return data ? (
    <>
      <div className="bg-gray-200 py-5 px-5 md:px-12 lg:px-28">
        <div className="flex justify-between items-center">
          <Link href={"/"}>
            <Image
              src={assets.logo}
              width={180}
              alt=""
              className="w-[130px] sm:w-auto"
            />
          </Link>
          <button className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-solid border-black shadow-[-7px_7px_0px_#000000]">
            Get Started <Image src={assets.arrow} alt="sdfsd" />
          </button>
        </div>
        <div className="text-center my-24">
          <h1 className="text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto">
            {data?.title}
          </h1>
          <Image
            className="mx-auto mt-6 border border-white rounded-full"
            src={data?.author_img}
            width={60}
            height={60}
            alt=""
          />
          <p className="mt-1 pb-2 text-lg max-w-[740px] mx-auto">
            {data.author}
          </p>
        </div>
      </div>
      <div className="mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10">
        <Image
          src={data.image}
          alt={data.title}
          width={800}
          height={400}
          className="rounded-xl border-4 border-white"
        />
        <h1 className="my-8 text-[26px] font-semibold">Introduction:</h1>
        <p>{data.description}</p>
        <h3 className="my-5 text-[18px] font-semibold">
          Step 1: Self-Reflection and Goal Setting
        </h3>
        <p className="my-3">
          {" "}
          Before you manage your lifestyle, you must hav a clear understanding
          of what you want to achieve. Start by relfecting on your values,
          aspirations, and long-term goals.{" "}
        </p>
        <h3 className="my-5 text-[18px] font-semibold">
          Step 2: Create a Realistic Routine
        </h3>
        <p className="my-3">
          Structure your day around activities that support your goals. Use
          digital tools or planners to block time for key habits such as
          exercising, reading, learning new skills, and maintaining social
          connections.
        </p>

        <h3 className="my-5 text-[18px] font-semibold">
          Step 3: Track Progress and Reflect
        </h3>
        <p className="my-3">
          Regularly evaluate your progress. Use journaling or habit tracking
          apps. Reflect on what’s working and adjust what’s not.
        </p>
        <div className="my-24">
          <p className="text-black font-semibold">
            Share this article on social media.
          </p>
          <div className="flex my-3">
            <Image src={assets.facebook_icon} width={50} alt="" />
            <Image src={assets.twitter_icon} width={50} alt="" />
            <Image src={assets.googleplus_icon} width={50} alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  ) : (
    <></>
  );
};

export default Page;
