import uploadIcon from "../assets/uploadIcon.png"
import {useState} from "react";

// file upload window for the file uploading at right bottom (dash part)
export default function FileUploadWindow({setUploadFiles, allFiles = []}) {
    // set for listening cursor is drag over window or not
    const [isDragOver, setIsDragOver] = useState(false)
    // listening uploaded file
    const uploadedFileChanged = (event) => {
        // passing file's object to useState's uploadFile
        const newFiles = Array.from(event.target.files)
        // pass data to App.js's handleNewFiles
        setUploadFiles(newFiles)
    }
    // listening dragging over coming action
    const handleDragOver = (event) => {
        event.preventDefault()
        setIsDragOver(true);
        // console.log("file is moving!")
    }
    // listening dragging leaving action
    const handleDragLeave = (event) => {
        event.preventDefault()
        setIsDragOver(false);
        // console.log("file is moving!")
    }
    const handleFileDrop = (event) => {
        event.preventDefault()
        const getDroppedFiles = Array.from(event.dataTransfer.files)
        setIsDragOver(false);
        // console.log("file is dropped!")
        // console.log(getDroppedFiles)
        setUploadFiles(getDroppedFiles)
    }
    return (
        <>
            {/*use label to trigger an invisible input*/}
            <input
                type="file"
                id="file-upload"
                style={{display: 'none'}}
                multiple
                onChange={uploadedFileChanged}
            />
            <label htmlFor="file-upload"
                   className={`upload-window-entity ${isDragOver ? "drag-over" : ""}`}
                   onDragOver={handleDragOver}
                   onDragLeave={handleDragLeave}
                   onDrop={handleFileDrop}>
                <img alt="upload_icon.png" src={uploadIcon}/>
                <desc>Drag your resume file to this area, or click on the area to select the appropriate file to
                    upload
                </desc>
            </label>
            {/*loop allFiles*/}
            <div className="uploaded-list">
                {allFiles.map((file, index) => (
                    <div key={index} className="file-item">
                        <span>{file.name}</span>
                        <span>{(file.size / 1024).toFixed(1)} KB</span>
                    </div>
                ))}
            </div>
        </>
    )
}


