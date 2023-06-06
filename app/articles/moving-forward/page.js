import Goback from "@/components/Goback";
import Navbar from "@/components/Navbar";
// import Articles from "@/components/Articles";
// import Link from "next/link";



export default function First() {
  return (
    <main className="w-screen flex flex-col items-start md:items-center sm:h-screen md:h-screen bg-[#f5f5f5]">
        <Navbar></Navbar>
        <div className="flex flex-col items-start md:flex-row md:items-center md:mt-20">
        <Goback></Goback>
        <h1 className="mt-5 text-4xl font-bold px-10">Moving Forward</h1>
        </div>
        
        <div className="max-w-[780px] my-20 text-justify px-10 flex flex-col gap-1">
            <p><b>02/06/2023</b></p>
            <p>This is my first post on internet. I´m very happy. I´ve been thinking about writing online   since 2020 but only after 3 years I really started.</p>
            <p>So this post is more an "introduction" about what I´m gonna do here. But to be honest, I don´t really know what I´m gonna write/share here.</p>
            <p>The thing is if I really want to become a writer I need to start somewhere. Like everything in life. How can you pretend to be a writer if you don´t write? How can you pretend to be a musician if you don´t play music? How can you pretend to be an artist if you don´t create things?</p>
            <p>Well there is only one way:</p>
            <p>First you need to start doing things, then you need to continue doing things.</p>
            <p>Second you need to continue trying and getting better until you get there.</p>
        </div>
        {/* <Articles></Articles> */}
    </main>
  )
}
