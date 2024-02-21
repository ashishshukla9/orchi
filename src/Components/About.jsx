import React from 'react'

const About = () => {
    return (
        <div className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounde-tr-3xl'>
            <h1 className='text-black font-["Neue Montreal"] text-[4vw] leading-[4.5vw] tracking-tight'>Ochi is a strategic partner for fast-grow­ing tech businesses that need to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great peo­ple.</h1>
            <div className='w-full flex gap-5 border-t-[1px] pt-10 border-[#a1b562] mt-20'>
                <div className='w-1/2'>
                    <h1 className='text-6xl text-black'>Our approach :</h1>
                    <button className='flex uppercase items-center uppercase gap-10 px-10 py-6 bg-zinc-900 rounded-full mt-10 text-white'>Read More
                        <div className='w-3 h-3 bg-zinc-100 rounded-full'></div>
                    </button>

                </div>
                <div className='w-1/2 h-[80vh] rounded-3xl bg-red-600'></div>
            </div>
        </div>
    )
}

export default About
