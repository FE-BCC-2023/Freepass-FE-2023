import axios from "axios";
import { useState } from "react";
import logo from '../../image/logo atas.png'
import {  useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

const Resend = () => {
    const [email, setEmail] = useState(false)
    const [error, setError] = useState("")
    const navigate = useNavigate()

    const sendCode = async () => {
        await axios.post('https://tcah-angon.ruangbaca-fisipedu.my.id/api/resend-email', {
            email: email
        }).then(res => {
            Swal.fire({
                title: 'Resend Code Berhasil',
                text: 'Silahkan Anda Memasukkan Nomor Aktivasi',
                icon: 'success',
                confirmButtonText: 'Oke!'
            })
            navigate('/aktivasi')
        }).catch(err => {
            setError(err.response.data)
            Swal.fire({
                title: 'Resend Code Gagal',
                text: 'Silahkan Anda Memasukkan Email Ulang',
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
                            <h1 className="xl:text-[30px] text-[24px] font-bold">Resend Code</h1>
                        </div>
                        <div className="flex justify-center flex-col">
                            <label className="mt-10 text-[14px] lg:text-[16px] text-[#333F51] font-bold">Email</label>
                            <input
                                type="text"
                                onChange={e => setEmail(e.target.value)}
                                required
                                className="w-full rounded-md shadow-md outline-none focus:ring-2 focus:ring-blue-500 mt-2 p-3 placeholder:text-[14px] placeholder:-pl-[600px]"
                                placeholder="Enter your email adress" />
                            <label>
                                <span className="mt-2 text-red-500 text-[14px]">{error?.message}</span>
                            </label>

                            <button
                                type="submit"
                                onClick={sendCode}
                                className="bg-[#22C55E] p-2 xl:p-3 mt-9 rounded-lg w-full text-white hover:bg-[#1eae53]">Send</button>

                            <div className="flex justify-end mt-10">
                                <a href='/aktivasi' className="py-2 px-4 text-white rounded-lg bg-green-500 hover:bg-green-600"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
                                    <path d="M9.195 18.44c1.25.713 2.805-.19 2.805-1.629v-2.34l6.945 3.968c1.25.714 2.805-.188 2.805-1.628V8.688c0-1.44-1.555-2.342-2.805-1.628L12 11.03v-2.34c0-1.44-1.555-2.343-2.805-1.629l-7.108 4.062c-1.26.72-1.26 2.536 0 3.256l7.108 4.061z" />
                                </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Resend;