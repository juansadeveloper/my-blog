import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import Link from "next/link";

function Goback() {
  return (
    <div>
        <Link href="/articles" className="">
            <div className=" mt-20 md:mt-5 mb-5 bg-neutral-50 pr-4 pl-2 py-2 border text-sm rounded-md   font-bold flex gap-1 justify-start items-center text-cyan-700/50 md:hover:text-cyan-700" >
                <IoIosArrowBack  size={20} />
                <p>Go back</p>
            </div>
        </Link>
    </div>
  )
}

export default Goback

