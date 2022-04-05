/* eslint-disable @next/next/link-passhref */
import Link from "next/link"

const Header = () => {
   // eslint-disable-next-line react/jsx-no-comment-textnodes
   return ( <div className="text-center border-b border-slate-300 p-4">
      
       <Link href="/"><div className="text-3xl font-bold cursor-pointer"> Asian Dramas </div></Link>
    <div className="text-gray-500 text-xl" >Tv Series</div>
    </div>
   )
}

export default Header
