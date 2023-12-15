import React from 'react'
import logo from '../assets/logo.png'

function Footer() {
    return (
        <div>
            <div
                className="bg-primary flex flex-col gap-10 w-full px-5 mt-5 xl:px-20 lg:px-[60px] md:px-10 pt-10 pb-5 "
            >
                <div className="flex flex-col lg:flex-row justify-between gap-[60px] lg:gap-[112px]">
                    <div className="flex flex-col gap-5 items-start md:w-[413px]">
                        <img
                            src={logo}
                            alt="Logo"
                            id="Logo"
                        />
                        <p className=" text-white w-full">
                            Your goal is our target. Not anything in between. We use online
                            marketing platforms and tools to achieve single objective - your
                            business results.
                        </p>
                    </div>
                    <div className="flex flex-col md:flex-row gap-[79px] md:gap-5 xl:gap-[128px]">
                        <ul className="flex flex-col justify-between w-full h-48 items-start text-white cursor-pointer">
                            <li className="text-xl font-semibold ">Our Technologies</li>
                            <li className="text-sm font-medium  ">ReactJS</li>
                            <li className="text-sm font-medium  ">Gatsby</li>
                            <li className="text-sm font-medium  ">NextJS</li>
                            <li className="text-sm font-medium  ">NodeJS</li>
                            <li className="text-sm font-medium  ">GraphQL</li>
                            <li className="text-sm font-medium  ">Laravel</li>
                        </ul>


                        <ul class="flex flex-col justify-between w-full h-48 items-start text-white cursor-pointer">
                            <li class="text-xl font-semibold ">Our Services</li>
                            <li class="text-sm font-medium ">Social media Marketing</li>
                            <li class="text-sm font-medium ">Web & Mobile App Development</li>
                            <li class="text-sm font-medium ">Data & Analytics</li>
                            <li class="text-sm font-medium ">Google Marketing solutions</li>
                            <li class="text-sm font-medium ">Search Engine Optimization</li>
                        </ul>

                    </div>
                </div>
                <div className="flex flex-col gap-2  items-center">
                    <div id="Line" className="border-solid border-t border-white h-px lg:w-[630px] md:w-[630px] xl:w-[630px] w-[335px]" />
                    <div className="flex flex-row  gap-4 ">
                        <div className="text-sm font-medium capitalize text-white mr-px">
                            Privacy Policy
                        </div>
                        <div
                            id="Line1"
                            className="border-solid border-r border-white mt-0 w-px h-4"
                        />
                        <div className="text-sm font-medium capitalize text-white">
                            Terms & Conditions
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer