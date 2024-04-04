/* eslint-disable react/prop-types */

function Introduction({ introductions, descriptions, challenge }) {
  return (
    <div
      id="introductions"
      className="w-full h-auto   bg-[#0E6D8B] text-sm space-y-2 px-6 py-6  "
    >
      <p className=" text-white">{introductions}</p>
      <p className=" text-white">{descriptions}</p>
      <p className=" text-white">{challenge}</p>
    </div>
  );
}

export default Introduction;
