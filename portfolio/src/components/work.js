export default function WorkHistory() {
  return (
    <div className=" flex flex-col  justify-start items-start  space-y-2 max-w-xs ">
      <h1 className="text-xl  text-[#b4f9f8] ">work</h1>
      <a
        href="https://oss.rutgers.edu/"
        target="_blank"
        className="text-xl underline text-[#2ac3de]  hover:font-semibold text  mt-4 "
      >
        OSS
      </a>
      <p className="font-light text-[#7dcfff] ">swe</p>
      <p className="font-extralight text-xs text-[#7aa2f7] ">jan '25 - present</p>
      <p className="font-light text-[#cfc9c2] ">building services for the rutgers community.</p>
    </div>
  );
}
