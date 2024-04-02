/* eslint-disable react/prop-types */

function Introduction({ introductions, descriptions, challenge }) {
  return (
    <div
      id="introductions"
      className="w-full h-auto  bg-gray-300 text-sm space-y-2 px-6 py-6 "
    >
      <p>{introductions}</p>
      <p>{descriptions}</p>
      <p>{challenge}</p>
    </div>
  );
}

export default Introduction;
