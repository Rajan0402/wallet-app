export const Balance = ({ amount }) => {
  return (
    <div className="flex">
      <div className="flex font-bold">Your Balance:</div>
      <div className="ml-3">Rs.{amount}</div>
    </div>
  );
};
