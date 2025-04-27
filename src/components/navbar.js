"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [showBox, setShowBox] = useState(false);

  const btnClick = () => {
    setShowBox(true);
  };

  return (
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
  );
}
