import Goback from "@/components/Goback";
import Navbar from "@/components/Navbar";
// import Articles from "@/components/Articles";
// import Link from "next/link";



export default function First() {
  return (
    <main className="w-screen flex flex-col items-start md:items-center sm:h-screen md:h-screen bg-[#f5f5f5]">
        <Navbar></Navbar>
        <div className="flex flex-col items-start md:flex-row md:items-center md:mt-20">
        
        <h1 className="mt-5 text-4xl font-bold px-10 max-md:mt-20">Following my Dreams</h1>
        </div>
        
        <div className="max-w-[780px] max-md:pb-20 md:my-20 text-justify px-10 flex flex-col items-start gap-1">
            <Goback></Goback>
            <p><b>Not written yet</b></p>
            
        </div>
        {/* <Articles></Articles> */}
    </main>
  )
}
