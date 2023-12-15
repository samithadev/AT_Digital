import React from 'react'
import img from '../assets/hero.png'
import Button from '../layouts/Button'

function Hero() {
    return (
        <div>
            {/* Hero Image */}
            <div className='lg:h-[700px]'>
                <img className='w-full h-full object-cover' src={img} alt='img' />
            </div>

            <div className='md:relative pt-6 px-5 pb-8 md:px-10 lg:w-[622px] lg:h-[306px] lg:ml-[60px] xl:ml-[80px] lg:mt-[-346px] bg-gradient-to-r from-[#4DCA79] to-[#1CBDDD]'>
                <p className=' font-bold text-4xl md:text-5xl text-white'>We crush your competitors, goals, and sales records - without the B.S.</p>
                <div className='py-3'>
                    <Button title='Get free consultation' />
                </div>
            </div>

        </div>
    )
}

export default Hero