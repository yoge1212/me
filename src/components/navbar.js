"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import {
  Github,
  Home,
  Linkedin,
  NotebookPen,
  FolderKanban,
} from "lucide-react";

export default function Navbar() {
  const [showBox, setShowBox] = useState(false);
  const [value, setValue] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const navItems = [{name: "home", kind: "page" }, {name: "blog", kind: "page" }, {name: "projects", kind: "page" }, {name: "github", kind: "link" }, {name: "linkedin", kind: "link" }]; 

  const btnClick = () => {
    setShowBox(!showBox);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        btnClick();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [btnClick]);

  const handleChange = (e) => {
    setValue(e.target.value)
    console.log(value);
    setFilteredItems(navItems.filter((item) => item.name.includes(e.target.value)));

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
              value={value}
              onChange={handleChange}
            />
<div className="mt-4">
            {!value ? 

                  navItems.map((item, index) => (

                    (item.kind == "page" ? 
                      <Link key={index} href={item.name == "home" ? '/' : `/${item.name}` } onClick={btnClick}>
                <div className=" flex p-4 gap-x-4 items-center justify-left hover:bg-[#24283b]">
                  <Home
                    className="font-light text-[#cfc9c2]"
                    size={14}
                    strokeWidth={2}
                  />
                  <p className="font-light text-[#cfc9c2]">{item.name}</p>
                </div>
              </Link>


                      :

                       <a
                       key={index}
              target="_blank"
              href={item.name == "linkedin" ? 'https://www.linkedin.com/in/yogeshsampathkumar/' : 'https://github.com/yoge1212' }
            >
              <div className=" flex p-4 gap-x-4 items-center justify-left hover:bg-[#24283b]">
                <Linkedin
                  className="font-light text-[#cfc9c2]"
                  size={14}
                  strokeWidth={1.5}
                />
                <p className="font-light text-[#cfc9c2]">{item.name}</p>
              </div>
            </a>

                    )

                  

            

              ))

              

                : filteredItems.map((item, index) => (

                  <Link key={index} href={item.name == "home" ? '/' : `/${item.name}` } onClick={btnClick}>
                <div className=" flex p-4 gap-x-4 items-center justify-left hover:bg-[#24283b]">
                  <Home
                    className="font-light text-[#cfc9c2]"
                    size={14}
                    strokeWidth={2}
                  />
                  <p className="font-light text-[#cfc9c2]">{item.name}</p>
                </div>
              </Link>

            

              ))

            
            
              
            }
            </div>
            
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
