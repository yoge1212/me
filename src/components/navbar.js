"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Github,
  Home,
  Linkedin,
  NotebookPen,
  FolderKanban,
} from "lucide-react";

export default function Navbar() {
  const [showBox, setShowBox] = useState(false);

  const btnClick = () => {
    setShowBox(!showBox);
  };

  return (
    <>
      {showBox ? (
        <div
          className="fixed inset-0 bg-[#1a1b26] bg-opacity-70 flex items-center justify-center z-50"
          onClick={btnClick}
        >
          <div
            className="bg-[#414868] text-black rounded-lg shadow-lg flex flex-col w-150"
            onClick={(e) => e.stopPropagation()}
          >
            <input
              autoFocus
              type="text"
              className="mx-4 mt-4 px-3 py-2 placeholder:text-[#7e7a75] border-2 border-transparent outline-none focus:border-2 focus:border-[#b4f9f8] rounded text-[#cfc9c2] font-light placeholder:font-light"
              placeholder="enter something..."
            />
            <Link className="mt-4" href={"/"} onClick={btnClick}>
              <div className=" flex p-4 gap-x-4 items-center justify-left hover:bg-[#24283b]">
                <Home
                  className="font-light text-[#cfc9c2]"
                  size={14}
                  strokeWidth={2}
                />
                <p className="font-light text-[#cfc9c2]">home</p>
              </div>
            </Link>

            <Link href={"/blog"} onClick={btnClick}>
              <div className=" flex p-4 gap-x-4 items-center justify-left hover:bg-[#24283b]">
                <NotebookPen
                  className="font-light text-[#cfc9c2]"
                  size={14}
                  strokeWidth={2}
                />
                <p className="font-light text-[#cfc9c2]">blog</p>
              </div>
            </Link>

            <Link href={"/projects"} onClick={btnClick}>
              <div className=" flex p-4 gap-x-4 items-center justify-left hover:bg-[#24283b]">
                <FolderKanban
                  className="font-light text-[#cfc9c2]"
                  size={14}
                  strokeWidth={2}
                />
                <p className="font-light text-[#cfc9c2]">projects</p>
              </div>
            </Link>

            <a target="_blank" href="https://github.com/yoge1212">
              <div className=" flex p-4 gap-x-4 items-center justify-left hover:bg-[#24283b]">
                <Github
                  className="font-light text-[#cfc9c2]"
                  size={14}
                  strokeWidth={2}
                />
                <p className="font-light text-[#cfc9c2]">github</p>
              </div>
            </a>

            <a
              target="_blank"
              href="https://www.linkedin.com/in/yogeshsampathkumar/"
            >
              <div className=" flex p-4 gap-x-4 items-center justify-left hover:bg-[#24283b]">
                <Linkedin
                  className="font-light text-[#cfc9c2]"
                  size={14}
                  strokeWidth={1.5}
                />
                <p className="font-light text-[#cfc9c2]">linkedin</p>
              </div>
            </a>
          </div>
        </div>
      ) : (
        <nav className="flex gap-x-5 px-4 py-2 justify-between bg-[#414868]">
          <div className="flex gap-x-5">
            <Link
              className="text-[#2ac3de] underline hover:font-semibold"
              href={`/`}
            >
              home
            </Link>
            <Link
              className="text-[#2ac3de] underline hover:font-semibold"
              href={`/blog`}
            >
              blog
            </Link>
            <Link
              className="text-[#2ac3de] underline hover:font-semibold"
              href={`/projects`}
            >
              projects
            </Link>
          </div>

          <button
            className="text-[#2ac3de] hover:font-semibold hover:cursor-pointer text-sm"
            onClick={btnClick}
          >
            <div className="flex gap-x-2">
              <div className="px-2 py-0.5 items-center rounded-md border">
                <p>⌘</p>
              </div>

              <div className="px-2 py-0.5 items-center rounded-md border">
                <p>K</p>
              </div>
            </div>
          </button>
        </nav>
      )}
    </>
  );
}
