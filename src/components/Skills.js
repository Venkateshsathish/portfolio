import React from 'react'
import Html from '../asset/Html.png';
import Css from '../asset/Css.png';
import JavaScript from '../asset/js.png';
import ReactJs from '../asset/ReactJs.png';
import Github from '../asset/Github.png';
import TailwindCss from '../asset/tailwindCss.png'


const Skills = () => {
    const techs=[
        {
            id:1,
            src:Html,
            title:"Html",
            style:'shadow-orange-500'
        },
        {
            id:2,
            src:Css,
            title:"Css",
            style:'shadow-blue-500'
        },
        {
            id:3,
            src:JavaScript,
            title:"Javascript",
            style:'shadow-yellow-500'
        },        {
            id:4,
            src:TailwindCss,
            title:"TailwindCss",
            style:'shadow-sky-400'
        },
        {
            id:5,
            src:ReactJs,
            title:"ReactJs",
            style:'shadow-blue-600'
        },
        {
            id:6,
            src:Github,
            title:"Github",
            style:'shadow-gray-400'
        }
    ]
  return (
    <div name='Skill' className="bg-gradient-to-b from-gray-800 to-black w-full h-screen">

      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
           <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline' >Skills</p>
           <p className='py-6' >These are the technologies I've worked with</p>
        </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0 '>
                {
                    techs.map(({id,src,title,style})=>(
                        <div key={id} className= {`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style} `}>
                        <img src={src} alt='Html' className='w-20 mx-auto' /> 
                        <p className='mt-4'>{title}</p>
                    </div>
                    ))
                }
           
        </div>
      </div>

    </div>
  )
}

export default Skills;
