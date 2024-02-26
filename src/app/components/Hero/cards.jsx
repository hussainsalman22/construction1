import React from 'react'

const Cards = (props) => {
    return (
        <div className=" flex flex-col justify-center static overflow-hidden w-1/4 ">
            <div className="max-w-7xl mx-auto">
                <div className="relative group cursor-pointer">
                    <div
                        className="absolute -inset-1 bg-gradient-to-r from-yellow-600 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200">
                    </div>
                    <div
                        className="relative w-28 h-20 px-2 py-3 bg-yellow-300 ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-3">
                        <div className="space-y-2 flex flex-col justify-center items-center flex-wrap content-center">
                            <p className="text-slate-800">
                                <span className='block font-bold text-2xl'>{props.main}</span>
                                {props.data}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards
