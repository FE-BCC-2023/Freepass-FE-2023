import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from '../../image/logo atas.png'
import Swal from 'sweetalert2'


const Aktivasi = () => {
    const navigate = useNavigate()
    const [data, setData] = useState({
        email: "",
        activation_code: "",
    })
    const [error, setError] = useState(null)

    const submitCode = async () => {
        await axios.post('https://tcah-angon.ruangbaca-fisipedu.my.id/api/verification', {
            email: data.email,
            activation_code: data.activation_code
        }).then(res => {
            navigate('/')
            Swal.fire({
                title: 'Aktivasi Berhasil',
                text: 'Silahkan Login',
                icon: 'success',
                confirmButtonText: 'Oke!'
            })
        }).catch(err => {
            setError(err.response.data)
            Swal.fire({
                title: 'Aktivasi Gagal',
                text: 'Silahkan Masukkan Ulang',
                icon: 'error',
                confirmButtonText: 'Oke!'
            })
        })
    }

    return (
        <div>
            <div className="flex justify-center h-screen items-center">
                <div className="flex h-fit justify-center">
                    <img className="absolute w-[40px] vsm:w-[46px] lg:w-[52px] xl:w-[64px] -mt-[20px] lg:-mt-[30px] xl:-mt-[40px]" src={logo} alt="" />
                    <div className="flex w-[350px] vsm:w-[400px] sm:w-[550px] md:w-[700px] flex-col py-[50px] bg-gray-100 border shadow-sm rounded-lg px-[20px] sm:px-[50px] md:px-[100px] ">
                        <div className="flex flex-col items-center">
                            <h1 className="xl:text-[30px] text-[24px] font-bold">Enter your Email and </h1>
                            <span className="xl:text-[30px] text-[24px] font-bold"> Verification Number</span>
                        </div>
                        <div className="flex justify-center flex-col">
                            <label className="mt-10 text-[14px] lg:text-[16px] text-[#333F51] font-bold">Email</label>
                            <input
                                type="text"
                                value={data.email}
                                onChange={e => setData({ ...data, email: e.target.value })}
                                required
                                className="w-full rounded-md shadow-md outline-none focus:ring-2 focus:ring-blue-500 mt-2 p-3 placeholder:text-[14px] placeholder:-pl-[600px]"
                                placeholder="Enter your email adress" />
                            <label>
                                <span className="mt-1 text-red-500 text-[14px]">{error?.email}</span>
                            </label>

                            <label className="mt-8 text-[14px] lg:text-[16px] text-[#333F51] font-bold">Verification Number</label>
                            <input
                                type="number"
                                onChange={e => setData({ ...data, activation_code: e.target.value })}
                                name={data.activation_code}
                                required
                                className="w-full rounded-md shadow-md mt-2 p-3 outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-[14px] placeholder:-pl-[600px]"
                                placeholder="Enter your verification number" />
                            <label>
                                <span className="mt-1 text-red-500 text-[14px]"></span>
                            </label>

                            <h1 className="text-[#22C55E] mt-3 hover:text-[#1eae53]"><a href="/resend">Resend Code</a></h1>

                            <button
                                type="submit"
                                onClick={submitCode}
                                className="bg-[#22C55E] p-2 xl:p-3 mt-9 rounded-lg w-full text-white hover:bg-[#1eae53]">Submit</button>
                            <label >
                                <span className="mt-3 text-red-500 justify-center flex text-[14px]">{error?.message}</span>
                            </label>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Aktivasi;