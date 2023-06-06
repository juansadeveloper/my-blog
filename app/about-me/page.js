import Navbar from "@/components/Navbar";
import Link from "next/link";
// import Link from "next/link";



export default function About() {
  return (
    <main className="w-screen flex flex-col items-center h-screen bg-[#f5f5f5]">
       <Navbar></Navbar>

        <h1 className="mt-28 text-3xl md:mt-40 md:text-5xl font-bold px-10">Hi, I´m Santiago</h1>
        <div className="max-w-[780px] mt-12 text-justify font-serif px-10 flex flex-col gap-1 text-lg md:text-xl">
            
            {/* <p>I´m a traveler who wants to move around the world while I work online. I started writing for my self in the beggining of 2020, then writing become my dream but I didn´t really do it until now, 3 years later...</p> */}
            <p><b>I am a writer in the process of becoming.</b> I started writing for my self in the beggining of 2020, then writing become my dream but I didn´t really do it until now, june 2023, 3 years later...</p>
            <p>I hope I can bring you some content of value that helps you improve the quality of your life. At the moment I´m learning & experimenting, I mean, having a blog and writing online is a new thing for me, I´ve never done something like this before. So thank you in advance for taking the time to read.</p>
            <p>All the Best! Always...</p>
            <Link href="/articles" className="m-auto rounded p-3 mt-10 text-white font-medium w-fit bg-black/90 hover:bg-cyan-700">Read my articles</Link>            
        </div>
    </main>
  )
}
