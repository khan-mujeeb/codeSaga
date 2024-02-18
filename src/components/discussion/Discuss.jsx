import MarkDown from "./MarkDown";
import { database } from "../../firebase";
import { ref } from "firebase/database";
import { useState, useEffect } from "react";
import { onValue } from "firebase/database";
import PreviewMarkdown from "./PreviewMarkdown";
import plus from "../../assets/img/plus.svg";

const Discuss = () => {
  const db = database;

  const [addDiscussion, setAddDiscussion] = useState(false);
  const [discussionData, setDiscussionData] = useState([]);

  const loadDiscussionData = async () => {
    const discussionRef = ref(db, "discussion");

    console.log(discussionRef);

    // Listen for changes in the "discussion" node
    onValue(
      discussionRef,
      (snapshot) => {
        const data = snapshot.val();
        // Update state with the retrieved data
        console.log(data, "inside snap");
        if (data) {
          const dataArray = Object.entries(data).map(([key, value]) => ({
            id: key, // Use the Firebase-generated key as the ID
            ...value,
          }));
          setDiscussionData(dataArray);
        }
      },
      (error) => {
        console.error("Error reading discussion data: ", error);
      }
    );
  };

  useEffect(() => {
    loadDiscussionData();
  });

  return (
    <div className="bg-mainBg h-full">
      {/* list container */}
      {addDiscussion ? null : (
        <div className="flex flex-col p-5 gap-4 justify-center items-center">
          <div
            onClick={() => setAddDiscussion(true)}
            className=" text-green-400 font-bold  p-2 bg-slate-600 rounded-md flex place-self-center gap-3  w-[85%]"
          >
            <img src={plus} className="h-6 w-6 inline-block" alt="plus" />
            Share your thought
          </div>

          {/* list */}
          <div className="flex justify-center">
            <ul className="bg-mainBg w-full flex-col items-center justify-center">
              {discussionData.map((item) => (
                <li key={item.id}>
                  <div className="flex flex-col items-center m-1 w-[1250px] bg-white p-4 rounded-lg">
                    <h1 className="flex w-[1222px] p-2 bg-slate-200 font-semibold text-2xl">
                      {item.title}
                    </h1>
                    <PreviewMarkdown value={item.value} />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {addDiscussion ? (
        <div className="flex w-full justify-center items-center p-4">
          <MarkDown
            className="w-full bg-yellow-50"
            addDiscussion={addDiscussion}
            setAddDiscussion={setAddDiscussion}
          />
        </div>
      ) : null}
    </div>
  );
};

export default Discuss;
