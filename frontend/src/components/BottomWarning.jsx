import { Link } from "react-router-dom";

const BottomWarning = ({ label, to, buttonText }) => {
  return (
    <p className="text-center">
      {label}{" "}
      <Link to={to} className="underline">
        {buttonText}
      </Link>
    </p>
  );
};

export default BottomWarning;
