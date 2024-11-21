/* eslint-disable react/no-unescaped-entities */
import React from "react";

const Skills: React.FC = () => {
  const techSkills = [
    { name: "JavaScript", level: 90 },
    { name: "React.js", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "MongoDB", level: 75 },
    { name: "HTML & CSS", level: 95 },
  ];

  const softSkills = [
    { name: "Problem-Solving", level: 85 },
    { name: "Communication", level: 80 },
    { name: "Teamwork", level: 90 },
    { name: "Adaptability", level: 75 },
    { name: "Time Management", level: 85 },
  ];

  const renderSkills = (skills: { name: string; level: number }[]) =>
    skills.map((skill, index) => (
      <div key={index} className="mb-6">
        <p className="text-lg font-semibold text-[#e3e2fd]">{skill.name}</p>
        <div className="relative h-4 bg-[#5e0a99] rounded-lg overflow-hidden">
          <div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#ff4c30] to-[#f97a61]"
            style={{ width: `${skill.level}%` }}
          ></div>
        </div>
        <p className="text-right text-sm text-[#9d98f0] mt-1">{skill.level}%</p>
      </div>
    ));

  return (
    <section className="relative bg-gradient-to-br from-[#05021d] to-[#5e0a99] text-[#e3e2fd] py-20 px-8 rounded-xl my-5">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Technical Skills */}
        <div>
          <h2 className="text-4xl font-bold mb-6 text-[#9d98f0]">
            Technical Skills
          </h2>
          <div>{renderSkills(techSkills)}</div>
        </div>

        {/* Soft Skills */}
        <div>
          <h2 className="text-4xl font-bold mb-6 text-[#9d98f0]">
            Soft Skills
          </h2>
          <div>{renderSkills(softSkills)}</div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
