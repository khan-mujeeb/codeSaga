/* eslint-disable react/prop-types */
const Table = ({result, getColumnNames}) => {
    return (
        <div>
            {/* Display the result */}
            <div className=" w-max border rounded-md overflow-hidden">
                <table className="w-full">
                    <thead>
                        <tr className=" bg-gray-50">
                            {result.length > 0 &&
                                getColumnNames().map((columnName) => (
                                    <th
                                        key={columnName}
                                        className="border px-4 py-2"
                                    >
                                        {columnName}
                                    </th>
                                ))}
                        </tr>
                    </thead>
                    <tbody>
                        {result.map((student, index) => (
                            <tr key={index} className="border">
                                {getColumnNames().map((columnName) => (
                                    <td
                                        key={columnName}
                                        className="border px-4 py-2 text-white-100"
                                    >
                                        {student[columnName]}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Table;