/* eslint-disable @next/next/link-passhref */
import Link from 'next/link'
import Image from 'next/image'

export interface ProjectSnippetInterface {
   title: string;
   desc: string;
   linkUrl: string;
   img: string;

}

const ProjectSnippet = (props: ProjectSnippetInterface) => {

   return ( 
   <div className='flex gap-4 bg-slate-100'>
      <div className='relative w-32 h-18'> 
      <Link href={props.linkUrl}>
      <Image className="w-32 h-18 cursor-pointer" src={props.img} alt="japan" layout="fill"/>
       </Link> 
         </div>
     <div className='w-72'>
        <Link href={props.linkUrl}>
       <a href={"/"} className="font-bold underline hover:text-indigo-600">{props.title} </a>
       </Link>
      <div className="p-1">{props.desc}</div>
      </div>
  
    </div>
   )
}

export default ProjectSnippet 