import React from 'react'

const About = () => {
  return (
    <div className="bg-gray-100 text-gray-900">
        <div className="min-h-screen flex flex-col items-center justify-center -py-10">
        <div className="max-w-3xl bg-white p-8 rounded-2xl shadow-xl text-center">
            <h1 className="text-4xl font-bold text-indigo-600 mb-4">About BitLink</h1>
            <p className="text-lg text-gray-700 leading-relaxed">
                BitLink is a simple, fast, and reliable URL shortener that helps you
                transform long and complex URLs into short, manageable links.
            </p>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="bg-indigo-100 p-4 rounded-xl shadow">
                    <h2 className="text-xl font-semibold text-indigo-800">Fast</h2>
                    <p className="text-sm text-gray-600">Shorten your URLs instantly with our optimized system.</p>
                </div>
                <div className="bg-green-100 p-4 rounded-xl shadow">
                    <h2 className="text-xl font-semibold text-green-800">Reliable</h2>
                    <p className="text-sm text-gray-600">Every short link is stable and works without downtime.</p>
                </div>
                <div className="bg-yellow-100 p-4 rounded-xl shadow">
                    <h2 className="text-xl font-semibold text-yellow-800">Free</h2>
                    <p className="text-sm text-gray-600">Enjoy unlimited URL shortening at no cost.</p>
                </div>
            </div>
            <div className="mt-8">
                <a href="/shortner" className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition">
                    Start Shortening
                </a>
            </div>
        </div>
    </div>
    </div>
  )
}

export default About
