/* eslint-disable react/prop-types */

function Heading({ data }) {
  return (
    <div
      id="heading"
      className="w-full flex bg-[#043C52] justify-center items-center gap-24  h-[10%] px-6 py-4 "
    >
      <h1 className=" text-2xl text-white font-bold">CSS SCOOPS</h1>
      <h5 className=" text-white">Level {data} of 5</h5>
    </div>
  );
}

export default Heading;
