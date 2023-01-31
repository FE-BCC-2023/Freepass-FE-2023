import ReviewCard from "../Card/ReviewCard";
import Container from "../Container";
import Title from "../Title";

const CustomerReview = () => {
  const reviews = [
    {
      nama: "Alexander",
      lokasi: "Surabaya",
      review:
        "The box this comes in is 5 kilometer by 6 yard and weights 18 gram. I saw one of these in Surabaya and I bought one. My neighbor Donna has one of these. She works as a butler and she says it looks humongous. This rental cars works certainly well. It energetically improves my golf by a lot.",
    },
    {
      nama: "Sacha",
      lokasi: "Depok",
      review:
        "alpha rent keren banget!. fleksibel dan kualitas mobil yang dikasi juga de best!.",
    },
  ];
  return (
    <Container>
      <div className="text-white flex flex-col gap-8 md:gap-16 mb-16">
        <div className="flex md:flex-row flex-col gap-4 md:gap-0">
          <Title>Let's our customers talk about us</Title>
          <h6 className="font-light text-justify">
            These are some testimonials from customers who are satisfied with
            the products and services we have provided
          </h6>
        </div>
        <div className="flex md:flex-row flex-col flex-wrap lg:flex-nowrap justify-evenly gap-8">
          {reviews.map((review) => (
            <ReviewCard
              reviewText={review.review}
              customer={review.nama}
              location={review.lokasi}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default CustomerReview;
