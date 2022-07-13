import axios from 'axios'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Footer } from '../layout/Footer'
import { Navbar } from '../layout/Navbar'

const detail = () => {
    const [article, setArticle] = useState([])
    const [similar, setSimilar] = useState([])
    const url = "https://newsapi.org/v2/everything?q=apple&from=2022-07-11&to=2022-07-11&sortBy=popularity&apiKey=123dd0355c9248f38bc0b0b4553edf21"

    useEffect(() => {
        const getArticle = async () => {
            const { data: res } = await axios.get(url)
            setArticle(res.articles[0])
            setSimilar(res.articles.splice(96, 2))
        }
        getArticle()
    })
    return (
        <>
            <Navbar />
            <div className=' w-10/12 mx-auto'>
                <h3 className='text-[#F67704] mt-10 text-lg'>Article<span className='text-[#868686]'> ▶ {article.title}</span></h3>
                <h1 className='font-semibold text-4xl my-2'>{article.title}</h1>
                <h3 className='text-[#868686] text-lg my-4'>dipost oleh{article.author} <span>{article.publishedAt}</span></h3>
                <div className='h-[511px]'>
                    <img className='rounded-lg overflow-hidden h-[511px] w-full' src={article.urlToImage} />
                </div>
                <p className='break-words my-2 text-[#4A4A4A] text-lg'>{article.description}</p>

                <p className='break-words my-2 text-[#4A4A4A] text-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                <div className='h-[511px]'>
                    <img className='rounded-lg overflow-hidden h-[511px] w-full' src={article.urlToImage} />
                </div>
                <p className='break-words my-2 text-[#4A4A4A] text-lg'>{article.content}</p>

                <p className='break-words my-2 text-[#4A4A4A] text-lg'>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                <h2 className='my-6'>Tag</h2>
                <div className='flex gap-10'>
                    <p>#ship</p>
                    <p>#shiping</p>
                    <p>#world</p>
                    <p>#business</p>
                </div>
                <h2 className='my-6'>Keyword</h2>
                <div className='flex gap-10'>
                    <p>ship</p>
                    <p>shape</p>
                    <p>priority</p>
                    <p>shiping</p>
                    <p>world</p>
                    <p>business</p>
                </div>
                <h1 className='text-4xl my-10 text-[#4A4A4A]'>Similar</h1>
                <div className='flex flex-wrap  gap-[92px] w-full mt-[60px] justify-between'>
                    {similar.map((data) => (
                        <div className=' w-[480px] h-[460px] rounded-lg overflow-hidden'>
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
            </div>

            <Footer />
        </>

    )
}

export default detail