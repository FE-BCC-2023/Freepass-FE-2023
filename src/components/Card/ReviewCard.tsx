import stars from "../../assets/stars.png";

const ReviewCard = ({ reviewText, customer, location }: any) => {
  return (
    <div className="py-4 px-8 bg-black w-[400px] md:w-[625px] h-[400px] rounded-3xl flex flex-col justify-evenly">
      <div className="flex justify-start">
        <img src={stars} alt="missing img" />
      </div>
      <p className="text-justify font-light">{reviewText}</p>
      <div className="flex flex-col gap-2">
        <h4 className="font-semibold text-lg">{customer}</h4>
        <h6 className="font-light">{location}</h6>
      </div>
    </div>
  );
};

export default ReviewCard;
