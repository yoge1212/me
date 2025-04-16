import Image from "next/image";
import Link from 'next/link'


export default function Home() {
  return (
    <div className="flex flex-col mt-15 justify-start items-center min-h-screen  w-full">
       <div className="w-full max-w-screen-md mx-auto px-4">
    

        <nav className="flex gap-x-5 px-4 py-2 justify-start bg-[#414868]">

          <Link className="text-[#2ac3de] underline hover:font-semibold" href={`/`}>home</Link>
          <Link className="text-[#2ac3de] underline hover:font-semibold" href={`/blog`}>blog</Link>
          <Link className="text-[#2ac3de] underline hover:font-semibold" href={`/projects`}>projects</Link>
          </nav>

          


        <div className="flex flex-col sm:flex-row justify-around mt-15 gap-x-10 items-center space-y-7">
        <Image className="mx-auto" src="/pfp.png" alt="Photo" width={300} height={300} />
        

    
          <div>

          <h1 className="text-3xl text-[#f7768e]">yogesh</h1>
          <p className="text-sm text-[#ff9e64] font-extralight mt-6">new jersey</p>
          <p className="text-sm text-[#ff9e64] font-extralight mt-2">open to swe roles</p>
          <p className="text-sm text-[#cfc9c2] font-extralight mt-6">cs @ rutgers. i love building</p>
          </div>
          
      

        </div>
        <div className="sm:flex justify-center mt-8 ">

        <div className="px-4 flex flex-col  justify-start items-start  space-y-2 max-w-xs ">
        <h1 className="text-xl text-color-primary  ">work</h1>
        <a href="https://oss.rutgers.edu/" target="_blank" className="text-xl underline text-[#2ac3de]  hover:font-semibold text text-color-primary mt-4 ">OSS</a>
        <p className="font-light ">swe</p>
        <p className="font-light text-[#cfc9c2] ">building services for the rutgers community</p>
        
        </div>

        <div className="px-4 flex flex-col justify-start items-start max-w-xs  space-y-2 mt-15 sm:mt-0">
        <h1 className="text-xl text-color-primary">projects</h1>
        <a href="https://devpost.com/software/clipped-jw0eai" target="_blank" className="text-xl underline text-[#2ac3de] hover:font-semibold  mt-4">Clipped</a>
        <p className="font-light text-[#cfc9c2] "> real-time video surveillance, which classifies individuals as suspicious or normal. </p>
        
        </div>

          
        </div>

       


      </div>
     
    </div>
  );
}
