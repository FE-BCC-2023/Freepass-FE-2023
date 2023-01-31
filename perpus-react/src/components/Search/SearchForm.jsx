import { useContext, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../Data/Data";


const SearchForm = () => {
    const {setSearch, setResult} = useContext(DataContext)
    const searchText = useRef('');
    const navigate = useNavigate()

    useEffect(() => searchText.current.focus(), [])
    const handleSubmit = (e) => {
        e.preventDefault()
        let tempSearch = searchText.current.value.trim();
        if((tempSearch.replace(/[^\w\s]/gi, "")).length === 0){
            setSearch("Hell Boy")
            setResult("Please Enter Something ...")
        }else {
            setSearch(searchText.current.value)
        }

        navigate("/book");
    }

    return (
        <>
            <div className="mb-[50px]">
                <h1 className="vsm:text-[40px] text-[30px] pt-[100px] text-white font-bold text-center">Find Your Book</h1>
                <form onSubmit={handleSubmit} className="flex items-center mt-[20px] justify-center">
                    <div className="relative gap-5">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                        </div>
                        <input 
                            type="text" 
                            ref={searchText}
                            className="bg-[#ffffff] py-2 placeholder:font-normal px-[50px] placeholder:text-gray-400 border border-gray-300 text-gray-700 rounded-2xl outline-none focus:ring-2 focus:ring-slate-400" 
                            placeholder="Input the title ... "
                            />
                    </div>
                    <button onClick={handleSubmit} type="submit" className="p-2.5 ml-3 text-sm font-medium text-white bg-[#22C55E] rounded-xl hover:bg-green-600  focus:outline-none">
                        Search
                    </button>
                </form>
            </div>
        </>
    );
}

export default SearchForm;