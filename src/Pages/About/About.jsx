import React from 'react'
import profile from '../../assets/profile.png';

const About = () => {
  return (
    <section id="about">
      <div className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2">
        <h2 className="text-4xl font-bold text-center text-white">ABOUT ME</h2>
        <div className='flex justify-center items-center gap-x-20 my-8'>
          <img className="w-72 h-72 object-cover" src={profile} alt="profile"></img>
          <div>
            <p className="text-gray-400 mt-4 text-lg font-semibold">
              I am a passionate developer with a love for creating dynamic and
              engaging web applications. My journey in tech has been fueled by
              curiosity and a desire to solve real-world problems.  I specialize
              in the MERN stack, crafting seamless user experiences and efficient solutions.
              With a keen eye for detail and a commitment to continuous learning,
              I strive to stay at the forefront of web development trends and technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;