import Button from "../Button/Button";
import aston from "../../assets/astonmartin.png";
import Container from "../Container";
import Title from "../Title";

const AboutUs = () => {
  return (
    <Container>
      <div className="flex flex-row justify-between text-white pt-32 pb-20 md:py-16">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <Title>About Us</Title>
            <h3 className="font-semibold text-lg">
              Find out briefly but informatively about us
            </h3>
          </div>
          <p className="font-semibold text-justify">
            <span className="font-logo">
              alpha <span className="font-logo text-secondary">rent</span>
            </span>{" "}
            have been ensuring for more than 15 years that provides the best car
            for you. Customer can choose variety car types from LCGC, SUV,
            Sedan, Coupe, Sports and many more. Our garage based in Bekasi but
            our outlet spread all across Indonesia, so you can look forward to
            rent a car from the best quality possible.{" "}
          </p>
          <div className="justify-start flex">
            <Button>Learn More</Button>
          </div>
        </div>
        <img className="hidden lg:flex w-1/2" src={aston} alt="missing img" />
      </div>
    </Container>
  );
};

export default AboutUs;
