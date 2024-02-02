const InputBox = ({ label, placeholder }) => {
  return (
    <div>
      <label htmlFor="firsname" className="mt-3 font-medium">
        {label}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full border-2 rounded-md px-2 py-1 mt-2 mb-3"
      />
    </div>
  );
};

export default InputBox;
