import React from 'react';
import { HERO_CONTENT } from '../constants/index.js';

const Hero = () => {
  return (
    <div className="pb-4 lg:mb-36">
        <div className="flex flex-wrap lg:flex-row-reverse">
          <div className="w-full lg:w-1/2">
            <div className="felx justify-center lg:p-8">
                <img 
                  src="profile.png" 
                  alt="sandun theekshana" 
                  className="border border-transparent object-cover rounded-2xl shodow-lg"/>
            </div>        
          </div>
          <div className="w-full lg:w-1/2">
           <div className="flex flex-col items-center lg:items-start mt-10">
             <h1 className="pb-2 text-4xl tracking-tighter lg:text-8xl">Sandun Theekshana</h1>
             <span className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent">Full Stack Web Developer</span>
             <p className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter">
                {HERO_CONTENT}
             </p>
             <a 
               href="/cv.pdf"
               target="_blank"
               rel="noopener noreferrer"
               download
               className="bg-white rounded-full p-4 text-sm text-stone-800 mb-10"  
             >
              Download Resume
             </a>
           </div>
          </div>
        </div>
    </div>
  )
}

export default Hero
