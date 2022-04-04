import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Intro from '../components/Intro'
import Layout from '../components/Layou'
import ProjectSnippet from '../components/project_snippet'


const Home: NextPage = () => {
  return (
    <Layout>
    <div className='text-slate-700'>
    <Header/>
    <Intro/>
   <ProjectSnippet/>
    <Footer/>

    </div>
    </Layout>
  )
  
}

export default Home
