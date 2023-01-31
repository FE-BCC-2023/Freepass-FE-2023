import Button from "../Button/Button";

const Card = ({ img, title, body, key }: any) => {
  return (
    <div className="flex flex-col text-white w-[300px] h-[450px] text-left rounded-3xl bg-black px-8">
      <img className="h-[120px] mx-auto my-8" src={img} alt="missing img" />
      <div className="my-8 flex flex-col gap-2">
        <h1 className="text-lg font-semibold">{title}</h1>
        <h6 className="font-light text-justify w-[200px]">{body}</h6>
      </div>
      <div className="flex justify-start">
        <Button>Read More</Button>
      </div>
    </div>
  );
};

export default Card;
