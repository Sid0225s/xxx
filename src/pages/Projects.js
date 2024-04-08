import React from "react";
import projectImage1 from "../assets/Projects/IMG-20240406-WA0001.jpg";
import projectImage2 from "../assets/Projects/IMG-20240406-WA0002.jpg";
import projectImage3 from "../assets/Projects/IMG-20240406-WA0003.jpg";
import projectImage5 from "../assets/Projects/IMG-20240406-WA0005.jpg";
import projectImage6 from "../assets/Projects/IMG-20240406-WA0006.jpg";
import projectImage8 from "../assets/Projects/IMG-20240406-WA0008.jpg";
import projectImage9 from "../assets/Projects/IMG-20240406-WA0009.jpg";
import projectImage10 from "../assets/Projects/IMG-20240406-WA0010.jpg";
import projectImage11 from "../assets/Projects/IMG-20240406-WA0011.jpg";
import projectImage12 from "../assets/Projects/IMG-20240406-WA0012.jpg";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const projects = [
    {
      img: projectImage1,
      title: "Flywheel Battery",
      students: ["Vansh Aggarwal"],
    },
    {
      img: projectImage2,
      title: "Maglev Wind Turbine",
      students: ["Harish Kumar"],
    },
    {
      img: projectImage3,
      title: "Automatc Dishwasher ",
      students: ["Asif Khan"],
    },

    {
      img: projectImage5,
      title: "Vortex Fire Extinguisher",
      students: ["Adityansh Thakur"],
    },
    {
      img: projectImage6,
      title: "Vertical take off and landing",
      students: ["Charu Chauhan"],
    },
    {
      img: projectImage8,
      title: "Vibration to Electrical Energy",
      students: ["Nishant Prakhar"],
    },
    {
      img: projectImage9,
      title: "Ozzy Aura (Ozone plasma sterilizer)",
      students: ["Saksham Sood"],
    },
    {
      img: projectImage10,
      title: "Autonomous Parking System",
      students: ["Saloni Sharma"],
    },
    {
      img: projectImage11,
      title:
        "Circulation Aid ( compression strokings with Integrated TENS/EMS Electrodes)",
      students: ["Saloni Sharma"],
    },
    {
      img: projectImage12,
      title: "EMALution (Electromagnetic Launcher)",
      students: ["Saksham Sood"],
    },
  ];
  return (
    <div className="absolute top-0 left-0 w-full h-full text-white">
      <div className="relative w-full h-full overflow-hidden flex flex-col">
        <h1 className="text-4xl raleway tracking-wide font-semibold text-[#ffffff] bg-[#00000090] p-5 text-center rounded-md mb-5 h-[80px]">
          PROJECTS
        </h1>
        <div className="h-full flex-shrink relative">
          <div className="absolute top-0 left-0 w-full h-full flex 2md:justify-start justify-center items-stretch flex-wrap overflow-y-scroll pb-10">
            {projects.map((project, i) => (
              <ProjectCard details={project} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
