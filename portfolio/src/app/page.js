import Image from "next/image";
import Link from 'next/link'


export default function Home() {
  return (
    <div className="flex flex-col mt-15 justify-start items-center min-h-screen  w-full">
       <div className="w-full max-w-screen-md mx-auto px-4">
    

        <nav className="flex gap-x-5 px-4 py-2 justify-start bg-black">

          <Link className="underline hover:font-semibold" href={`/`}>home</Link>
          <Link className="underline hover:font-semibold" href={`/blog`}>blog</Link>
          <Link className="underline hover:font-semibold" href={`/projects`}>projects</Link>
          </nav>

          


        <div className="flex flex-col sm:flex-row justify-around mt-15 gap-x-10 items-center space-y-7">
        <Image src="/pfp.png" alt="Photo" width={300} height={300} />
        

    
          <div>

          <h1 className="text-3xl text-color-primary">yogesh</h1>
          <p className="text-sm font-extralight mt-6">new jersey</p>
          <p className="text-sm font-extralight mt-2">open to swe roles</p>
          <p className="text-sm font-extralight mt-6">cs @ rutgers. i love building</p>
          </div>
      

        </div>

        <div>
        <h1 className="text-xl text-color-primary">Work</h1>
        </div>


      </div>
     
    </div>
  );
}
