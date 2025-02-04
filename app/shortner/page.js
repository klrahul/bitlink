"use client"
import React, { useState } from 'react'
import Link from 'next/link';
const shortner = () => {
    const [url, setUrl] = useState();
    const [customUrl, setCustomUrl] = useState("");
    const [shortUrl, setShortUrl] = useState("");
    const generate = () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/xml");

        const raw = JSON.stringify({ url: url, customUrl: customUrl });

        const requestOptions = {
            method: "POST",
            credentials: "include",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("http://localhost:3000/api/generate?url=http://localhost&custUrl=local", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                if (result.success) {
                    setShortUrl('');
                    setShortUrl(`${process.env.NEXT_PUBLIC_HOST}/${result.data}`);
                } else {
                    setShortUrl('');
                    setShortUrl(result.error);
                }
                return result;
            })
            .catch((error) => console.log("Fetch error:", error));
    }
    return (
        <div className='bg-red-100 min-h-screen'>
            <div className='relative top-32 rounded-lg flex gap-2 flex-col w-96 mx-auto py-10 text-black bg-purple-200 px-10'>
                <h1 className='font-extrabold text-2xl text-purple-700 text-center line-clamp-3'>Generate your short URL's</h1>
                <input onChange={(e) => { setUrl(e.target.value) }} className='py-1 px-3 focus:outline-purple-500 rounded-lg' placeholder='Enter your url'></input>
                <input onChange={(e) => { setCustomUrl(e.target.value) }} className='py-1 px-3 focus:outline-purple-500 mb-3 rounded-lg' placeholder='Enter your custom url'></input>
                <button onClick={generate} className='z-10 bg-purple-500 text-center text-white text-font py-2 rounded-md font-bold'>Generate</button>
                <div className='flex gap-2'>
                    <span className='font-bold'>Short URL:</span>
                    <span className='text-red-400'><Link href={shortUrl} target="_blank">{shortUrl}</Link></span>
                </div>
            </div>
        </div>
    )
}

export default shortner
