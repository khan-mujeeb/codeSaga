/* eslint-disable react/prop-types */

// eslint-disable-next-line react/prop-types
function SelectorAsset({ currentItem, nextLevel }) {
  return (
    <div id="selectorAsset" className="w-full h-[60%]">
      <div className="w-full h-full relative ">
        {currentItem.assets.map((asset, index) => {
          let positionStyle = {};
          switch (currentItem.level) {
            case "1": {
              switch (index % currentItem.assets.length) {
                case 0:
                  positionStyle = { bottom: 0, left: 0 };
                  break;
                case 1:
                  positionStyle = { bottom: 0, left: "25%" };
                  break;
                case 2:
                  positionStyle = {
                    bottom: 0,
                    left: "50%",
                  };
                  break;
                case 3:
                  positionStyle = {
                    bottom: 0,
                    left: "75%",
                  };
                  break;
                default:
                  console.log("Index not found in switch case");
                  break;
              }
              break;
            }
            case "2": {
              switch (index % currentItem.assets.length) {
                case 0:
                  positionStyle = { bottom: 0, left: 0 };
                  break;
                case 1:
                  positionStyle = { bottom: 0, left: "25%" };
                  break;
                case 2:
                  positionStyle = {
                    bottom: "38%",
                    left: "25%",
                    height: "150px",
                    width: "150px",
                    zIndex: 1,
                  };
                  break;
                case 3:
                  positionStyle = {
                    bottom: "38%",
                    left: "35%",
                    height: "150px",
                    width: "150px",
                    zIndex: 1,
                  };

                  break;
                case 4:
                  positionStyle = {
                    bottom: "0",
                    left: "50%",
                  };

                  break;
                case 5:
                  positionStyle = {
                    bottom: "0",
                    left: "75%",
                  };
                  break;
                default:
                  console.log("Index 2 not found in switch case");
                  break;
              }
              break;
            }
            case "3": {
              switch (index % currentItem.assets.length) {
                case 0:
                  positionStyle = {
                    bottom: "15%",
                    left: "10%",
                    height: "150px",
                    width: "150px",
                  };
                  break;
                case 1:
                  positionStyle = {
                    bottom: "18%",
                    left: "40%",
                    height: "150px",
                    width: "150px",
                  };
                  break;
                case 2:
                  positionStyle = {
                    bottom: "15%",
                    left: "70%",
                    height: "150px",
                    width: "150px",
                  };
                  break;

                default:
                  console.log("Index 3 not found in switch case");
                  break;
              }
              break;
            }
            case "4": {
              switch (index % currentItem.assets.length) {
                case 0:
                  positionStyle = {
                    bottom: "0",
                    left: "10%",
                    width: "30%",
                  };
                  break;
                case 1:
                  positionStyle = {
                    bottom: "20px",
                    left: "60%",
                    width: "30%",
                  };
                  break;
                case 2:
                  positionStyle = {
                    bottom: "23%",
                    left: "10%",
                    height: "150px",
                    width: "150px",
                  };
                  break;
                case 3:
                  positionStyle = {
                    bottom: "23%",
                    left: "25%",
                    height: "150px",
                    width: "150px",
                  };
                  break;
                case 4:
                  positionStyle = {
                    bottom: "45%",
                    left: "10%",
                    height: "100px",
                    width: "100px",
                  };
                  break;
                case 5:
                  positionStyle = {
                    bottom: "45%",
                    left: "16%",
                    height: "100px",
                    width: "100px",
                  };
                  break;
                case 6:
                  positionStyle = {
                    bottom: "45%",
                    left: "25%",
                    height: "100px",
                    width: "100px",
                  };
                  break;
                case 7:
                  positionStyle = {
                    bottom: "45%",
                    left: "31%",
                    height: "100px",
                    width: "100px",
                  };
                  break;
                case 8:
                  positionStyle = {
                    bottom: "45%",
                    left: "64%",
                    height: "150px",
                    width: "150px",
                  };
                  break;
                case 9:
                  positionStyle = {
                    bottom: "45%",
                    left: "75%",
                    height: "150px",
                    width: "150px",
                  };
                  break;

                default:
                  console.log("Index 4 not found in switch case");
                  break;
              }
              break;
            }
            case "5": {
              switch (index % currentItem.assets.length) {
                case 0:
                  positionStyle = {
                    bottom: "0",
                    left: "0",
                  };
                  break;
                case 1:
                  positionStyle = {
                    bottom: "0",
                    left: "25%",
                  };
                  break;
                case 2:
                  positionStyle = {
                    bottom: "0",
                    left: "50%",
                  };
                  break;
                case 3:
                  positionStyle = {
                    bottom: "0",
                    left: "75%",
                  };
                  break;

                default:
                  console.log("Index 4 not found in switch case");
                  break;
              }
              break;
            }

            default:
              console.log("Current Level not found in switch case");
              break;
          }

          return (
            <img
              key={index}
              src={asset}
              alt="ice-cream"
              className={`w-[250px] h-[250px] object-cover scale-150 absolute bottom-0 ${
                !nextLevel && currentItem.selectAsset.includes(index)
                  ? "zoom-animation"
                  : ""
              }`}
              style={positionStyle}
            />
          );
        })}
      </div>
    </div>
  );
}

export default SelectorAsset;
