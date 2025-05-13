import React from 'react'
import * as motion from "motion/react-client"
import { FaAngleDoubleDown } from "react-icons/fa";

const Hero = () => {
  return (
    <div className='text-white'>
        <div className='Wrapper mb-[500px] flex flex-col items-center justify-center'>
            <motion.div className='mt-[100px]'
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 1,
                scale: { type: "spring", visualDuration: 1  , bounce: 0.2 },
            }}
            
            >
                <p className=' text-9xl font-bold bg-gradient-to-r from-[#e75e62] to-[#8a203e] inline-block text-transparent bg-clip-text'>CurrencyEx</p>
            {/* <div className='line h-[1px] bg-white/20 mt-[20px]'></div> */}
            </motion.div>
            <div className='mt-[20px]'>
                <FaAngleDoubleDown size={20} color='#e75e62' />
            </div>
        </div>
    </div>
    
  )
}

export default Hero