import React from "react";
import { Stepper } from "react-form-stepper";

const LevelStepper = ({level}) => {
    return (
        <div className="-z-1">
            <Stepper
                steps={[
                    { label: "" },
                    { label: "" },
                    { label: "" },
                    { label: "" },
                    { label: "" },
                    { label: "" },
                    { label: "" },
                    { label: "" },
                    { label: "" },
                    { label: "" },
                    { label: "" },
                    { label: "" },
                    { label: "" },
                    { label: "" },
                    { label: "" },
                ]}
                activeStep={level}
                styleConfig= {{
                    
                    activeBgColor: "#65A30D",
                    completedBgColor: "#1F2937",
                    inactiveBgColor: "#e0e0e0",
                    activeTextColor: "#1F2937",
                    completedTextColor: "#fff",
                    inactiveTextColor: "#1F2937",
                    size: "3rem",
                    circleFontSize: "1rem",
                    titleFontSize: "1rem",
                    circleTop: "-0.5rem",
                    titleTop: "1rem",
                    circleBorderWidth: "0.2rem",
                    circleBorderColor: "#fff",
                    titleFontWeight: "500",
                    circleFontWeight: "500",
                }}
            />
        </div>
    );
};

export default LevelStepper;
