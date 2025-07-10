"use client";
import { blog_data } from "@/Assets/assets";
import React, { useState } from "react";
import BlogItem from "./BlogItem";

const BlogList = () => {
  const [menu, setMenu] = useState("All");

  return (
    <div>
      <div className="flex justify-center gap-6 my-10">
        <button
          onClick={() => setMenu("All")}
          className={
            menu == "All" ? "bg-black text-white py-1 px-4 rounded-sm" : " "
          }
        >
          All
        </button>
        <button
          onClick={() => setMenu("Technology")}
          className={
            menu == "Technology"
              ? "bg-black text-white py-1 px-4 rounded-sm"
              : " "
          }
        >
          Technology
        </button>
        <button
          onClick={() => setMenu("Startup")}
          className={
            menu == "Startup" ? "bg-black text-white py-1 px-4 rounded-sm" : " "
          }
        >
          StartUp
        </button>
        <button
          onClick={() => setMenu("Lifestyle")}
          className={
            menu == "Lifestyle"
              ? "bg-black text-white py-1 px-4 rounded-sm"
              : " "
          }
        >
          LifeStyle
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-2 sm:px-4 md:px-6 lg:px-8 xl:px-12 mb-16">
        {blog_data
          .filter((item) => (menu == "All" ? true : item.category == menu))
          .map((item, index) => {
            return (
              <BlogItem
                image={item.image}
                title={item.title}
                description={item.description}
                category={item.category}
                key={index}
                id={item.id}
              />
            );
          })}
      </div>
    </div>
  );
};

export default BlogList;
