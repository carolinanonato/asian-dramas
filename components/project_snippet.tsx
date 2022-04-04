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
   <div className='flex gap-4'>
      <div className='relative w-32 h-18'> 
         <Image src={props.img} alt="japan" layout="fill"/>
         </div>
     <div className='my-auto'>
        <Link href={props.linkUrl}>
       <a href={"/"} className="font-bold underline hover:text-indigo-600">{props.title} </a>
       </Link>
      <div className="">{props.desc}</div>
      </div>
  
    </div>
   )
}

export default ProjectSnippet 