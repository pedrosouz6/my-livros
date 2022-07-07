import { useEffect, useState } from 'react';
import Head from 'next/head'
import { parseCookies } from 'nookies';
import { JwtPayload, verify } from 'jsonwebtoken';

import { instance } from '../config/axios';
import { config } from '../config/jwt';

import { Navbar } from '../components/Navbar';
import { MyBooksSectionsCards } from '../components/MyBooks/Sections/Cards';
import { MyBooksSearch } from '../components/MyBooks/Search';
import { MyBooksSectionsFilter } from '../components/MyBooks/Sections/Filter';
import { MyBooksSectionsInitial } from '../components/MyBooks/Sections/Initial';
import { MyBooksSectionsNoSection } from '../components/MyBooks/Sections/NoSection';

import { Container } from '../styles/style';

interface RespostType {
  error: boolean,
  message: string,
  results: []
}

interface HomeProps {
  datas: RespostType
}

interface ItemType {
  name_section: string,
  id_section: number
}

export default function Home({ datas }: HomeProps) {

  const [ isNoSection, setIsNoSection ] = useState(false);

  const [ loopNoSection, setLoopNoSection ] = useState<boolean>(false);

  useEffect(() => {
    const { ['no-section']: noSection } = parseCookies(null);

    if(noSection) {
      return setIsNoSection(true);
    }

    return setIsNoSection(false);

  }, [loopNoSection])

  function handleLoopNoSection() {
    setLoopNoSection(!loopNoSection);
  }

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet"></link>
      </Head>

      <Navbar />

      <Container>
        <MyBooksSearch />
        <MyBooksSectionsFilter />
        
        {
          isNoSection ? 
          <MyBooksSectionsNoSection handleLoopNoSection={handleLoopNoSection} /> :

          datas.results.length === 0 ? 

          <MyBooksSectionsInitial handleLoopNoSection={handleLoopNoSection} /> :

          datas.results.map((item: ItemType, key) => (
            <MyBooksSectionsCards keyId={key} datas={item} />
          ))
        }

      </Container>
    </div>
  )
}


export async function getServerSideProps(ctx: any) {

  const { ['token_user']: token } = parseCookies(ctx);

  if(token) {
    try {
      const { id } = verify(token, config.secret) as JwtPayload;

      const response = await instance.post('/getSection', { id_user: id });
      const respost: RespostType = await response.data;
      
      return {
        props: {
          datas: respost
        }
      }

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