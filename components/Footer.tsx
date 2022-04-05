import Image from 'next/image'

const Footer = () => {
   return ( <div className="text-center border-t border-slate-300 p-4 text-slate-400">
        <div>Created by <a className='underline' href="https://www.carolinanonato.ca" target="_blank" rel="noreferrer">Carolina Nonato</a></div>
        <div className="flex justify-center gap-3">
   <a href="https://github.com/carolinanonato" target="_blank" rel="noreferrer"><img src="/github.png" alt="" /></a>
   <a href="https://www.linkedin.com/in/carolina-nonato/" target="_blank" rel="noreferrer"><img src="/linkedin.png" alt="" /></a>
   <a href="https://twitter.com/Carolthedev" target="_blank" rel="noreferrer"><img src="/twitter.png" alt="" /></a>
 
                    </div>
    </div>
   )
}

export default Footer