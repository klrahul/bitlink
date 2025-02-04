import Image from "next/image";
import { Poppins } from 'next/font/google';

// Import Poppins with specific weights for Content component
const poppins = Poppins({
  weight: ['400','800'],
  subsets: ['latin'],
});
export default function Home() {
  return (
    <div className="bg-purple-50 min-h-screen flex">
       <section className="grid grid-cols-2 bg-purple-200 py-10">
         <div className="bg-purple-200 flex justify-center items-center flex-col text-black">
            <h1 className={`text-2xl font-extrabold ${poppins.className}`}>The best URL shortner in the market</h1>
            <span className={`text-center text-sm px-32 py-3 text-md ${poppins.className}`}>
              We are most Straightforward and easy to use URL shortner in the market.
              We provide you with the best analytics to track your links.
              and we are free to use. We are the best in the market.
            </span>
            <div className="flex gap-5 text-white font-weight-bold">
              <a href="/shortner" className='bg-purple-500 rounded-md py-1 px-3'>Try Now</a>
               <button className='bg-purple-500 rounded-md py-1 px-3'>Github</button>
            </div>
         </div>
         <div className="flex justify-center items-center">
            <Image className="mix-blend-darken" src="/vector_img.jpg" alt="shortner" width={500} height={500} />
         </div>
       </section>
    </div>
  );
}
