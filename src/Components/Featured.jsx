import { motion } from 'framer-motion'
import React, { useState } from 'react'

const Featured = () => {
    const [hovering, setHovering] = useState(false);


    return (
        <div className='w-full py-20'>
            <div className='w-full px-20 border-b-[1px] border-zinc-600 pb-20'>
                <h1 className='text-7xl font-["Neue Montreal"] tracking-tight'>Featured Projects</h1>

            </div>
            <div className='px-20'>
                <div className="cards w-full flex gap-20 mt-10">
                    <div onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)} className="cardcontainer relative w-1/2 h-[80vh] ">
                        <h1 className='absolute text-[#CDEA68] left-full flex -translate-x-1/2 top-1/2 overflow-hidden -translate-y-1/2 z-[9] font-["Neue Montreal"] text-8xl tracking leading-none absolute'>{"FYDE".split('').map((item, index) => <motion.span initial={{ y: "100%" }} animate={hovering ? { y: "0" } : { y: "100%" }} transition={{ ease: [0.22, 1, 0.36, 1], delay: index * .06 }} className='inline-block'>{item}</motion.span>)}</h1>
                        <div className='card w-full rounded-xl h-full bg-green-600 overflow-hidden'>
                            <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt='' />
                        </div>
                    </div>
                    <div className="cardcontainer relative w-1/2 h-[80vh] ">
                        <h1 className='absolute flex overflow-hidden text-[#CDEA68] right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] font-["Neue Montreal"] text-8xl tracking leading-none absolute'>{"VISE".split('').map((item, index) => <motion.span initial={{ y: "100%" }} animate={hovering ? { y: "0" } : { y: "100%" }} transition={{ ease: [0.22, 1, 0.36, 1], delay: index * .06 }} className='inline-block'>{item}</motion.span>)}</h1>
                        <div className='card w-full rounded-xl h-full bg-green-600 overflow-hidden'>
                            <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt='' />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Featured
