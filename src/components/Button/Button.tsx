import { Link } from "react-router-dom";

const Button = (props: any, direct: string) => {
  return (
    <Link to={direct}>
      <div className="bg-secondary text-center text-white rounded-xl text-lg px-12 py-3 2xl:px-16 2xl:py-4 2xl:text-xl font-bold">
        {props.children}
      </div>
    </Link>
  );
};

export default Button;
