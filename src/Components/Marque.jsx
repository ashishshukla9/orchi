import { motion } from 'framer-motion'
import React from 'react'

const Marque = () => {
    return (
        <div data-scroll data-scroll-speed=".1" className='w-full rounded-tl-3xl rounded-tr-3xl py-20 bg-[#004D43]'>
            <div className='text border-t-2 border-b-2 border-zinc-300 flex  whitespace-nowrap overflow-hidden'>
                <motion.h1 initial={{ x: "0" }} animate={{ x: "-100%" }} transition={{ ease: "linear", repeat: Infinity, duration: 10 }} className='text-[15vw] leading-none font-["Neue Montreal"] font-semibold uppercase pr-20 -mt-10 pt-5'>We are Ochi</motion.h1>
                <motion.h1 initial={{ x: "0" }} animate={{ x: "-100%" }} transition={{ ease: "linear", repeat: Infinity, duration: 10 }} className='text-[15vw] leading-none font-["Neue Montreal"] font-semibold uppercase pr-20 -mt-10 pt-5'>We are Ochi</motion.h1>
                
            </div>
        </div>
    )
}

export default Marque
