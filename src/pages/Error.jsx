import { error } from "../assets"
import { Link } from "react-router-dom"

const Error = () => {
    return (
        <div className='flex items-center justify-center h-screen font-sans text-gray-700'>
            <div className='flex flex-col justify-center items-center gap-5'>
                <img src={error} alt="error-gif" className="h-64" />
                <h1 className='font-bold text-4xl'>{"Something went wrong :("}</h1>
                <h2 className="text-lg">Maybe the server is down, please try again</h2>
                <Link to={'/'} className='font-normal text-xl lg:text-lg bg-blue-800 px-8 lg:px-4 py-4 lg:py-2 text-white rounded-sm'>Back to home</Link>
            </div>
        </div>
    )
}

export default Error