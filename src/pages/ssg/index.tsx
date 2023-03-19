import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import axios from 'axios'
import {  GetStaticProps } from 'next'



export default function Home({data}:any)  {
  return (
    <>
      <Head>
        <title>Server Side Rendering</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>
          {data.datetime !== ''? `CSR (Server Side Rendering) - ${data.datetime}` : <p>SSR (Server Side Rendering) - Loading...</p>}
        </h1> 
      </main>
    </>
  )
}

export const getStaticProps:GetStaticProps = async () => {
  const res = await axios.get('https://worldtimeapi.org/api/ip').then(res => res)
  const data = await res.data
  return {
    props: {data}
  }
}