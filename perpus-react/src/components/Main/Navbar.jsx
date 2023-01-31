import logo from '../../image/Logo-Elibs.png'
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import Swal from 'sweetalert2'

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const navigate = useNavigate()
    const logout = () => {
        localStorage.removeItem('auth');
        navigate('/')
        Swal.fire({
            title: 'Logout Berhasil',
            text: 'Anda Berhasil Logout',
            icon: 'success',
            confirmButtonText: 'Oke!'
        })
    }

    return (
        <div>
            <div className="hidden lg:flex bg-[#2A3342] fixed w-full top-0 z-10">
                <div className=" py-5 flex shadow-md w-full items-center">
                    <div className="flex justify-between mx-[20px] lg:mx-[100px] w-full">
                        <img src={logo} className='h-10' alt="" />
                        <ul className=" flex flex-row items-center text-lg">
                            <li className='flex mx-10 hover:font-semibold text-white hover:text-gray-400'>
                                <a href="/dashboard">Dashboard</a>
                            </li>
                            <li className='flex hover:font-semibold text-white hover:text-gray-400'>
                                <a href="/profile">Profile</a>
                            </li>
                            <li className='flex mx-10 hover:font-semibold text-white hover:text-gray-400'>
                                <a href="/book">Book</a>
                            </li>
                            <li>
                                <button type="submit" onClick={logout} className="flex hover:bg-[#9d1e1e] px-3 py-2 rounded-xl bg-[#c52222] text-white">Logout</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="flex lg:hidden bg-[#2A3342] fixed w-full top-0 z-10">
                <div className=" py-5 flex shadow-md w-full items-center">
                    <div className="flex px-14 w-full items-center justify-between ">
                        <img src={logo} className='h-10' alt="" />
                        <ul className={`${toggle ? 'translate-x-0 flex' : 'translate-x-[1000px]'} transition duration-500 bg-[#2A3342] z-20 flex flex-col justify-end absolute top-16 rounded-lg right-0 text-lg text-white`}>
                            <li className='flex mx-10 my-10'>
                                <a href="/dashboard">Dashboard</a>
                            </li>
                            <li className='flex mx-10'>
                                <a href="/profile">Profile</a>
                            </li>
                            <li className='flex mx-10 my-10'>
                                <a href="/book">Book</a>
                            </li>
                            <li className='flex mx-10 mb-10'>
                                <button type="submit" onClick={logout} className="border flex border-[#c52222] hover:bg-[#9d1e1e] px-3 py-2 rounded-xl bg-[#c52222] text-white">Logout</button>
                            </li>
                        </ul>
                        <div className="flex" onClick={() => {
                            setToggle(!toggle)
                        }}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6 justify-end">
                                <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm8.25 5.25a.75.75 0 01.75-.75h8.25a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                            </svg>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Navbar;