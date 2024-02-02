const Button = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-full border rounded-lg px-3 py-3 mb-3 text-white bg-gray-800 hover:bg-gray-900  hover:text-black focus:outline-none focus:ring-4 focus:ring-gray-400 font-medium text-sm"
    >
      {label}
    </button>
  );
};

export default Button;
