"use client"
import React from 'react'
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'


function Carousel() {
    const slides = [
        {url: '/Welcome.PNG'},
        {url: '/Quote2.PNG'},
        {url: '/Quote1.PNG'},
        {url: '/Stat1.PNG'},
    ]

    const [currentIndex, setCurrentIndex] = React.useState(0)

    const prevSlide = () => currentIndex > 0? setCurrentIndex(currentIndex -1): setCurrentIndex(slides.length-1)
    const nextSlide = () => currentIndex < slides.length-1? setCurrentIndex(currentIndex + 1): setCurrentIndex(0)
    
    

  return (
    <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group'>
        <div
            style={{backgroundImage: `url(${slides[currentIndex].url})`}}
            className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
            
        ></div>

        <div className='absolute top-[50%] -translate-x-[0] translate-y-[-50%] left-base text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>

        <div className='absolute top-[50%] -translate-x-[0] translate-y-[-50%] right-base text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactRight onClick={nextSlide}size={30} />
        </div>
        <div className='flex top-xxs justify-center py-xxs'>
            {slides.map((slide, slideIndex) => (
                <div
                    key={slideIndex}
                    onClick={()=> setCurrentIndex(slideIndex)}
                    className='text-2xl cursor-pointer'
                ><RxDotFilled/></div>
            ))}
        </div>
    </div>
  )
}

export default Carousel

