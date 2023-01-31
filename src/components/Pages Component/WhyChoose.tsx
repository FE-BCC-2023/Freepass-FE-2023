import Card from "../Card/Card";
import Container from "../Container";
import Title from "../Title";
import rentalimg from "../../assets/rentalimg.png";
import trolley from "../../assets/trolley.png";
import carwash from "../../assets/carwash.png";
import logistic from "../../assets/logistic.png";

const WhyChoose = () => {
  const services = [
    {
      id: "1",
      img: rentalimg,
      title: "Rental Cars",
      body: "We are providing rental cars with best quality for our customers",
    },
    {
      id: "2",
      img: trolley,
      title: "E-Commerce",
      body: "We have e-commerce platform to buy and sell used cars",
    },
    {
      id: "3",
      img: carwash,
      title: "Cars Wash",
      body: "We have an outlet providing cars wash for our beloved customers",
    },
    {
      id: "4",
      img: logistic,
      title: "Logistic Delivery",
      body: "We providing logistic delivery to all over the world",
    },
  ];

  return (
    <Container>
      <div className="text-center py-16">
        <Title>Our Services</Title>
        <div className="items-center my-16 flex md:flex-row xl:flex-nowrap flex-col flex-wrap justify-between gap-12 md:gap-4 xl:gap-8">
          {services.map((service) => (
            <Card
              key={service.id}
              img={service.img}
              title={service.title}
              body={service.body}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default WhyChoose;
