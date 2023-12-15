import React from 'react'
import img from '../assets/search.png'
import Button from '../layouts/Button'

function SectionB() {
    return (

        <div>
            <div className='flex flex-col md:flex-row my-[60px] mx-[20px] md:mx-[40px] gap-5 lg:mx-[152px] xl:mx-[188px] xl:gap-[108px] lg:my-[80px] justify-center items-center '>

                <div className='flex flex-col md:w-[393px] lg:w-[530px] md:text-start md:items-start gap-5 items-center text-center order-2 md:order-1'>
                    <h1 className='text-primary text-[27px] font-semibold leading-8'>Digital Strategy Consulting</h1>
                    <p className=' font-normal text-base leading-5 '>Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business.</p>
                    <Button title="LEARN MORE" />
                </div>

                <div className='order-1 md:order-2'>
                    <img className='w-[275px] lg:w-[346px] xl:w-[414px]' src={img} alt='web' />
                </div>

            </div>
        </div>
    )
}

export default SectionB