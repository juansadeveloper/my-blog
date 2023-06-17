import Navbar from "@/components/Navbar"
import Image from "next/image"
import { fredericka_the_great } from "./layout"


export default function Home() {
  return (
    <main className="w-full md:w-screen flex flex-col items-center h-full md:h-screen  bg-red-700 z-50 md:bg-slate-400">
        <Navbar></Navbar>
        <Image 
          src="/main-background-responsive.jpg"
          fill={true}
          alt="background-image"
          style={{objectFit: "cover"}}
          // className="contain"
          >
        </Image>
        <div className="Z-10  text-5xl absolute bottom-[40%] md:text-7xl text-cyan-700 flex flex-col gap-5 ">
          <p className={fredericka_the_great.className}>LIVE,</p>
          <p className={fredericka_the_great.className}>WRITE,</p>
          <p className={fredericka_the_great.className}>SHARE.</p>
        </div>
        <div className="w-full bg-white/50 h-40 z-[1] fixed bottom-0 flex justify-center items-center p-5 sm:p-0 text-center">
          <p className="font-bold md:text-xl text-slate-700">"Failure is the information you need to get where you are going"</p>
          {/* - <span className="text-slate-500">Rick Rubin</span> */}
        </div>
    </main>
  )
}
