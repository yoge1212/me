import Image from "next/image";


export default function ProfileCard() {
    return (

        <div className="flex flex-col items-start justify-center sm:flex-row sm:justify-start mt-15 gap-x-10 sm:items-center space-y-7 px-4">
<Image src="/pfp.png" alt="Photo" width={300} height={300} />



  <div>

  <h1 className="text-3xl text-[#f7768e]">yogesh</h1>
  <p className="text-sm text-[#ff9e64] font-extralight mt-6">new jersey</p>
  <p className="text-sm text-[#ff9e64] font-extralight mt-2">open to swe roles</p>
  <p className="text-sm text-[#cfc9c2] font-extralight mt-6">cs @ rutgers. i love building</p>
  </div>
  


</div>

    );

}
