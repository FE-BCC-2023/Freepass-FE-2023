import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import foto from "../../image/card.png"
import Swal from 'sweetalert2'

const Register = () => {
    const navigate = useNavigate()
    const [error, setError] = useState("")
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        last_name: "",
        phone: "",
        address: "",
        password_confirmation: "",
        first_name: "",
        emailError: "",
        passwordError: "",
    })

    const registData = async () => {
        await axios.post('https://tcah-angon.ruangbaca-fisipedu.my.id/api/register',
            {
                email: formData.email,
                password: formData.password,
                last_name: formData.last_name,
                phone: formData.phone,
                address: formData.address,
                password_confirmation: formData.password_confirmation,
                first_name: formData.first_name
            })
            .then(response => {
                console.log(response)
                navigate('/aktivasi')
                Swal.fire({
                    title: 'Registrasi Berhasil',
                    text: 'Silahkan Anda Memasukkan Nomor Aktivasi',
                    icon: 'success',
                    confirmButtonText: 'Oke!'
                })
            }).catch(err => {
                console.log(err)
                setError(err.response.data)
                Swal.fire({
                    title: 'Registrasi Gagal',
                    text: 'Silahkan Anda Masukkan Ulang',
                    icon: 'error',
                    confirmButtonText: 'Oke!'
                })
            })
    }

    return (
        <div className="flex flex-row">
            <img src={foto} alt="foto" className="hidden md:flex min-h-full md:w-[350px] lg:w-[500px]" />
            <div className="flex p-[50px] lg:p-[100px] flex-col">
                <h1 className="font-bold text-[24px]">Register</h1>
                <h4 className="font-normal w-[500px] text-[16px] mt-3">Let's get all you set up so you can verify your personal account and login setting up your profile</h4>
                <hr className="mt-5 w-full" />
                <div className="flex flex-row">
                    <div className="flex flex-col mt-5">
                        <label className="text-[#333F51] font-bold">First Name</label>
                        <input
                            type="text"
                            name="first_name"
                            className="w-[200px] lg:w-[300px] border rounded-md shadow-md mt-2 p-3 placeholder:-pl-[600px]"
                            placeholder="Enter your first name"
                            onChange={e => setFormData({ ...formData, first_name: e.target.value })}
                        />
                        <label>
                            <span className="mt-1 text-red-500 text-[14px]">{error?.first_name}</span>
                        </label>

                        <label className="text-[#333F51] font-bold mt-5">Phone Number</label>
                        <input
                            type="phone"
                            name="phone"
                            className="w-[200px] lg:w-[300px] border rounded-md shadow-md mt-2 p-3 placeholder:-pl-[600px]"
                            placeholder="Enter your phone number"
                            onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        />
                        <label>
                            <span className="mt-1 text-red-500 text-[14px]">{error?.phone}</span>
                        </label>

                        <label className="text-[#333F51] font-bold mt-5">Address</label>
                        <input
                            type="text"
                            name="address"
                            className="w-[200px] lg:w-[300px] border rounded-md shadow-md mt-2 p-3 placeholder:-pl-[600px]"
                            placeholder="Enter your phone number"
                            onChange={e => setFormData({ ...formData, address: e.target.value })}
                        />
                        <label>
                            <span className="mt-1 text-red-500 text-[14px]">{error?.address}</span>
                        </label>

                        <label className="text-[#333F51] font-bold mt-5">Password</label>
                        <input
                            type="password"
                            name="password"
                            className="w-[200px] lg:w-[300px] border rounded-md shadow-md mt-2 p-3 placeholder:-pl-[600px]"
                            placeholder="Enter your password"
                            onChange={e => setFormData({ ...formData, password: e.target.value })}
                        />
                        <label>
                            <span className="mt-1 text-red-500 text-[14px]">{error?.password}</span>
                        </label>

                    </div>
                    <div className="flex flex-col mt-5 ml-[50px] lg:ml-[100px]">
                        <label className="text-[#333F51] font-bold">Last Name</label>
                        <input
                            type="text"
                            name="last_name"
                            className="w-[200px] lg:w-[300px] border rounded-md shadow-md mt-2 p-3 placeholder:-pl-[600px]"
                            placeholder="Enter your last name"
                            onChange={e => setFormData({ ...formData, last_name: e.target.value })}
                        />
                        <label>
                            <span className="mt-1 text-red-500 text-[14px]">{error?.last_name}</span>
                        </label>

                        <label className="text-[#333F51] font-bold mt-5">Email</label>
                        <input
                            type="text"
                            name="email"
                            className="w-[200px] lg:w-[300px] border rounded-md shadow-md mt-2 p-3 placeholder:-pl-[600px]"
                            placeholder="Enter your email"
                            onChange={e => setFormData({ ...formData, email: e.target.value })}
                        />
                        <label>
                            <span className="mt-1 text-red-500 text-[14px]">{error?.email}</span>
                        </label>

                        <label className="text-[#333F51] font-bold mt-5">Confirm Password</label>
                        <input
                            type="password"
                            name="password_confirmation"
                            className="w-[200px] lg:w-[300px] border rounded-md shadow-md mt-2 p-3 placeholder:-pl-[600px]"
                            placeholder="Enter your password"
                            onChange={e => setFormData({ ...formData, password_confirmation: e.target.value })}
                        />
                        <label>
                            <span className="mt-1 text-red-500 text-[14px]">{error?.password_confirmation}</span>
                        </label>

                    </div>
                </div>
                <div>
                    <button type="submit" onClick={registData} className="bg-[#22C55E] mt-[20px] mb-3 text-white p-3 rounded-lg ">Create Account</button>
                    <h4 className="text-[14px] font-medium">Already have an account? <span className="text-[#22C55E] hover:text-[#1eae53]"><a href="/">Login</a></span></h4>
                </div>
            </div>
        </div>
    );
}

export default Register
    ;