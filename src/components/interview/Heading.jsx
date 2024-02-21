const Heading = ({ title, subTitle }) => {
    return (
        <div className=" text-center flex items-center justify-center flex-col heading_container  gap-3 ">
            <h2 className="font-semibold text-3xl mock__AI__title tracking-tight">
                MOCK-AI
            </h2>
            <p className="text-xl text-[#6b7280] leading-3">
                Master your interviews with AI-guided practice
            </p>
        </div>
    );
};

export default Heading;
