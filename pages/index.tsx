import { Box } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import SimpleThreeColumns from '../src/components/features'
import SmallCentered from '../src/components/footer'
import CallToActionWithAnnotation from '../src/components/hero'
import SplitWithImage from '../src/components/main'
import WithSubnavigation from '../src/components/nav'
import Partners from '../src/components/partners'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <>
      <WithSubnavigation />
      <CallToActionWithAnnotation />
      <SplitWithImage/>
      <SimpleThreeColumns />
      <Partners />
      
      <SmallCentered />
    </>
  )
}

export default Home
