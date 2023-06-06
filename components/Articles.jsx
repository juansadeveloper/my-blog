import Link from 'next/link'
import React from 'react'

function Articles() {
  return (
    <div className=' bg-slate-500 mt-10'>
    <h1 className="mt-20 text-3xl md:text-4xl font-bold px-10 text-center">Read more articles</h1>
        <div className="mt-20 font-serif  flex flex-col justify-between items-center gap-5 p-10 rounded-md">
            <Link href="/articles/my-first-post">
            <div className="rounded flex flex-col md:flex-row md:justify-start md:items-center md:gap-5 w-96 md:w-[720px] md:h-20 bg-[#f5f5f5] shadow hover:shadow-lg px-2 py-5">
                <p className="p-1 ml-5">june 02, 2023</p>
                <p className="p-1 ml-5" ><b>My first post. Why I blog?</b></p>
            </div>
            </Link>

            <Link href="/articles/moving-forward">
            <div className="rounded flex flex-col md:flex-row md:justify-start md:items-center md:gap-5 w-96 md:w-[720px] md:h-20 bg-[#f5f5f5] shadow hover:shadow-lg px-2 py-5">
                <p className="p-1 ml-5">june 10, 2023</p>
                <p className="p-1 ml-5"><b>Moving forward</b></p>
            </div>
            </Link>

            <Link href="/articles/following-my-dreams">
            <div className="rounded flex flex-col md:flex-row md:justify-start md:items-center md:gap-5 w-96 md:w-[720px] md:h-20 bg-[#f5f5f5] shadow hover:shadow-lg px-2 py-5">
                {/* <p className="p-5 bg-slate-400">01/06/23</p> */}
                <p className="p-1 ml-5">june 14, 2023</p>
                <p className="p-1 ml-5"><b>Following my dreams</b></p>
            </div>
            </Link>

        </div>
    </div>
  )
}

export default Articles