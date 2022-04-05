import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'


const Japan: NextPage = () => {
  return (
   <div className='w-auto'>
   <div className="text-2xl text-violet-900 text-center font-bold mb-3">South Korea </div>
 {/* ******** */}

 <div className='flex flex-col gap-2'>

      <div className='relative w-80 h-52 '> 
   
           <Image src='/crashlandingonyou.png' alt="japan" layout="fill"/>
         
             </div>
             <div className=' text-violet-900 font-bold justify-center items-center uppercase mb-8'>Crash Landing on You</div>
        
             <div className='relative  w-80 h-52'> 
          
           <Image src='/itaewon.png' alt="japan" layout="fill"/>
           
             </div>
             <div className=' text-violet-900 font-bold uppercase mb-8'>Itaewon Class</div>
        
             <div className='relative  w-80 h-52'> 
           <Image src='/oknot.png' alt="japan" layout="fill"/>
        
             </div>
             <div className=' text-violet-900 font-bold uppercase mb-8'>It’s Okay to Not Be Okay</div>
             <div className='relative  w-80 h-52'> 
           <Image src='/startup.png' alt="japan" layout="fill"/>
        
             </div>
             <div className=' text-violet-900 font-bold uppercase mb-8'>Start-Up</div>

             <div className='relative  w-80 h-52'> 
           <Image src='/100days.png' alt="japan" layout="fill"/>
        
             </div>
             <div className=' text-violet-900 font-bold uppercase mb-8'>100 Days My Prince
</div>
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
