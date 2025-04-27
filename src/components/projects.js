export default function ProjectsGallery() {
  return (
    <div className="flex flex-col justify-start items-start max-w-xs  space-y-2 mt-15 sm:mt-0">
      <div className="flex flex-col space-y-2">
        <h1 className="text-xl  text-[#b4f9f8]">projects</h1>
        <a
          href="https://devpost.com/software/clipped-jw0eai"
          target="_blank"
          className="text-xl underline text-[#2ac3de] hover:font-semibold  mt-4"
        >
          Clipped
        </a>
        <p className="font-light text-[#cfc9c2] ">
          {" "}
          real-time video surveillance, which classifies individuals as
          suspicious or normal.{" "}
        </p>
      </div>

      <div className="flex flex-col space-y-2">
        <a
          href="https://docs.google.com/presentation/d/1zclWjxfh8NonhQUE7Im0MuIkJXeEDAuvtMIPOwNVF44/edit?slide=id.ged3401ed36_1_0#slide=id.ged3401ed36_1_0"
          target="_blank"
          className="text-xl underline text-[#2ac3de] hover:font-semibold  mt-4"
        >
          ScarletExchange
        </a>
        <p className="font-light text-[#cfc9c2] ">
          {" "}
          a platform for rutgers students to buy and sell items.
        </p>
      </div>
    </div>
  );
}
