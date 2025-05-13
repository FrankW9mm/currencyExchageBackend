import React from 'react'

const NavBar = () => {
  return (
    <div className='flex justify-center mt-[30px] items-center'>
        <div className='interItemHolder lg:mx-[100px] md:mx-[50px] mx-[20px]  items-center justify-between gap-2 w-[1200px] flex mx-w-2xl py-3 px-3 border border-white/15 rounded-2xl '>
            <p className='text-lg font-bold bg-gradient-to-r from-[#e75e62] to-[#8a203e] inline-block text-transparent bg-clip-text'>CurrencyEx</p>
            <div className=' hidden md:flex flex-row gap-[30px]'>
                <a href="" className='text-white hover:text-white/20 transition'>About</a>
                <a href="" className='text-white hover:text-white/20 transition'>Features</a>
                <a href="" className='text-white hover:text-white/20 transition'>Docs</a>
                <a href="" className='text-white hover:text-white/20 transition'>Examples</a>
            </div>
            <button className=" relative py-2 px-3 rounded-lg font-medium text-sm bg-gradient-to-b from-[#e75e62] to-[#8a203e] shadow-[0px_0px_12px_#8a203e]">
            <div className=" absolute inset-0 ">
              <div className="border rounded-lg border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
              <div className="border rounded-lg absolute inset-0 border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]"></div>
              <div className="absolute inset-0 shadow-[0_0_10px_rgb(138,32,62,.7)_inset] rounded-lg"></div>
            </div>
            <span className='text-white'>Get Started now</span>
            </button>
            {/* <button className='text-white border rounded-lg p-[10px] border-white/15'>Get Started Now</button> */}
        </div>
    </div>
  )
}

export default NavBar