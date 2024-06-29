import Navbar from "@/components/Navbar";
import Link from "next/link";



export default function Articles() {
  return (
    <main className="w-full m-auto flex flex-col items-center min-h-screen  bg-[#f5f5f5] ">
        <Navbar></Navbar>
        <h1 className="mt-20 text-2xl md:text-4xl font-bold px-10">Articles written with ❤️</h1>
        <p className="mt-7 m-auto min-w-[300px] text-justify px-10 text-base md:text-lg md:mb-5">Here you will find a list of articles written for me on topics like creativity, lifestyle, traveling, habits, self-steem, personal insights and more.</p>
        <div className="w-full  mt-10 font-serif  flex flex-col justify-between items-center gap-5 p-10">
            <Link href="/articles/my-first-post" className="w-full md:w-auto">
            <div className="rounded flex flex-col md:flex-row md:justify-start md:items-center md:gap-5 min-w-[300px] w-full md:w-[720px] md:h-20 bg-gray-50 shadow hover:shadow-lg px-2 py-5">
                <p className="p-1 ml-5">june 02, 2023</p>
                <p className="p-1 ml-5" ><b>My first post. Why I blog?</b></p>
            </div>
            </Link>

            <Link href="/articles/moving-forward" className="w-full md:w-auto">
            <div className="rounded flex flex-col md:flex-row md:justify-start md:items-center md:gap-5 min-w-[300px] w-full md:w-[720px] md:h-20 bg-gray-50 shadow hover:shadow-lg px-2 py-5">
                <p className="p-1 ml-5">june 10, 2023</p>
                <p className="p-1 ml-5"><b>Moving forward</b></p>
            </div>
            </Link>

            <Link href="/articles/following-my-dreams" className="w-full md:w-auto">
            <div className="rounded flex flex-col md:flex-row md:justify-start md:items-center md:gap-5 min-w-[300px] w-full md:w-[720px] md:h-20 bg-gray-50 shadow hover:shadow-lg px-2 py-5">
                {/* <p className="p-5 bg-slate-400">01/06/23</p> */}
                <p className="p-1 ml-5">june 14, 2023</p>
                <p className="p-1 ml-5"><b>Following my dreams</b></p>
            </div>
            </Link>

        </div>
    </main>
  )
}
