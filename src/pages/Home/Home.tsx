import Button from "../../components/Button/Button";
import Navbar from "../../components/Navbar/Navbar";
import gstore from "../../assets/gstore.png";
import mouse from "../../assets/mouse.png";
import AboutUs from "../../components/Pages Component/AboutUs";
import WhyChoose from "../../components/Pages Component/WhyChoose";
import CustomerReview from "../../components/Pages Component/CustomerReview";
import Footer from "../../components/Pages Component/Footer";

const Home = () => {
  return (
    <>
      <div className="bg-landing-bg bg-cover h-[100vh] text-white font-mont">
        <Navbar />
        <div className="flex flex-col mx-16 md:my-8">
          <div className="flex flex-col justify-evenly gap-8">
            <div className="flex flex-row gap-48">
              <div className="flex-col hidden lg:flex">
                <h1 className="text-6xl font-bold">100 +</h1>
                <h6>Types of vehicle</h6>
              </div>
              <h1 className="font-semibold font-logo text-5xl md:text-6xl lg:w-1/2 text-center">
                Rent the best cars
              </h1>
            </div>
            <div className="flex flex-row justify-between">
              <div className="flex-col hidden lg:flex">
                <h1 className="text-6xl font-bold">10k +</h1>
                <h6>Clients served</h6>
              </div>
              <p className="lg:w-1/4 text-justify font-light leading-8">
                We want you to have a stress-free rental experience, so we make
                it easy to hire a car - by providing simple search tools,
                customer, reviews and plenty of pick-up locations across the
                city
              </p>
            </div>
          </div>
          <div className="flex flex-col mx-auto md:mx-0 gap-6 md:flex-row mt-8 md:mt-24 lg:mt-16 justify-between">
            <div className="flex flex-row gap-2">
              <img src={gstore} alt="missing img" />
              <div className="flex flex-col font-semibold gap-2">
                <h6 className="">Available on the</h6>
                <h1 className="text-2xl">Google Play Store</h1>
              </div>
            </div>
            <div className="lg:mr-36">
              <Button direct="/bookings">Rent Cars</Button>
            </div>
            {/* Scroll down animate */}
            <div className="hidden lg:flex h-1/2 animate-bounce lg:mt-2">
              <img src={mouse} alt="missing img" />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-dark">
        <AboutUs />
        <WhyChoose/>
        <CustomerReview/>
        <Footer/>
      </div>
    </>
  );
};

export default Home;
