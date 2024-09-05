import React from 'react';
import Hull from '../asset/Hullu.png';
import Weather from '../asset/Weather.png';
import TodoList from '../asset/TodoList.png'
import Amazon from '../asset/amazon.png';
import Quziapp from '../asset/Quziapp.png'

const Portfolio = () => {
  const portfolios =[
    {
      id:1,
      src:Hull,
    },
    {
      id:2,
      src:Weather
    },
    {
      id:3,
      src:TodoList
    },
    {
      id:4,
      src:Amazon
    },
    {
      id:5,
      src:Quziapp
    }
  ]
  return (
    <div name="Portfolio"  className='bg-gradient-to-b from-black to-gray-800 w-full text-white mb:h-screen '>
      
       <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full' >

        <div className='pb-8 mt-20'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'
          >Portfolio</p>
          <p className='py-6'>
            Check out some of my work right here</p>
        </div>
         
        <div  className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
        {
          portfolios.map(({id, src})=>( 

          <div key={id}className='shadow-md shadow-gray-600 rounded-lg' >
          <img src={src} alt='Hull' className='rounded-md duration-200 hover:scale-105 '/>
        <div className='flex items-center justify-center' >
          <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105' >Demo</button>
          <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
        </div>
        </div>
          ))
        }
        </div>
       </div>
    </div>
  )
}

export default Portfolio
