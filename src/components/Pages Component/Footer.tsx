import Container from "../Container";
import ig from "../../assets/instagram.png";
import wa from "../../assets/whatsapp.png";
import linkedin from "../../assets/linkedin.png";
import location from "../../assets/location.png";

const Footer = () => {
  return (
    <Container>
      <div className="flex flex-row  pt-48 pb-8 text-white">
        <div className="flex flex-col gap-2">
          <div className="flex flex-row justify-between">
            <h1 className="font-logo ">
              alpha <span className="text-secondary font-logo">rent</span>
            </h1>
            <div className="flex flex-row justify-evenly gap-4">
              <img src={location} alt="missing img" />
              <img src={ig} alt="missing img" />
              <img src={wa} alt="missing img" />
              <img src={linkedin} alt="missing img" />
            </div>
          </div>
          <h6 className="font-light text-sm">
            &#169; Alfatih Rizqi Alfian. All Rights Reserved
          </h6>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
