import React from "react";

export default function Cat() {
  let options = [
    { id: 1, img: "/bag.png", alt: "category1", desc: "Bags" },
    { id: 2, img: "/bottomwear.png", alt: "category2", desc: "Bottomwear" },
    { id: 3, img: "/dresses.png", alt: "category3", desc: "Dresses" },
    { id: 4, img: "/footwear.png", alt: "category4", desc: "Footwear" },
    { id: 5, img: "/topwear.png", alt: "category5", desc: "Topwear" },
    { id: 6, img: "/watch.png", alt: "category6", desc: "Watches" },
  ];

  return (
    <div className="px-8 py-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Categories</h2>
      <div className="flex flex-col sm:flex-row sm:space-x-6 sm:overflow-x-auto sm:p-12 gap-6 items-center justify-center">
        {options.map((option) => (
          <div key={option.id} className="flex flex-col items-center">
            <img
              src={option.img}
              alt={option.alt}
              className="w-24 h-24 rounded-full object-cover shadow-md transition duration-300 hover:ring-4 hover:ring-[#00FFFF] hover:ring-opacity-100"
            />
            <div className="mt-2 text-sm font-semibold text-center">{option.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}