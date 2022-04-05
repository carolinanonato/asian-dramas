import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'


const Japan: NextPage = () => {
  return (
   <div className='w-auto'>
   <div className="text-2xl text-violet-900 text-center font-bold mb-3">China</div>
 {/* ******** */}

 <div className='flex flex-col gap-2 '>

      <div className='relative w-80 h-52 '> 
   
           <Image src='/wordofhonor.png' alt="japan" layout="fill"/>
         
             </div>
             <div className=' text-violet-900 font-bold uppercase mb-8 '>word of honor</div>
                      
             <div className='relative  w-80 h-52'> 
          
           <Image src='/theuntamed.png' alt="japan" layout="fill"/>
           
             </div>
             <div className=' text-violet-900 font-bold uppercase mb-8'>The Untamed</div>
        
             <div className='relative  w-80 h-52'> 
           <Image src='/meteorgarden.png' alt="japan" layout="fill"/>
        
             </div>
             <div className=' text-violet-900 font-bold uppercase mb-8'>Meteor Garden</div>
             <div className='relative  w-80 h-52'> 
           <Image src='/ashesoflove.png' alt="japan" layout="fill"/>
        
             </div>
             <div className=' text-violet-900 font-bold uppercase mb-8'>Ashes of Love</div>

             <div className='relative  w-80 h-52'> 
           <Image src='/kingsavatar.png' alt="japan" layout="fill"/>
        
             </div>
             <div className=' text-violet-900 font-bold uppercase mb-8'>The Kings Avatar</div>
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
