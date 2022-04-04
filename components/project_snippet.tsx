import Image from 'next/image'


const ProjectSnippet = () => {
   const title: string = "Japan";
   const desc: string = "Nihongo Wakarimasu? The best selection of Japanese doramas."


   return ( 
   <div className='flex gap-4'>
      <div className='relative w-32 h-18'> 
         <Image src={"/japan.jpg"} layout="fill"/>
         </div>
     <div className='my-auto'>
       <a href={"/"} className="font-bold underline hover:text-indigo-600">{title} </a>
      <div className="">{desc}</div>
      </div>
  
    </div>
   )
}

export default ProjectSnippet 