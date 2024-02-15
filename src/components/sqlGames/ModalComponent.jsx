import React, { useState } from "react";
import ReactDOM from "react-dom";
import "react-responsive-modal/styles.css";
import {Modal } from "react-responsive-modal";
import CustomButton from "./CustomButton";
const ModalComponent = ({ table }) => {
    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    return (
        <div>
            <CustomButton
                title="Show Table"
                onClickHandler={onOpenModal}
            ></CustomButton>
            <Modal open={open} onClose={onCloseModal} center>
                <div className=" flex gap-2">
                    <h2 className=" font-bold">Table Name:</h2>
                    <span>Officers</span>
                </div>
                <table className="mt-5 w-full border-collapse border border-gray-300">
                    <thead className="bg-gray-200">
                        <tr>
                            <th className="p-2">officer_id</th>
                            <th className="p-2">first_name</th>
                            <th className="p-2">last_name</th>
                            <th className="p-2">rank</th>
                            <th className="p-2">department</th>
                        </tr>
                    </thead>
                    <tbody>
                        {table.map((officer) => (
                            <tr
                                key={officer.officer_id}
                                className="border-b border-gray-200"
                            >
                                <td className="p-2">{officer.officer_id}</td>
                                <td className="p-2">{officer.first_name}</td>
                                <td className="p-2">{officer.last_name}</td>
                                <td className="p-2">{officer.rank}</td>
                                <td className="p-2">{officer.department}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Modal>
        </div>
    );
};

export default ModalComponent;
