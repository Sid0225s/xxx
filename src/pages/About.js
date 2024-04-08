import React from "react";
// import logoTeam from "../assets/images/logo-team.png";
// import logoNimbus from "../assets/images/logo-nimbus.png";
import team1 from "../assets/About/DSC_0063.jpg";
import team2 from "../assets/About/5fed2aa5-137f-4182-b291-e558d1b8b638.JPG";
import team3 from "../assets/About/8f4d762b-7cf1-4a80-8e18-1b9e20c35214.JPG";
import team4 from "../assets/About/fce58be6-10e9-435e-b308-780ffc7620be.JPG";
import teamImage from "../assets/About/main-team-image.JPG";
import Div100vh from "react-div-100vh";

export default function About() {
  return (
    <div className="absolute top-0 left-0 w-full h-full text-white">
      <div className="relative w-full h-full overflow-hidden">
        <div className="w-full">
          <h1 className="text-4xl raleway tracking-wide font-semibold text-[#ffffff] bg-[#00000090] p-5 text-center rounded-md mb-5 h-[80px]">
            ABOUT US
          </h1>
          <img
            src={teamImage}
            className="w-[90%] rounded-md max-w-[800px] m-auto aspect-[1.78] my-10"
            alt="not found"
          />
        </div>
        <Div100vh className="pt-[100px] absolute top-0 left-0 w-full">
          <div className="w-full h-full 2md:pt-[510px] pt-[60%] overflow-y-scroll">
            <div className="bg-[#00000090] w-full pt-20 2xl:px-20 2md:px-10 px-5 pb-10">
              <div className=" md:flex justify-center items-stretch 2md:gap-10 gap-5 w-full">
                <div className="2md:min-w-[150px] md:min-w-[125px] h-full flex justify-center items-center md:flex-col md:gap-20 gap-10">
                  <img
                    src={team1}
                    alt=""
                    className="2md:w-[150px] md:w-[125px] w-[40%] max-w-[250px] aspect-square rotate-12 border-2 border-white border-dashed"
                  />
                  <img
                    src={team2}
                    alt=""
                    className="2md:w-[150px] md:w-[125px] w-[40%] max-w-[250px] aspect-square -rotate-12 border-2 border-white border-dashed"
                  />
                </div>
                <div className="w-full flex-shrink flex flex-col justify-start items-center gap-5 max-w-[800px] text-center md:my-0 my-16 2xl:text-2xl 2md:text-xl md:text-base sm:text-2xl xs2:text-xl">
                  <p>
                    Team MEDextrous represents Department of Mechanical
                    Engineering, NIT Hamirpur in NIMBUS, the college's annual
                    technical fest since 2010. Team MEDextrous does a
                    significant job in the NIMBUS. The team believes that
                    excellence is an art won by training and habituation.
                  </p>
                  <p>
                    MEDextrous has been organizing events that involve utilizing
                    the basics of engineering to make efficient use of available
                    resources. It provides a platform for brilliant minds to
                    exhibit their radical ideas.
                  </p>
                  <h4 className=" text-center">VISION</h4>{" "}
                  <p>
                    The capacity to learn is a gift; the ability to learn is a
                    skill; the willingness to learn is a choice, and when there
                    is a will, there is a way. We work to transform an
                    engineering concept into an engineering application.
                  </p>
                </div>
                <div className="2md:min-w-[150px] md:min-w-[125px] h-full flex justify-center items-center md:flex-col md:gap-20 gap-10">
                  <img
                    src={team3}
                    alt=""
                    className="2md:w-[150px] md:w-[125px] w-[40%] max-w-[250px] aspect-square -rotate-12 border-2 border-white border-dashed"
                  />
                  <img
                    src={team4}
                    alt=""
                    className="2md:w-[150px] md:w-[125px] w-[40%] max-w-[250px] aspect-square rotate-12 border-2 border-white border-dashed"
                  />
                </div>
              </div>
            </div>
            <div className="bg-[#00000090] w-full 2xl:px-20 2md:px-10 px-5 pt-10 pb-20">
              <div className="flex md:flex-row flex-col justify-center items-stretch 3md:gap-10 md:gap-5 gap-20 w-full">
                <div className="2md:min-w-[150px] md:min-w-[125px] h-full md:flex hidden justify-center items-center flex-col gap-20">
                  <img
                    src={team1}
                    alt=""
                    className="2md:w-[150px] md:w-[125px] w-[40%] max-w-[250px] aspect-square rotate-12 border-2 border-white border-dashed"
                  />
                  <img
                    src={team2}
                    alt=""
                    className="2md:w-[150px] md:w-[125px] w-[40%] max-w-[250px] aspect-square -rotate-12 border-2 border-white border-dashed"
                  />
                  <img
                    src={team1}
                    alt=""
                    className="2md:w-[150px] md:w-[125px] w-[40%] max-w-[250px] aspect-square rotate-12 border-2 border-white border-dashed"
                  />
                  <img
                    src={team2}
                    alt=""
                    className="2md:w-[150px] md:w-[125px] w-[40%] max-w-[250px] aspect-square -rotate-12 border-2 border-white border-dashed"
                  />
                </div>
                <div className="w-full flex-shrink md:max-w-[500px]">
                  <h2 className="3md:text-4xl text-2xl raleway tracking-wide font-semibold text-[#ffffff] lg:mb-20 mb-10 text-center rounded-md">
                    ACHIEVEMENTS
                  </h2>
                  <div className="xs2:flex justify-start items-center w-full max-w-[600px] md:max-w-[500px] m-auto flex-wrap text-black ">
                    <div className="xs2:w-1/2 w-[95%] xs2:m-0 m-auto p-3 border-l-4 border-l-[#FF5722] xs2:border-l-0 xs2:border-r-4 xs2:border-r-[#FF5722] relative bg-white xs2:rounded-tl-md xs2:rounded-bl-md xs2:-mr-1 xs2:text-right 3md:text-base text-sm xs2:mb-0 mb-1">
                      <h1 className="font-bold italic tracking-wide">
                        BEST PROJECT EXECUTION
                      </h1>
                      <h2 className="font-medium tracking-wide 3md:text-sm textxs">
                        NIMBUS 2023
                      </h2>
                      <div className="w-[10px] h-[10px] bg-[#FF5722] absolute top-[50%] translate-y-[-50%] xs2:right-[-7.5px] xs2:left-auto left-[-7.5px] rounded-full"></div>
                    </div>
                    <div className="xs2:block hidden w-1/2"></div>
                    <div className="xs2:block hidden w-1/2"></div>
                    <div className="xs2:w-1/2 w-[95%] xs2:m-0 m-auto p-3 border-l-4 border-l-[#FF5722] relative bg-white xs2:rounded-tr-md xs2:rounded-br-md xs2:-ml-1  3md:text-base text-sm xs2:mb-0 mb-1">
                      <h1 className="font-bold italic tracking-wide">
                        BEST PROJECT EXECUTION
                      </h1>
                      <h2 className="font-medium tracking-wide text-sm">
                        NIMBUS 2021
                      </h2>
                      <div className="w-[10px] h-[10px] bg-[#FF5722] absolute top-[50%] translate-y-[-50%] left-[-7.5px] rounded-full"></div>
                    </div>
                    <div className="xs2:w-1/2 w-[95%] xs2:m-0 m-auto p-3 border-l-4 border-l-[#FF5722] xs2:border-l-0 xs2:border-r-4 xs2:border-r-[#FF5722] relative bg-white xs2:rounded-tl-md xs2:rounded-bl-md xs2:-mr-1 xs2:text-right 3md:text-base text-sm xs2:mb-0 mb-1">
                      <h1 className="font-bold italic tracking-wide">
                        BEST EVENT AWARD
                      </h1>
                      <h2 className="font-medium tracking-wide 3md:text-sm textxs">
                        NIMBUS 2019
                      </h2>
                      <div className="w-[10px] h-[10px] bg-[#FF5722] absolute top-[50%] translate-y-[-50%] xs2:right-[-7.5px] xs2:left-auto left-[-7.5px] rounded-full"></div>
                    </div>
                    <div className="xs2:block hidden w-1/2"></div>
                    <div className="xs2:block hidden w-1/2"></div>
                    <div className="xs2:w-1/2 w-[95%] xs2:m-0 m-auto p-3 border-l-4 border-l-[#FF5722] relative bg-white xs2:rounded-tr-md xs2:rounded-br-md xs2:-ml-1  3md:text-base text-sm xs2:mb-0 mb-1">
                      <h1 className="font-bold italic tracking-wide">
                        BEST DEPARTMENTAL TEAM
                      </h1>
                      <h2 className="font-medium tracking-wide text-sm">
                        NIMBUS 2018
                      </h2>
                      <div className="w-[10px] h-[10px] bg-[#FF5722] absolute top-[50%] translate-y-[-50%] left-[-7.5px] rounded-full"></div>
                    </div>
                    <div className="xs2:w-1/2 w-[95%] xs2:m-0 m-auto p-3 border-l-4 border-l-[#FF5722] xs2:border-l-0 xs2:border-r-4 xs2:border-r-[#FF5722] relative bg-white xs2:rounded-tl-md xs2:rounded-bl-md xs2:-mr-1 xs2:text-right 3md:text-base text-sm xs2:mb-0 mb-1">
                      <h1 className="font-bold italic tracking-wide">
                        BEST EVENT AWARD
                      </h1>
                      <h2 className="font-medium tracking-wide 3md:text-sm textxs">
                        NIMBUS 2016
                      </h2>
                      <div className="w-[10px] h-[10px] bg-[#FF5722] absolute top-[50%] translate-y-[-50%] xs2:right-[-7.5px] xs2:left-auto left-[-7.5px] rounded-full"></div>
                    </div>
                    <div className="xs2:block hidden w-1/2"></div>
                    <div className="xs2:block hidden w-1/2"></div>
                    <div className="xs2:w-1/2 w-[95%] xs2:m-0 m-auto p-3 border-l-4 border-l-[#FF5722] relative bg-white xs2:rounded-tr-md xs2:rounded-br-md xs2:-ml-1  3md:text-base text-sm xs2:mb-0 mb-1">
                      <h1 className="font-bold italic tracking-wide">
                        BEST EVENT AWARD
                      </h1>
                      <h2 className="font-medium tracking-wide text-sm">
                        NIMBUS 2015
                      </h2>
                      <div className="w-[10px] h-[10px] bg-[#FF5722] absolute top-[50%] translate-y-[-50%] left-[-7.5px] rounded-full"></div>
                    </div>
                    <div className="xs2:w-1/2 w-[95%] xs2:m-0 m-auto p-3 border-l-4 border-l-[#FF5722] xs2:border-l-0 xs2:border-r-4 xs2:border-r-[#FF5722] relative bg-white xs2:rounded-tl-md xs2:rounded-bl-md xs2:-mr-1 xs2:text-right 3md:text-base text-sm xs2:mb-0 mb-1">
                      <h1 className="font-bold italic tracking-wide">
                        BEST EVENT AWARD
                      </h1>
                      <h2 className="font-medium tracking-wide 3md:text-sm textxs">
                        NIMBUS 2014
                      </h2>
                      <div className="w-[10px] h-[10px] bg-[#FF5722] absolute top-[50%] translate-y-[-50%] xs2:right-[-7.5px] xs2:left-auto left-[-7.5px] rounded-full"></div>
                    </div>
                    <div className="xs2:block hidden w-1/2"></div>
                    <div className="xs2:block hidden w-1/2"></div>
                    <div className="xs2:w-1/2 w-[95%] xs2:m-0 m-auto p-3 border-l-4 border-l-[#FF5722] relative bg-white xs2:rounded-tr-md xs2:rounded-br-md xs2:-ml-1  3md:text-base text-sm xs2:mb-0 mb-1">
                      <h1 className="font-bold italic tracking-wide">
                        BEST DEPARTMENTAL TEAM
                      </h1>
                      <h2 className="font-medium tracking-wide text-sm">
                        NIMBUS 2012
                      </h2>
                      <div className="w-[10px] h-[10px] bg-[#FF5722] absolute top-[50%] translate-y-[-50%] left-[-7.5px] rounded-full"></div>
                    </div>
                    <div className="xs2:w-1/2 w-[95%] xs2:m-0 m-auto p-3 border-l-4 border-l-[#FF5722] xs2:border-l-0 xs2:border-r-4 xs2:border-r-[#FF5722] relative bg-white xs2:rounded-tl-md xs2:rounded-bl-md xs2:-mr-1 xs2:text-right 3md:text-base text-sm xs2:mb-0 mb-1">
                      <h1 className="font-bold italic tracking-wide">
                        BEST DEPARTMENTAL TEAM
                      </h1>
                      <h2 className="font-medium tracking-wide 3md:text-sm textxs">
                        NIMBUS 2011
                      </h2>
                      <div className="w-[10px] h-[10px] bg-[#FF5722] absolute top-[50%] translate-y-[-50%] xs2:right-[-7.5px] xs2:left-auto left-[-7.5px] rounded-full"></div>
                    </div>
                    <div className="xs2:block hidden w-1/2"></div>
                    <div className="xs2:block hidden w-1/2"></div>
                    <div className="xs2:w-1/2 w-[95%] xs2:m-0 m-auto p-3 border-l-4 border-l-[#FF5722] relative bg-white xs2:rounded-tr-md xs2:rounded-br-md xs2:-ml-1  3md:text-base text-sm xs2:mb-0 mb-1">
                      <h1 className="font-bold italic tracking-wide">
                        BEST DEPARTMENTAL TEAM
                      </h1>
                      <h2 className="font-medium tracking-wide text-sm">
                        NIMBUS 2010
                      </h2>
                      <div className="w-[10px] h-[10px] bg-[#FF5722] absolute top-[50%] translate-y-[-50%] left-[-7.5px] rounded-full"></div>
                    </div>
                  </div>
                </div>
                <div className="2md:min-w-[150px] md:min-w-[125px] h-full flex justify-center items-center md:flex-col sm:gap-20 gap-10">
                  <img
                    src={team3}
                    alt=""
                    className="2md:w-[150px] md:w-[125px] w-[40%] max-w-[250px] aspect-square md:-rotate-12 border-2 border-white border-dashed"
                  />
                  <img
                    src={team4}
                    alt=""
                    className="2md:w-[150px] md:w-[125px] w-[40%] max-w-[250px] aspect-square md:rotate-12 border-2 border-white border-dashed"
                  />
                  <img
                    src={team3}
                    alt=""
                    className="2md:w-[150px] md:w-[125px] w-[40%] max-w-[250px] aspect-square -rotate-12 border-2 border-white border-dashed hidden md:block"
                  />
                  <img
                    src={team4}
                    alt=""
                    className="2md:w-[150px] md:w-[125px] w-[40%] max-w-[250px] aspect-square rotate-12 border-2 border-white border-dashed hidden md:block"
                  />
                </div>
              </div>
            </div>
          </div>
        </Div100vh>
      </div>
    </div>
  );
}
