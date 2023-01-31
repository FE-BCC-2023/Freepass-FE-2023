import Backdrop from "./Backdrop";

const Popup = () => {
  return (
    <div>
      <Backdrop />
      <div className="absolute flex flex-col top-[200vh] left-[30vw] text-center text-white bg-[#2F6568] w-[500px] py-4 rounded-xl border-2 border-[#2F6568] font-poppins z-20">
        <h1 className="mb-6 text-3xl">
          Halo! kamu pengen edit atau delete to do list kamu?
        </h1>
      </div>
    </div>
  );
};

export default Popup;
