"use client"
import Image from "next/image";
import { Poppins } from 'next/font/google';
import { useRef, useState, useEffect } from "react";

// Import Poppins with specific weights for Content component
const poppins = Poppins({
  weight: ['400','800'],
  subsets: ['latin'],
});
export default function Home() {
  const texts = ["Fastest URL shortener", "Privacy-focused"];
    const [textIndex, setTextIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");

    useEffect(() => {
        if (charIndex < texts[textIndex].length) {
            const timeout = setTimeout(() => {
                setDisplayText(prev => prev + texts[textIndex][charIndex]);
                setCharIndex(charIndex + 1);
            }, 100);
            return () => clearTimeout(timeout);
        } else {
            const timeout = setTimeout(() => {
                setDisplayText("");
                setCharIndex(0);
                setTextIndex((textIndex + 1) % texts.length);
            }, 2000);
            return () => clearTimeout(timeout);
        }
    }, [charIndex, textIndex]);
  return (
    <div className="bg-purple-50 min-h-screen flex">
       <section className="grid grid-cols-2 bg-purple-200 py-10">
         <div className="bg-purple-200 flex justify-center items-center flex-start flex-col text-black px-5">
            <h1 className={`text-3xl font-extrabold ${poppins.className}`}>The Best URL shortner in the market</h1>
            <span className={`text-center text-sm px-32 py-6 text-md ${poppins.className}`}>
              We are most Straightforward and easy to use URL shortner in the market.
              We provide you with the best analytics to track your links.
              and we are free to use. We are the best in the market.
            </span>
            <div className="flex">
                  <h1 className="text-xl font-bold my-5 text-gray-500"><span id="typing" className="cursor">{displayText}</span></h1>
            </div>
            <div className="flex gap-5 text-white font-weight-bold">
              <a href="/shortner" className='bg-purple-500 rounded-md py-2 px-5 font-bold'>Try Now</a>
               <a href="https://github.com/klrahul/bitlink" className='bg-transparent border-[1px] border-black  text-black rounded-md py-2 px-5 font-bold'>Github</a>
            </div>
         </div>
         <div className="flex justify-center items-center">
            <Image className="mix-blend-darken" src="/vector_img.jpg" alt="shortner" width={500} height={500} />
         </div>
       </section>
    </div>
  );
}
