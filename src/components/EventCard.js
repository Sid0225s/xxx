import React from "react";

export default function EventCard({ details }) {
  return (
    <div className="xl:w-[20%] lg:w-[25%] 2md:w-[33.33333%] xs2:w-[50%] xs2:max-w-[350px] w-[300px] cursor-pointer select-none p-4">
      <div className="bg-white w-full h-full relative p-2 rounded-xl shadow-card">
        <div className="w-full aspect-square flex justify-center items-center overflow-hidden">
          <img src={details.img} alt="project" className="h-full w-full" />
        </div>
        <div className="mt-2">
          <div className="w-full bottom-0 text-black font-semibold raleway">{details.title}</div>
          <div className="w-full bottom-0 text-black text-sm text-left">
            <b>Date:</b> {details.date}
          </div>
        </div>
      </div>
    </div>
  );
}
