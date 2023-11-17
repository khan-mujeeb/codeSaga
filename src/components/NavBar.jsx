import PropTypes from "prop-types";

const NavBar = ({level, onLevelChangeHandler}) => {
    // state to update level number
    // const [level, setLevel] = React.useState(1);

    return (
        <div className="flex justify-around items-center h-20 bg-navBarBg text-white text-lg font-bold">
            <h2 className="flex text-3xl"><span className="text-green-400">Flex</span>🌎 </h2>

            
            <div className="flex gap-1">

                
                <h2>Level </h2>
                <h2>{level}</h2>
            </div>

        </div>
    );
};

NavBar.propTypes = {
    level: PropTypes.number.isRequired, 
    onLevelChangeHandler: PropTypes.func.isRequired,
};

export default NavBar;
