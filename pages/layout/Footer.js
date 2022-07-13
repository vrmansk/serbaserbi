import React from 'react'
import Link from 'next/link'
export const Footer = () => {
    return (
        <>
            <div className='flex py-12 mt-14 gap-16 h-[200px]  w-full px-[120px]'>
                <div className=' flex gap-x-[16px]  h-[53px] ' >
                    <button className='py-[2px] px-[12px] w-[54px] h-[53px] text-center bg-[#F67704] rounded-[16px] text-white text-4xl'>S</button>
                    <h2 className='text-[#F67704] mt-3 text-[20px] font-semibold' >SerbaSerbi</h2>
                </div>
                <div className='flex gap-12 h-[103px]'>
                    <div>
                        <h1 className='font-semibold'>Menu</h1>
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </div>
                    <div className='flex flex-col'>
                        <h1 className='font-semibold'>Bantuan</h1>
                        <a>Pusat Bantuan</a>
                        <a>Privacy Policy</a>
                    </div>
                </div>
            </div >
            <div className='w-10/12 border-t-2 h-20 mx-auto mt-0'>
                <div className='py-4 flex justify-between mx-140'>
                    <h1>© 2022 Sislog. All Rights Reserved. </h1>
                    <div className='flex'>
                        <div>logo1</div>
                        <div>logo2</div>
                        <div>logo3</div>
                    </div>
                </div>
            </div>
        </>

    )
}
