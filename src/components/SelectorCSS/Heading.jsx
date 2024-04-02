/* eslint-disable react/prop-types */

function Heading({ data }) {
  return (
    <div
      id="heading"
      className="w-full flex justify-between h-[10%] px-6 py-4 border-b-2 border-wavy"
    >
      <h1 className=" text-2xl  font-bold">CSS SCOOPS</h1>
      <h5>Level {data} of 5</h5>
    </div>
  );
}

export default Heading;
