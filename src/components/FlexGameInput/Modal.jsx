/* eslint-disable react/prop-types */

const Modal = ({ isOpen, onClose, content }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative bg-white p-6 rounded-md shadow-md w-[500px] leading-7 z-10">
            {content}
            <button
              onClick={onClose}
              className="absolute top-1 right-4 text-red-500 hover:text-gray-700"
            >
              x
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
