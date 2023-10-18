import React from "react";

const NavBar =  () => {    
        
        // state to update level number
        const [level, setLevel] = React.useState(1);

        return <div className="flex justify-around items-center h-20 bg-blue-950 text-white text-lg font-bold">

            <h2>Code Here</h2>

            {/* level div */}
            <div className="flex gap-1">
                <h2>Level </h2>
                <h2>{level}</h2>
            </div>

            <h2>See Here</h2>

        </div>;
    }


export default NavBar;
