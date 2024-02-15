/* eslint-disable react/prop-types */

const SqlQueryEditor = ({query, inputHandler}) => {
    return (
            <div className="flex h-52 rounded-e-md">
                <div className=" text-white p-3 font-semibold bg-sqlSideBar rounded-l-md ">
                    {Array.from({ length: 8 }, (_, index) => (
                        <div key={index + 1}>{index + 1}</div>
                    ))}
                </div>

                <textarea
                    value={query}
                    className=" bg-sqlInput h-full w-full border-none outline-none resize-none p-3 text-white rounded-r-md"
                    autoFocus
                    autoCapitalize="none"
                    placeholder="Enter your query here..."
                    onChange={inputHandler}
                />
            </div>
    );
};

export default SqlQueryEditor;
