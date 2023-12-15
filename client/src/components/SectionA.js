import React from 'react'
import img from '../assets/web.png'
import Button from '../layouts/Button'

function SectionA() {
  return (
    <div>
        <div className='flex flex-col md:flex-row my-[60px] mx-[20px] md:mx-[40px] gap-5 lg:mx-[152px] xl:mx-[188px] xl:gap-[108px] lg:my-[80px]  justify-center items-center'>
            <div>
                <img className='w-[275px] lg:w-[346px] xl:w-[414px]' src={img} alt='web'/>
            </div>

            <div className='flex flex-col md:w-[393px] lg:w-[530px] md:text-start md:items-start gap-5 items-center text-center'>
                <h1 className='text-primary text-[27px] font-semibold leading-8'>Web & Mobile App Development</h1>
                <p className=' font-normal text-base leading-5 '>Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online.</p>
                <Button title="LEARN MORE"/>
            </div>
        </div>
    </div>
  )
}

export default SectionA