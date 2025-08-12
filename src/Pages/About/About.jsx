import React from 'react'
import profile from '../../assets/profile.png';

const About = () => {
  return (
    <section id="about">
      <div className="py-24 mt-10 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2">
        <h2 className="text-4xl font-bold text-center text-white">ABOUT ME</h2>
           <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-x-16 lg:gap-x-32 m-4 md:m-8">
             <div className="flex-shrink-0 flex justify-center items-center mb-8 md:mb-0">
               <img 
                 src={profile} 
                 className="w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 object-cover rounded-full shadow-lg border-4 border-purple-600" 
                 alt="Profile" 
               />
             </div>
             <div className="max-w-xl text-center md:text-left">
               <p className="text-gray-400 mt-4 text-base sm:text-lg md:text-xl font-semibold">
                 I am a passionate developer with a love for creating dynamic and engaging web applications. My journey in tech has been fueled by curiosity and a desire to solve real-world problems. I specialize in the MERN stack, crafting seamless user experiences and efficient solutions. With a keen eye for detail and a commitment to continuous learning, I strive to stay at the forefront of web development trends and technologies.
               </p>
             </div>
           </div>
      </div>
    </section>
  )
}

export default About;