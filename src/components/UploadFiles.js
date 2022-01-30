import React, { useState } from "react";

function UploadFiles({ children }) {
  const [files, setFiles] = useState("");

  const handleChange = (e) => {
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8"); //check
    fileReader.onload = (e) => {
      setFiles(e.target.result);
    };
  };

  return (
    <div>
      <h1>Upload Json file - Example</h1>

      <input type="file" onChange={handleChange} />
      <br />
      {"uploaded file content -- " + files}
    </div>
  );
}

export default UploadFiles;

// https://www.npmjs.com/package/jspdf
