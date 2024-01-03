import PropTypes from "prop-types";

const  DesktopCodeSection = ({onHeightChange, onWidthChange}) => {

    const OnHeightChangeHandler = (event) => {
        // console.log(event.target.value);
        onHeightChange(event.target.value);
    };
    const OnWidthChangeHandler = (event) => {
        // console.log(event.target.value);
        onWidthChange(event.target.value);
    };
    
    return (
        <div className="flex flex-grow w-1/3 justify-center items-center">
            <div className="flex flex-col bg-UnitCodeEditor w-[80%] h-[90%] rounded-3xl p-6 gap-6">

                <h1 className="text-3xl font-extrabold text-center">Unit<span className="ml-2 text-green-800">Universe</span></h1>

                {/* level component */}
                <div className="flex gap-4 text-2xl justify-center text-white">
                    <p className="">◄</p>
                    <div className="flex gap-2">
                        <p>Level</p>
                        <p>1</p>
                    </div>
                    <p>►</p>
                </div>

                <h2 className="text-xl font-bold text-white">Task</h2>
                <p className=" font-bold text-lg text-white">Set the height and width of <span className=" text-orange-700">Orange Container</span> such that it cover whole Desktop 🖥️</p>

                {/* controler  */}
                <div className="flex flex-col gap-5 w-full">

                    <div className="flex gap-2 items-center"> <label htmlFor="height" className="text-white" id>Height</label>
                    <input id="height" onChange={OnHeightChangeHandler} className="w-32 h-10 rounded-2xl bg-gray-700 text-white p-2" type="text" placeholder="20%" /></div>

                    <div className="flex gap-2 items-center"><label htmlFor="width" className="text-white">Width</label>
                    <input id="width" onChange={OnWidthChangeHandler} className="w-32 h-10 rounded-2xl bg-gray-700 text-white p-2" type="text" placeholder="30%" /></div>
                </div>

            </div>
        </div>
    )
            
}

DesktopCodeSection.propTypes = {
    onHeightChange: PropTypes.func.isRequired, 
    onWidthChange: PropTypes.func.isRequired,
};

export default DesktopCodeSection;