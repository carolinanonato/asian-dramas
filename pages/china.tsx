import type { NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Intro from '../components/Intro'
import Layout from '../components/Layout'
import ProjectSnippet from '../components/project_snippet'


const Japan: NextPage = () => {
  return (
   <div>
   <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. In veritatis qui voluptate, ex deleniti quod rerum beatae quibusdam, doloremque dicta, quaerat obcaecati? Recusandae tempore aliquid doloremque voluptatibus numquam officia ad.</div>
   <div className="mt-6">
   <Link href="/">
       <a href={"/"} className="font-bold underline hover:text-indigo-600">Back </a>
       </Link>
       </div>
   </div>
  )
  
}

export default Japan
