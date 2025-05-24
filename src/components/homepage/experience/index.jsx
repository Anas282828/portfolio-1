// @flow strict

import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
import GlowCard from "../../helper/glow-card";
import { experiences } from "/src/utils/data/experience";

function Experience() {
  return (
    <div id="experience" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
            Expériences
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      {/* Section Stages */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        {experiences.map((experience) => (
          <GlowCard key={experience.id} identifier={`experience-${experience.id}`}>
            <div className="p-3 relative">
              <Image
                src="/blur-23.svg"
                alt="Hero"
                width={1080}
                height={200}
                className="absolute bottom-0 opacity-80"
              />
              <div className="flex justify-center">
                <p className="text-xs sm:text-sm text-[#16f2b3]">
                  {experience.duration}
                </p>
              </div>
              <div className="flex items-center gap-x-8 px-3 py-5">
                <div className="text-violet-500 transition-all duration-300 hover:scale-125">
                  <BsPersonWorkspace size={56} />
                </div>
                <div>
                  <div className="flex items-center gap-x-8 px-5 py-1">
                    <div>
                      <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                        {experience.title}
                      </p>
                      <p className="text-sm sm:text-base">{experience.company}</p>
                    </div>
                    <div className="px-4 lg:px-8 py-3 lg:py-5 relative">
                      <div className="bg-white bg-opacity-80 rounded-lg p-2 shadow-[0_0_15px_rgba(255,255,255,0.6)]">
                        <img
                          src={experience.image}
                          alt={`${experience.title} image`}
                          className={`rounded-lg object-contain ${experience.id === 2 ? 'w-230 h-auto' : 'w-12 h-auto'
                            }`}
                        />
                      </div>
                    </div>
                  </div>
                  <p className="mt-4">
                    <span className="text-cyan-400">{' ' + experience.description}</span>
                  </p>
                </div>
              </div>
            </div>
          </GlowCard>
        ))}
      </div>
    </div>
  );
}

export default Experience;