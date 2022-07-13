import React from 'react'
import Link from 'next/link'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Image from 'next/dist/client/image'
import { Footer } from './Footer'
import { Navbar } from './Navbar'

const LandingPage = () => {

    const [article, setArticle] = useState([])
    const [filter, setFilter] = useState("")
    const url = "https://newsapi.org/v2/everything?q=apple&from=2022-07-11&to=2022-07-11&sortBy=popularity&apiKey=123dd0355c9248f38bc0b0b4553edf21"

    useEffect(() => {
        const getArticle = async () => {
            const { data: res } = await axios.get(url)
            setArticle(res.articles)
        }
        getArticle()
    })

    const handleChange = event => {
        setFilter(event.target.value);
    };

    return (
        <>

            <Navbar />
            <div>
                <div className='w-10/12 flex mt-[40px]  mx-[120px] gap-[220px] justify-between'>
                    <h1 className='text-[#F67704] font-[500] text-[48px]'>Article</h1>
                    <input className='border-2 mt-2 w-[380px] h-[56px]' type="text" placeholder='Cari' onChange={handleChange}></input>
                </div>
            </div>
            <div className='flex flex-wrap mx-[120px] gap-[92px] w-10/12 mt-[60px] justify-between'>
                {article.map((data) => (

                    <div className=' w-[510px] h-[460px] rounded-lg overflow-hidden'>
                        <img src={data.urlToImage} className='h-[200px] w-full rounded-xl' />
                        <div className=' w-11/12'>
                            <h1 className='text-[#4A4A4A] mt-2 font-semibold text-2xl break-words'>{data.title}</h1>
                            <p className='my-1 text-[#868686] font-[400] text-[18px] '>{data.publishedAt}</p>

                            <p className='my-2 text-[#868686] whitespace-normal break-words'>{data.description}</p>
                            <Link href="/detail">
                                <a className='text-[#F67704] mt-4'>Read more</a>
                            </Link>

                        </div>
                    </div>

                ))}


            </div>




            <Footer />
        </>

    )
}

export default LandingPage