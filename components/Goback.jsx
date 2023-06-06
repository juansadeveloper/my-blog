import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import Link from "next/link";

function Goback() {
  return (
    <div>
        <Link href="/articles" className="">
            <div className=" mt-20 md:mt-5 px-10  font-bold flex gap-1 justify-center items-center text-cyan-700/50 hover:text-cyan-700" >
                <IoIosArrowBack  size={20} />
                <p>Go back</p>
            </div>
        </Link>
    </div>
  )
}

export default Goback

