import React from "react";


const HeroSection = ()=>{
    return(
        <section className="relative bg-cover bg-center h-screen" style={{backgroundImage: "url('/bg2.jpg')"}}>
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="relative container mx-auto px-6 md:px-12 lg:px-20 flex items-center h-full">
                <div className="text-center md:text-left">
                    <h1 className="text-4xl md:text-6xl text-white font-bold leading-light">
                        Welcome To My Company's Platform.
                    </h1>
                    <p className="mt-4 text-lg md:text-2xl text-white">
                        This is a brief introduction to my awesome website.
                    </p>
                    <button className="mt-8 px-6 py-3 bg-blue-800 text-white rounded-lg text-lg font-semibold hover:bg-blue-600">
                        Explore
                    </button>
                </div>
            </div>
        </section>
    )
}

export default HeroSection;