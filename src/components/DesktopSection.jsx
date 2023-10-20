import desktopImage from '../assets/desktop.svg';
import PropTypes from 'prop-types';

const  DesktopSection = ({newHeight, newWidth}) => {

    console.log("height and width " + newHeight+ " "+ newWidth);
    
    return (
        <div className="flex flex-grow w-2/3 justify-center items-center">

            {/* desktop background  */}
            <div style={
                {
                    backgroundImage: `url(${desktopImage})`,
                    backgroundRepeat: 'no-repeat',

                }
            } className="flex w-[800px] h-[600px]">

                {/* inside desktop  */}
                <div className="w-[690px] h-[350px] ml-[31px] mt-14">
                    <div 
                    
                    className="bg-orange-500 w-[30%] h-[20%]"
                    style={
                        {
                            height: newHeight,
                            width: newWidth,
                        }
                    }
                    >

                    </div>
                </div>

            </div>
        </div>
    )
            
}


DesktopSection.propTypes = {
    newHeight: PropTypes.string.isRequired, 
    newWidth: PropTypes.string.isRequired,
};

export default DesktopSection;