import logo from '../../image/logo atas.png'
import axios from 'axios'
import { useState } from 'react'
import Swal from 'sweetalert2'

const Login = () => {
    const [serverError, setServerError] = useState("");
    const [form, setForm] = useState({
        email: "",
        password: "",
        emailError: "",
        passwordError: ""
    })

    const sendData = async () => {
        await axios.post('https://tcah-angon.ruangbaca-fisipedu.my.id/api/login',
            {
                email: form.email,
                password: form.password
            })
            .then(response => {
                console.log(response)
                Swal.fire({
                    title: 'Login Berhasil',
                    text: 'Anda Berhasil Login',
                    icon: 'success',
                    confirmButtonText: 'Oke!'
                })
                localStorage.setItem('auth', response.data.token)
                window.location.reload();
            }).catch(err => {
                console.log(err)
                setServerError(err.response.data)
                Swal.fire({
                    title: 'Login Gagal',
                    text: 'Silahkan Anda Login Ulang',
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
                    <div className="flex flex-col py-[50px] bg-gray-100 border shadow-sm rounded-lg px-[30px] vsm:px-[40px] sm:px-[80px] xl:px-[100px] ">
                        <div className="flex flex-col items-center">
                            <h1 className="xl:text-[30px] text-[24px] font-bold">Join our libraries</h1>
                            <h3 className="text-[#556987] xl:text-[18px] text-[14px] font-medium items-start">Start your free Trial</h3>
                        </div>
                        <div className="flex justify-center flex-col">
                            <label className="mt-10 text-[14px] lg:text-[16px] text-[#333F51] font-bold">Email</label>
                            <input
                                value={form.email}
                                onChange={e => setForm({ ...form, email: e.target.value })}
                                type="text"
                                required
                                className="w-[280px] vsm:w-[350px] rounded-md shadow-md outline-none focus:ring-2 focus:ring-blue-500 mt-2 p-3 placeholder:text-[14px] placeholder:-pl-[600px]"
                                placeholder="Enter your email adress" />
                            <label>
                                <span className="mt-1 text-red-500 text-[14px]">{serverError?.email}</span>
                            </label>

                            <label className="mt-8 text-[14px] lg:text-[16px] text-[#333F51] font-bold">Password</label>
                            <input
                                value={form.password}
                                onChange={e => setForm({ ...form, password: e.target.value })}
                                type="password"
                                required
                                className="w-full rounded-md shadow-md mt-2 p-3 outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-[14px] placeholder:-pl-[600px]"
                                placeholder="Enter your password" />
                            <label>
                                <span className="mt-1 text-red-500 text-[14px]">{serverError?.password}</span>
                            </label>

                            <button
                                type="submit"
                                onClick={sendData}
                                className="bg-[#22C55E] p-2 xl:p-3 mt-9 rounded-lg w-full text-white hover:bg-[#1eae53]">Get Started</button>
                            <label >
                                <span className="mt-2 text-red-500 justify-center flex text-[14px]">{serverError?.message}</span>
                            </label>

                            <h4 className="text-center mt-3 text-[12px] text-[#8896AB]">OR</h4>
                            <h4 className="text-center mt-2 text-[14px] font-medium">Doesn't have an account? <span className="text-[#22C55E] hover:text-[#1eae53]"><a href="/register">Sign Up</a></span></h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;