/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import FlexLevel1 from "../FlexGameOutput/FlexLevel1";
import FlexLevel2 from "../FlexGameOutput/FlexLevel2";
import FlexLevel3 from "../FlexGameOutput/FlexLevel3";

const OutputSection = ({ currentLevel, pondStyles, levelData }) => {
  let currentLevelComponent;

  switch (currentLevel) {
    case 0:
      currentLevelComponent = (
        <FlexLevel1 levelData={levelData} pondStyles={pondStyles.flexLevel1} />
      );
      break;
    case 1:
      currentLevelComponent = (
        <FlexLevel2 levelData={levelData} pondStyles={pondStyles.flexLevel2} />
      );
      break;
    case 2:
      currentLevelComponent = <FlexLevel3 />;
      break;
    // Add more cases for other levels if needed

    default:
      currentLevelComponent = null; // Handle unknown levels
  }

  return (
    <div className="flex  bg-mainBg h-full  w-1/2 justify-center items-center">
      {currentLevelComponent}
    </div>
  );
};

// OutputSection.propTypes = {
//   currentLevel: PropTypes.number.isRequired,
//   pondStyles: PropTypes.object.isRequired,
//   levelData: PropTypes.array.isRequired,
// };

export default OutputSection;
