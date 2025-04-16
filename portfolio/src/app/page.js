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

          


        <div className="flex flex-col sm:flex-row justify-start mt-15 gap-x-10 items-center space-y-7">
        <Image className="mx-auto" src="/pfp.png" alt="Photo" width={300} height={300} />
        

    
          <div>

          <h1 className="text-3xl text-[#f7768e]">yogesh</h1>
          <p className="text-sm text-[#ff9e64] font-extralight mt-6">new jersey</p>
          <p className="text-sm text-[#ff9e64] font-extralight mt-2">open to swe roles</p>
          <p className="text-sm text-[#cfc9c2] font-extralight mt-6">cs @ rutgers. i love building</p>
          </div>
          
      

        </div>
        <div className="sm:flex justify-start mt-8 ">

        <div className="px-4 flex flex-col  justify-start items-start  space-y-2 max-w-xs ">
        <h1 className="text-xl text-color-primary text-[#b4f9f8] ">work</h1>
        <a href="https://oss.rutgers.edu/" target="_blank" className="text-xl underline text-[#2ac3de]  hover:font-semibold text text-color-primary mt-4 ">OSS</a>
        <p className="font-light text-[#7dcfff] ">swe</p>
        <p className="font-extralight text-xs text-[#7aa2f7] ">jan '25 - present</p>
        <p className="font-light text-[#cfc9c2] ">building services for the rutgers community.</p>
        
        </div>

        <div className="px-4 flex flex-col justify-start items-start max-w-xs  space-y-2 mt-15 sm:mt-0">
          <div className="flex flex-col space-y-2">

          <h1 className="text-xl text-color-primary text-[#b4f9f8]">projects</h1>
        <a href="https://devpost.com/software/clipped-jw0eai" target="_blank" className="text-xl underline text-[#2ac3de] hover:font-semibold  mt-4">Clipped</a>
        <p className="font-light text-[#cfc9c2] "> real-time video surveillance, which classifies individuals as suspicious or normal. </p>

          </div>

          <div className="flex flex-col space-y-2">

<a href="https://docs.google.com/presentation/d/1zclWjxfh8NonhQUE7Im0MuIkJXeEDAuvtMIPOwNVF44/edit?slide=id.ged3401ed36_1_0#slide=id.ged3401ed36_1_0" target="_blank" className="text-xl underline text-[#2ac3de] hover:font-semibold  mt-4">ScarletExchange</a>
<p className="font-light text-[#cfc9c2] "> a platform for rutgers students to buy and sell items.</p>

</div>
        
        
        </div>

          
        </div>
        <div className=" justify-center mt-15">
  <div className="px-4 flex flex-col justify-start items-start space-y-2 max-w-xs">
    <h1 className="text-xl text-color-primary text-[#b4f9f8]">recent posts</h1>
    <p className="font-light text-[#cfc9c2]">coming soon</p>
  </div>
  
</div>


       


       
        <footer className="flex gap-x-5 px-2 py-1 justify-start mt-30 mb-5 bg-[#414868]">

<a className="text-[#2ac3de] underline hover:font-semibold" target="_blank" href="https://github.com/yoge1212">github</a>
<a className="text-[#2ac3de] underline hover:font-semibold" target="_blank" href="https://www.linkedin.com/in/yogeshsampathkumar/">linkedin</a>

</footer>


      </div>
     
    </div>
  );
}
