import React from "react";
import MDEditor, { commands } from "@uiw/react-md-editor";
import { database } from "../../firebase";
import { ref, set, push } from "firebase/database";
import { data } from "autoprefixer";

export default function MarkDown({ setAddDiscussion }) {
  // database instance
  const db = database;

  // states
  const [value, setValue] = React.useState(
    "Hello Markdown! <br> use markdown to write your beatiful content"
  );
  const [title, setTitle] = React.useState("Title");

  // handlers
  const onTitleChangeHandler = (event) => {
    console.log(event.target.value);
    setTitle(event.target.value);
  };

  const onCancelChangeHandler = () => {
    setAddDiscussion(false);
  };

  const onSubmitClickHandler = () => {
    console.log(title);
    console.log(value);

    const discussionRef = ref(db, "discussion");

    // Generate a new unique key for the child
    const newDiscussionRef = push(discussionRef);

    // Define the data to be set for the new child
    const newDiscussionData = {
      id: newDiscussionRef.key,
      title: title,
      value: value,
      // Add any other properties you want for this new child
    };

    // Set the data for the new child using the generated unique key
    set(newDiscussionRef, newDiscussionData)
      .then(() => {
        console.log("New discussion item added successfully!");
      })
      .catch((error) => {
        console.error("Error adding discussion item: ", error);
      });

    // EMPTY THE INPUT FIELDS
    setTitle("");
    setValue("");
    setAddDiscussion(false);
  };

  return (
    <div className="container flex flex-col gap-4">
      <div className="flex gap-2 w-full ">
        <input
          onChange={onTitleChangeHandler}
          type="text"
          className="p-1 flex-auto rounded-md"
          placeholder="Title"
        />
        <div className="flex gap-2">
          <button
            className="rounded-md bg-gray-400 p-2"
            onClick={onCancelChangeHandler}
          >
            Cancel
          </button>
          <button
            className="rounded-md bg-green-600 p-2"
            onClick={onSubmitClickHandler}
          >
            Submit
          </button>
        </div>
      </div>

      <MDEditor
        value={value}
        onChange={setValue}
        preview="live code"
        height={500}
        components={{
          toolbar: (command, disabled, executeCommand) => {
            if (command.keyCommand === "code") {
              return (
                <button
                  aria-label="Insert code"
                  disabled={disabled}
                  onClick={(evn) => {
                    evn.stopPropagation();
                    executeCommand(command, command.groupName);
                  }}
                >
                  Code
                </button>
              );
            }
          },
        }}
      />
    </div>
  );
}
