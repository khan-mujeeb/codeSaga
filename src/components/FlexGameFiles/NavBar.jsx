/* eslint-disable react/prop-types */
import PropTypes from "prop-types";

const NavBar = ({ levelData, discussionClicked , currentLevel, setDiscussionClicked}) => {
    // state to update level number
    // const [level, setLevel] = React.useState(1);

    return (
        <div className="flex justify-around items-center h-20 bg-navBarBg text-white text-lg font-bold">
            <h2 className="flex text-3xl"><span className="text-green-400 cursor-pointer">Flex</span>🌎 </h2>

            
            <div className="flex gap-1">

                
                <h2>Level </h2>
                <h2>{levelData?.[currentLevel]?.Level}</h2>
            </div>

            <h1 style={
                {
                    color: discussionClicked ? "green" : "white",
                    cursor: "pointer" 
                }
            } onClick={() => setDiscussionClicked(true)} >Discussion</h1>

        </div>
    );
};

// NavBar.propTypes = {
//     level: PropTypes.number.isRequired, 
//     onLevelChangeHandler: PropTypes.func.isRequired,
//     discussionClicked: PropTypes.bool.isRequired,
//     setDiscussionClicked: PropTypes.func.isRequired,

// };

export default NavBar;
