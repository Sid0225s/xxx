import React from "react";
import eventImg1 from "../assets/Events/learntoglide.jpeg";
import eventImg2 from "../assets/Events/swworkshop.jpeg";
import eventImg3 from "../assets/Events/20240322_015013_0000.png";
import eventImg4 from "../assets/Events/IMG-20240322-WA0010.jpg";
import EventCard from "../components/EventCard";

export default function Events() {
  const events = [
    {
      img: eventImg3,
      title: "Battle Strike",
      date: "17-03-2024",
    },
    {
      img: eventImg4,
      title: "Treasure Hunt",
      date: "15-03-2024",
    },
    {
      img: eventImg1,
      title: "Automobileio",
      date: "22-03-2023",
    },
    {
      img: eventImg2,
      title: "SolidWorks Workshop",
      date: "22-03-2023",
    },
  ];
  return (
    <div className="absolute top-0 left-0 w-full h-full text-white">
      <div className="relative w-full h-full overflow-hidden flex flex-col">
        <h1 className="text-4xl raleway tracking-wide font-semibold text-[#ffffff] bg-[#00000090] p-5 text-center rounded-md mb-5 h-[80px]">
          EVENTS
        </h1>
        <div className=" flex justify-center items-center">
          <div className=" w-full h-full flex  justify-center items-stretch flex-wrap overflow-y-scroll pb-10">
            {events?.map((event, i) => (
              <EventCard details={event} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
