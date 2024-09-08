import React from 'react'

function About() {
  return (
    <div name="About"
         className=" w-full  h-screen bg-gradient-to-b from-gray-800 to-black  text-white ">
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ' >

        <div className='pb-8 '>
            <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline' >About</p>
           </div>

        <p className='text-xl mt-15 '>I'm Venkatesh from chennai. I have a degree in B.Sc Electronics from St. John's College-Tirunelveli, I graduated with a percentage of 78% in the 2022 batch. My skillset primarily revolves around web development, and I have a good understanding of HTML, CSS, JavaScript, and React.js. I am excited about the opportunity to contribute to your team and grow as a developer.</p>
        
        <p className='text-xl'>
       As a fresher React frontend developer, you are just starting your career in web development with a focus on building user interfaces using the React library. React is a popular JavaScript library for creating interactive and dynamic user interfaces.


        </p>
        
        </div>
    </div>
  )
}

export default About