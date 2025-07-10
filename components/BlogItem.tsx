"use client ";
import { assets, blog_data } from "@/Assets/assets";
import Image from "next/image";
import React from "react";
import type { StaticImageData } from "next/image";
import Link from "next/link";

interface BlogItemProps {
  image: StaticImageData;
  category: string;
  title: string;
  description: string;
  id: number;
}

const BlogItem = ({
  image,
  title,
  description,
  category,
  id,
}: BlogItemProps) => {
  return (
    <div className="h-auto mx-4 my-5 max-w-[330] sm:max-w-[300] bg-white border border-black hover:shadow-[-7px_7px_7px_#000000]">
      <Link href={`/blogs/${id}`}>
        <Image
          src={image}
          alt="blog image"
          width={400}
          height={400}
          className="border-b border-black"
        />
        <p className="ml-5 mt-5 px-1 inline-block bg-black text-white text-sm">
          {category}
        </p>
        <div className="p-5">
          <h5 className="mb-2 text-lg font-medium tracking-tight text-gray-900">
            {title}
          </h5>
          <p className="mb-3 text-sm tracking-tight text-gray-700">
            {description}
          </p>
          <Link
            href={`/blogs/${id}`}
            className="inline-flex items-center py-2 font-semibold text-center"
          >
            Read more{" "}
            <Image
              src={assets.arrow}
              alt="arrow image"
              width={12}
              className="mx-2"
            />
          </Link>
        </div>
      </Link>
    </div>
  );
};

export default BlogItem;
