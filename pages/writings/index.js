import Head from 'next/head'
import Link from 'next/link'

export default function Blog() {
    return (
        <div className="flex justify-center items-center bg-black">
            <Head>
                <title>thoughts.</title>
            </Head>
            <div className="2xl:mx-auto 2xl:container lg:px-20 lg:py-16 md:py-12 md:px-6 py-9 px-4 w-96 sm:w-auto">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-4xl font-semibold leading-9 text-center text-gray-100">thoughts</h1>
                    <p className="text-base leading-normal text-center text-gray-600 mt-4 lg:w-1/2 md:w-10/12 w-11/12">a person who thinks all the time, has nothing to think but thoughts.</p>
                </div>
                <div className="lg:flex items-stretch md:mt-12 mt-8">
                    <div className="lg:w-1/2">
                        
                        <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6">
                            <div className="sm:w-1/2 relative">
                                <div>
                                    <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">January 2022</p>
                                    <div className="absolute bottom-0 left-0 p-6">
                                        <h2 className="text-xl font-semibold 5 text-white">Decentralized Social</h2>
                                        <p className="text-base leading-4 text-white mt-2">Networked Interaction.</p>
                                        <div className="flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                                            <p className="pr-2 text-sm font-medium leading-none"><Link href="writings/deso">Read More</Link></p>
                                            <svg className="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <img src="https://images.unsplash.com/photo-1617191519105-d07b98b10de6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHNxdWFyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60" className="w-screen opacity-100 bg-blend-darken" alt="chair" />
                            </div>
                            <div className="sm:w-1/2 sm:mt-0 mt-4 relative bg-gray-900 bg-opacity-50">
                                <div className="">
                                    <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">January 2022</p>
                                    <div className="absolute bottom-0 left-0 p-6">
                                        <h2 className="text-xl font-semibold 5 text-white"><Link href="/writings/human-rights">Human Rights</Link></h2>
                                        <p className="text-base leading-4 text-white mt-2"><Link href="/writings/human-rights">Paradoxical Sovereignty.</Link></p>
                                        <div className="flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                                            <p className="pr-2 text-sm font-medium leading-none"><Link href="/writings/human-rights">Read More</Link></p>
                                            <svg className="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <img src="https://images.unsplash.com/photo-1544296755-7c9f940207ae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb3Rlc3R8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60" className="w-full h-80 object-fill" alt="wall design" />
                            </div>
                        </div>
                        <div className="relative">
                            <div>
                                <p className="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">December 2021</p>
                                <div className="absolute bottom-0 left-0 md:p-10 p-6">
                                    <h2 className="text-xl font-semibold 5 text-white"><Link href="writings/surveillance-capitalism">Surveillance Capitalism</Link></h2>
                                    <p className="text-base leading-4 text-white mt-2"><Link href="writings/surveillance-capitalism">No such thing as democracy.</Link></p>
                                    <div className="flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                                        <p className="pr-2 text-sm font-medium leading-none"><Link href="writings/surveillance-capitalism">Read More</Link></p>
                                        <svg className="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <img src="https://images.unsplash.com/photo-1557098168-47dc193d2c85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1730&q=80" alt="sitting place" className="w-fill h-fill object-cover mt-8 md:mt-6 hidden sm:block" />
                            <img className="w-full mt-4 sm:hidden" src="https://images.unsplash.com/photo-1617191519105-d07b98b10de6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHNxdWFyZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60" alt="sitting place" />
                        </div>
                    </div>
                    
                    <div className="lg:w-1/2 xl:ml-8 lg:ml-4 lg:mt-0 md:mt-6 mt-4 lg:flex flex-col justify-between">
                        <div className="relative">
                            
                            <div>
                                <p className="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">February 2022</p>
                                <div className="absolute bottom-0 left-0 md:p-10 p-6">
                                    <h2 className="text-xl font-semibold 5 text-white"><Link href="/writings/soulbound">Soulbound</Link></h2>
                                    <p className="text-base leading-4 text-white mt-2"><Link href="/writings/soulbound">Vitalik&#39;s Vision.</Link></p>
                                    <div className="flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                                        <p className="pr-2 text-sm font-medium leading-none"><Link href="/writings/soulbound">Read More</Link></p>
                                        <svg className="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <img src="https://images.unsplash.com/photo-1597589827317-4c6d6e0a90bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3F1YXJlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60" alt="sitting place" className="w-full sm:block hidden" />
                        </div>
                        <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6 md:mt-6 mt-4">
                            <div className="relative w-full">
                                <div>
                                    <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">December 2021</p>
                                    <div className="absolute bottom-0 left-0 p-6">
                                        <h2 className="text-xl font-semibold 5 text-white"><Link href="writings/trillionare">Trillionare Paradox</Link></h2>
                                        <p className="text-base leading-4 text-white mt-2"><Link href="writings/trillionare">Harnessing Data.</Link></p>
                                        <div className="flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                                            <p className="pr-2 text-sm font-medium leading-none"><Link href="writings/trillionare">Read More</Link></p>
                                            <svg className="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <img src="https://images.unsplash.com/photo-1563900207-a818a616124c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cmljaHxlbnwwfDJ8MHx8&auto=format&fit=crop&w=900&q=60" className="w-full" alt="chair" />
                            </div>
                            <div className="relative w-full sm:mt-0 mt-4">
                                <div>
                                    <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">December 2021</p>
                                    <div className="absolute bottom-0 left-0 p-6">
                                        <h2 className="text-xl font-semibold 5 text-white"><Link href="writings/ethnocentrism">Ethnocentrism</Link></h2>
                                        <p className="text-base leading-4 text-white mt-2"><Link href="writings/ethnocentrism">Mind games.</Link></p>
                                        <div className="flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                                            <p className="pr-2 text-sm font-medium leading-none"><Link href="writings/ethnocentrism">Read More</Link></p>
                                            <svg className="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <img src="https://images.unsplash.com/photo-1436397543931-01c4a5162bdb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDV8fG5ldHdvcmt8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60" className="w-full" alt="wall design" />
                            </div>
                        </div>
                        
                    </div>

                    
                    
                </div>

                
                
            </div>
        </div>
    );
};
