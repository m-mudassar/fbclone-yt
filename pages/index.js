import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import { getSession } from 'next-auth/react'
import Login from '../components/Login'
import Sidebar from '../components/Sidebar'
import Feed from '../components/Feed'

export default function Home({ session }) {
  if(!session) return <Login />
  return (
    <div>
      <Head>
        <title>Facebook</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />

      <main className='flex'>
        <Sidebar />
        <Feed />
        {/* Widgets */}
      </main>
    </div>
  )
}

export async function getServerSideProps(context){
  // Get the user
  const session = await getSession(context);

  return{
    props: {
      session,
    }
  }
}