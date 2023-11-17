import React from "react";
import MDEditor, { commands } from "@uiw/react-md-editor";

export default function PreviewMarkdown({value}) {

    return (
        <div className="container">
            <MDEditor
                value={value}
                preview="preview"
                height={100}
                
                commands={[]}
                extraCommands={[ 
                    commands.divider,
                    commands.fullscreen,
                ]}
            />
        </div>
    );
}
