
const Heading = ({title, subTitle}) => {
    return (
        <div className="flex justify-center items-center flex-col space-y-2 pb-6">
            <h2 className="font-semibold text-3xl tracking-tight">{title}</h2>
            <p className="text-xl text-[#6b7280] leading-3">
                {subTitle}
            </p>
        </div>
    );
};

export default Heading;
