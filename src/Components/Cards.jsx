import React from 'react'

const Cards = () => {
    return (
        <div className='w-full h-screen bg-zinc-100 flex items-center px-32 gap-5'>
            <div className='cardcontainer h-[50vh] w-1/2'>
                <div className='card relative rounded-xl flex items-center justify-center w-full h-full bg-[#004D43]'>
                    <img className='w-32' src='https://ochi.design/wp-content/uploads/2022/04/logo001.svg' />
                    <button className='absolute px-5 py-1 border-2 bottom-10 rounded-full left-10 '>&copy; 2019-2024</button>
                </div>
            </div>
            <div className='cardcontainer flex gap-5 h-[50vh] w-1/2'>
                <div className='card relative w-1/2 rounded-xl flex items-center justify-center h-full bg-[#192826]'>
                    <img className='w-32' src='https://ochi.design/wp-content/uploads/2022/04/logo002.svg' />
                    <button className='absolute px-5 py-1 border-2 bottom-10 rounded-full left-10 '>Rating 5.0 on Clutch</button>
                </div>
                <div className='card relative w-1/2 h-full flex items-center justify-center rounded-xl bg-[#192826]'>
                    <img className='w-32' src='https://ochi.design/wp-content/uploads/2022/04/logo003.png' />
                    <button className='absolute px-5 py-1 border-2 bottom-10 rounded-full left-10 '>Business Bootcamp Alumni</button>
                </div>
            </div>
        </div>
    )
}

export default Cards
