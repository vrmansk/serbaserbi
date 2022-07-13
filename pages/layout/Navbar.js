import React from 'react'
import Link from 'next/link'

export const Navbar = () => {
    return (
        <div className='flex h-[96px] w-full py-[20px] px-[120px]'>
            <div className=' lg:flex lg:flex-row lg:text-center lg:w-[138px] lg:h-[53px] gap-[16px] p-0'>
                <button className='py-[2px] px-[12px] w-[54px] h-[53px] text-center bg-[#F67704] rounded-[16px] text-white text-4xl'>S</button>
                <div className='w-[68px] h-[28px]'>
                    <h2 className='text-[#F67704] text-[20px] font-semibold' >Serba</h2>
                    <h2 className='text-[#F67704] text-[20px] font-semibold'>Serbi</h2>
                </div>
            </div>
            <div className='mx-auto w-[219px] h-[56px]'>
                <ul className='flex h-[56px] gap-[24px] justify-between'>
                    <li className=' h-[56px] px-[20px] py-[12px] bg-white'>
                        <Link href="/">
                            <a className='font-[400] text-[#868686] text-[18px] focus:font-[600]  focus:text-[#F67704] hover:font-[600] hover:text-[#F67704]'>Home</a>
                        </Link>
                    </li>
                    <li className=' h-[56px] px-[20px] py-[12px]  bg-white'>
                        <Link href="/">
                            <a className='font-[400] text-[#868686] text-[18px] focus:font-[600] focus:text-[#F67704] hover:font-[600] hover:text-[#F67704]'>Article</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div >
    )
}
