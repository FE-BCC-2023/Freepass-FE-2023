import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import notFound from '../../image/cover_not_found.jpg'
import {useEffect, useState } from "react";
import wave from "../../image/bg-wave.png"

const baseURL = "https://openlibrary.org/works/"

const BookDetails = () => {
    const { id } = useParams()
    const [loading, setLoading] = useState(false)
    const [book, setBook] = useState(null)

    useEffect(() => {
        setLoading(true)
        async function getBookDetails() {
            try {
                const response = await fetch(`${baseURL}${id}.json`)
                const data = await response.json()

                if (data) {
                    const { description, title, covers, subject_places, subject_times, subject_people, subject } = data
                    const detail = {
                        description: description ? description.value : "No Description Found!",
                        title: title,
                        cover_img: covers ? `https://covers.openlibrary.org/b/id/${covers[0]}-L.jpg` : notFound,
                        subject_places: subject_places ? subject_places.join(", ") : "No Subject Places Found!",
                        subject_times: subject_times ? subject_times.join(", ") : "No Subject Times Found!",
                        subject_people: subject_people ? subject_people.join(", ") : "No Subject People Found!",
                        subject: subject ? subject.join(", ") : "No Subject Found!",
                    }
                    setBook(detail)
                } else {
                    setBook(null)
                }
                setLoading(false)

            } catch (error) {
                setLoading(false)
            }
        }
        getBookDetails()
    }, [id])

    if (loading) {
        return <Loader />
    }

    return (
        <>
            <div className="pt-[50px] bg-[#2A3342] h-full">
                <div className="p-[50px]">
                    <h1 className="font-bold text-white my-[30px] text-[20px]">{book?.title}</h1>
                    <div className="flex flex-col md:flex-row px-12 py-12 rounded-xl bg-white">
                        <div className='flex md:mx-0 mx-auto max-w-[180px] '>
                            <img src={book?.cover_img} alt="cover" />
                        </div>

                        <div className="flex mt-[20px] text-center md:text-left md:mt-0 flex-col md:ml-[20px]">
                            <div className="mb-[10px]">
                                <label className="font-bold text-gray-700">Description : </label>
                                <h1 className="text-gray-600">{book?.description}</h1>
                            </div>

                            <div className="mb-[10px]">
                                <label className="font-bold text-gray-700">Subject Places : </label>
                                <h1 className="text-gray-600">{book?.subject_places}</h1>
                            </div>

                            <div className="mb-[10px]">
                                <label className="font-bold text-gray-700">Subject People : </label>
                                <h1 className="text-gray-600">{book?.subject_people}</h1>
                            </div>

                            <div className="mb-[10px]">
                                <label className="font-bold text-gray-700">Subject Times : </label>
                                <h1 className="text-gray-600">{book?.subject_times}</h1>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row justify-between py-[50px]">
                        <div className="flex justify-start">
                            <a href='/book' className="py-3 px-4 text-white rounded-lg bg-green-500 hover:bg-green-600">Back</a>
                        </div>
                    </div>
                </div>
            </div>
            <img className="w-ful -mt-[40px] mb-[20px]" src={wave} alt=""></img>
        </>
    );
}

export default BookDetails;