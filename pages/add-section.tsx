import { verify } from 'jsonwebtoken'
import type { NextPage } from 'next'
import Head from 'next/head'
import { parseCookies } from 'nookies'

import { config } from '../config/jwt'

import { MyBooksAddSections } from '../components/MyBooks/AddSection'
import { Navbar } from '../components/Navbar'

const PageAddSection: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Adicionar seção - MyLivros</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href='/favicon.png' />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet"></link>
      </Head>

      <Navbar />
      <MyBooksAddSections />
    </div>
  )
}

export default PageAddSection

export function getServerSideProps(ctx: any) {

  const { ['token_user']: token } = parseCookies(ctx);

  if(token) {
    try {
      verify(token, config.secret);
      
    } catch(error) {
      return {
        redirect: {
          destination: '/login',
          permanent: false
        }
      }
    }
  }

  if(!token) {
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    }
  }

  return {
    props: {}
  }
}