import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'


const Japan: NextPage = () => {
  return (
   <div className='w-auto'>
   <div className="text-2xl text-violet-900 text-center font-bold mb-3">Japan</div>
 {/* ******** */}

 <div className='flex flex-col gap-2 '>

      <div className='relative w-80 h-52 '> 
   
           <Image src='/midnightdiner.png' alt="japan" layout="fill"/>
         
             </div>
             <div className=' text-violet-900 font-bold uppercase mb-8 '>Midnight Dinner</div>
                      
             <div className='relative  w-80 h-52'> 
          
           <Image src='/atelier2.png' alt="japan" layout="fill"/>
           
             </div>
             <div className=' text-violet-900 font-bold uppercase mb-8'>Atelier</div>
        
             <div className='relative  w-80 h-52'> 
           <Image src='/erased.png' alt="japan" layout="fill"/>
        
             </div>
             <div className=' text-violet-900 font-bold uppercase mb-8'>Erased</div>
             <div className='relative  w-80 h-52'> 
           <Image src='/samuraigourmet.jpg' alt="japan" layout="fill"/>
        
             </div>
             <div className=' text-violet-900 font-bold uppercase mb-8'>Samurai Gourmet</div>

             <div className='relative  w-80 h-52'> 
           <Image src='/followers.jpg' alt="japan" layout="fill"/>
        
             </div>
             <div className=' text-violet-900 font-bold uppercase mb-8'>Followers</div>
       </div>
    <div className='flex justify-between	 '>
          
             </div>
      
    
   

 {/* *********   */}



   <div className="mt-6">
   <Link href="/">
       <a href={"/"} className="font-bold underline hover:text-indigo-600">Back </a>
       </Link>
       </div>
   </div>
  )
  
}

export default Japan
