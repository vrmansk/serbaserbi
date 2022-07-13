import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Footer } from './layout/Footer'
import LandingPage from './layout/LandingPage'
import { Navbar } from './layout/Navbar'

export default function Home() {
  return (
    <h1 className="">
      <LandingPage />
    </h1>
  )
}
