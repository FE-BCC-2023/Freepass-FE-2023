import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "../Main/Navbar";

const Profile = () => {
    const [data, setData] = useState("")

    useEffect(() => {
        const token = localStorage.getItem('auth')

        axios.get('https://tcah-angon.ruangbaca-fisipedu.my.id/api/user', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(res => {
                console.log(res)
                setData(res.data)
            }).catch(err => {
                console.log(err)
            })
    }, [])


    return (
        <>
            <Navbar />
            <div className="bg-[#2A3342]">
                <div className="flex justify-center h-screen items-center">
                    <div className="flex h-fit justify-center">
                        <div className="flex flex-col py-[50px] bg-gray-100 border shadow-sm rounded-lg ">
                            <div className="flex flex-col items-center ">
                                <h1 className="xl:text-[30px] text-[24px] font-bold">Profile</h1>
                            </div>
                            <div className="mt-[20px] flex-col px-[30px] vsm:px-[40px] sm:px-[80px] xl:px-[100px] font-medium">
                                <h1 className="text-[16px] my-5">First Name : 
                                    <span className="font-bold"> {data.first_name}</span>
                                </h1>
                                <h1 className="text-[16px] my-5">last Name : 
                                    <span className="font-bold"> {data.last_name}</span>
                                </h1>
                                <h1 className="text-[16px] my-5">Phone : 
                                    <span className="font-bold"> {data.phone}</span>
                                </h1>
                                <h1 className="text-[16px]">Address : 
                                    <span className="font-bold"> {data.address}</span>
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img className="absolute" src="/image/bg-wave.png" alt="" />
        </>
    );
}

export default Profile;