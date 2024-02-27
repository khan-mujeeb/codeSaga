/* eslint-disable react/prop-types */
const Table = ({ data }) => {
    // console.log("table");
    // console.log(data);
    return (
        <div className=" h-96 overflow-y-auto  w-[90%]">
            {data && (
                <table className="border border-white text-white-100 font-semibold">
                    <thead>
                        <tr>
                            {data.length > 0 && data[0].officer_id && (
                                <th className="border border-white p-2">
                                    officer_id
                                </th>
                            )}
                            {data.length > 0 && data[0].first_name && (
                                <th className="border border-white p-2">
                                    first_name
                                </th>
                            )}
                            {data.length > 0 && data[0].last_name && (
                                <th className="border border-white p-2">
                                    last_name
                                </th>
                            )}
                            {data.length > 0 && data[0].rank && (
                                <th className="border border-white p-2">
                                    rank
                                </th>
                            )}
                            {data.length > 0 && data[0].department && (
                                <th className="border border-white p-2">
                                    department
                                </th>
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((officer, index) => (
                            <tr key={index}>
                                {officer.officer_id && (
                                    <td className="border border-white p-2">
                                        {officer.officer_id}
                                    </td>
                                )}
                                {officer.first_name && (
                                    <td className="border border-white p-2">
                                        {officer.first_name}
                                    </td>
                                )}
                                {officer.last_name && (
                                    <td className="border border-white p-2">
                                        {officer.last_name}
                                    </td>
                                )}

                                {officer.rank && (
                                    <td className="border border-white p-2">
                                        {officer.rank}
                                    </td>
                                )}
                                {officer.department && (
                                    <td className="border border-white p-2">
                                        {officer.department}
                                    </td>
                                )}

                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default Table;
