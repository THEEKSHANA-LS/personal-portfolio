import React from 'react';
import { FaFigma, FaGit, FaGitAlt, FaGithub, FaGitlab, FaJava, FaNodeJs } from 'react-icons/fa';
import { RiGift2Line, RiJavascriptLine, RiReactjsLine, RiTailwindCssFill } from 'react-icons/ri';
import { SiExpress, SiMongodb, SiPostman, SiVsco } from 'react-icons/si';

const Skills = () => {
  return (
    <div className="pb-24">
      <h1 className="my-20 text-center text-4xl">Skiils</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div>
          <RiReactjsLine className="text-7xl text-cyan-400"/>
        </div>
        <div className="p-4">
          <FaNodeJs className="text-7xl text-yellow-400"/>
        </div>
        <div className="p-4">
          <SiPostman className="text-6xl text-orange-500"/>
        </div>
        <div className="p-4">
          <SiMongodb className="text-6xl text-green-500"/>
        </div>
        <div className="p-4">
          <FaGitAlt className="text-7xl text-orange-600"/>
        </div>
        <div className="p-4">
          <FaFigma className="text-6xl"/>
        </div>
        <div className="p-4">
          <RiTailwindCssFill className="text-6xl text-cyan-600"/>
        </div>
      </div>
    </div>
  )
}

export default Skills;
