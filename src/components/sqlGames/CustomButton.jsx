/* eslint-disable react/prop-types */

const CustomButton = ({ title, onClickHandler, correct }) => {
    return (
        <button className=" text-black bg-white font-bold text-black-700 hover:text-white border-none hover:bg-black-100 rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2  dark:text-black-100 dark:hover:text-white dark:hover:bg-black-100 transition-all duration-500  shadow-md"
        onClick={() => {onClickHandler()}}
        style={{
            backgroundColor: correct ? "green" : "",
            cursor: title === "Next" && !correct ? "not-allowed" : "pointer",
        }}
        >
            <h2>{title}</h2>
        </button>
    );
};

export default CustomButton;
