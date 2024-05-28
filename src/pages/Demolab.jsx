import React from 'react'
import Star from '../components/Back/Star.jsx'
import { NavLink } from 'react-router-dom';
import units from '../assets/CssMenuImages/units.svg'
import animate from '../assets/CssMenuImages/sql.svg'
import grid from '../assets/CssMenuImages/media.svg'
import '../styles/demolab.css'

const routesConfig = [
    {
        id: "unit",
        label: "Units",
        path: "unit",
        url: units,
    },
    {
        id: "nth-child",
        label: "Nth Child Selector",
        path: "nth-child",
        url: grid,
    },
    {
        id: "animation",
        label: "Animation",
        path: "animation",
        url: animate,
    }
];

function Demolab() {

    const rendergameList = routesConfig.map((route) => {
        return (
            <NavLink
                to={route.path}
                key={route.id}
                className={
                    "py-1 px-1 rounded-md shadow-md "
                }
            >
                {/* {route.label} */}
                <div className="w-full max-w-xs rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 duration-200 demobox">
                    <a href="#">
                        <img className="p-4 rounded-t-3xl w-80 h-40 " src={route.url} alt="product image" />
                    </a>
                    <div className="px-5 pb-5">
                        <a href="#">
                            <h5 className="text-2xl mb-3 text-center font-roboto tracking-tight text-gray-900 dark:text-white">{route.label}</h5>
                        </a>
                        
                    </div>
                </div>

            </NavLink>
        );
    });



    return (
        <>
            <Star color={"bg-black"} />
            <div className="flex justify-center items-center w-screen h-screen select-none bg-black text-white">
                <div className="w-full h-full flex flex-col  ">
                    <div className="m-1 w-screen text-violet-800 h-40 font-semibold py-1 items-center flex justify-center  text-center text-7xl drop-shadow-[4px_4px_var(--tw-shadow-color)] shadow-yellow-500">
                        DEMO LABS
                    </div>
                    <div className="flex w-screen flex-wrap px-4 gap-16 grow mt-8 text-5xl justify-center items-start ">
                        {rendergameList}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Demolab;
