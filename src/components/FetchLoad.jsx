import React from 'react'

const FetchLoad = () => {
    return (
        <div className="fixed flex justify-center items-center top-0 left-0 w-full h-full bg-black/50 z-50">
            <div className="bg-white flex items-center px-8 py-8 lg:px-4 lg:py-4 rounded-lg text-4xl lg:text-2xl">
                <svg className="animate-spin ml-1 mr-3 h-12 w-12 lg:h-7 lg:w-7 text-blue-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth={4}></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Loading . . .
            </div>
        </div>
    )
}

export default FetchLoad