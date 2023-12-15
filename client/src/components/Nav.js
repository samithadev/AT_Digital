import React, {useState} from 'react'

import logo from '../assets/logo.png'
import { FaBars, FaTimes } from 'react-icons/fa';

function Nav() {

    let Links =[
        {name:"SERVICES",link:"/"},
        {name:"ABOUT US",link:"/"},
        {name:"CONTACT US",link:"/"},
        {name:"CAREERS",link:"/"},
      ];

    let [open,setOpen]=useState(false);


  return (
    <div className='shadow-md sticky w-full'>
      <div className=' md:flex items-center justify-between bg-primary py-4 md:px-10 px-5 pt-6 xl:px-20 lg:px-[60px] h-20 '>
      
      <div>
      <img
          src={logo}
          alt="Logo"
          id="Logo"
          className='mt-[-11.11px]'
        />
      </div>
      
      <div onClick={()=>setOpen(!open)} className='text-3xl text-white absolute right-8 top-6 cursor-pointer md:hidden'>
      {open ? <FaTimes /> : <FaBars />}
      </div>

      <ul className={`bg-primary md:flex md:items-center md:pb-0 pb-12 absolute md:static  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
        {
          Links.map((link)=>(
            <li key={link.name} className='md:ml-7 text-xl md:my-0 my-7'>
              <a href={link.link} className='text-sm  font-medium text-white duration-500'>{link.name}</a>
            </li>
          ))
        }
      </ul>
      </div>
    </div>
  )
}

export default Nav