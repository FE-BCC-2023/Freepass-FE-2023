import dekorbawah from '../../image/dekor bawah.png'
import dekorAtas from '../../image/Frame 14.png'
import hero from '../../image/Image Container.png'
import wave from '../../image/bg-wave.png'
import Header from "./Navbar";

const Dashboard = () => {

    return (
        <>
        {<Header/>}
            <div className="bg-[#2A3342] w-full pt-24 p-[50px] lg:p-[100px]">
                <div className="pt-20 flex lg:flex-row  justify-center w-full lg:justify-start flex-col text-white font-Poppins">
                    <div className="flex font-bold w-full flex-col lg:w-1/2">
                        <h1 className="text-[40px] lg:text-[60px]">E-libs</h1>
                        <h4 className="text-[26px] lg:text-[30px]">ELECTRONIC LIBRARIES</h4>
                        <h6 className="mt-16 mb-[150px] font-medium lg:text-[15px] text-[#BBC3CF]">"The more that you read, the more thinks you will know.<br /> The more that you learn, the more place<br /> that you'll go"</h6>
                        <div className="font-medium cursor-pointer">
                            <a href="/book" className="mr-5 w-full p-3 rounded-lg bg-[#22C55E] hover:bg-[#1baa4f]">Read Book</a>
                            <a class="bg-[#404F65] hover:bg-[#a1a7b1] p-3 rounded-lg" href="/profile">Profile</a>
                        </div>
                    </div>
                    <div className="lg:flex flex-row hidden lg:w-[400px] xl:h-[400px] xl:w-[600px] justify-end">
                        <img className="h-32 -ml-[450px] -mt-[50px] absolute" src={dekorAtas} alt="logo" />
                        <img className="" src={hero} alt="" />
                        <img className="absolute h-[90px] mt-[400px] ml-[30px]" src={dekorbawah} alt="dekor bawah" />
                    </div>
                </div>
            </div>
            <img className="w-full mb-[20px]" src={wave} alt="bawah"></img>
        </>
    );
}

export default Dashboard;