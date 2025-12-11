import './App.css';
import uploadYourResume from "./assets/uploadYourResume.png"
import FileUploadWindow from "./features/fileUpload";
import ProgressBar from "./features/progressBar";
import StandardButton from "./features/standardButton";
import {useState} from "react";

export default function App() {
    // set file upload useState at app.js, for handling `finish` button
    // uploadedFiles: the files uploaded
    const [uploadedFiles, setUploadedFiles] = useState([])
    // for passing `allFiles` other sub-component while `allFiles` is changed
    const [allFiles, setAllFiles] = useState([])
    // when new files about to upload, receive data from FileUploadWindow's setUploadFiles
    const handleNewFiles = (newFiles) => {
        const allFiles = [...uploadedFiles, ...newFiles]
        setAllFiles(prev => [...prev, ...newFiles])
        setUploadedFiles(allFiles)
        // `allFiles` represents the committed result
        // console.log('New Files:', newFiles)
        // console.log('All Files:', allFiles)
    }

    return (
        <div className="App">
            {/*1. main content frame of page*/}
            <div className="Text-content">
                {/*2. left top header*/}
                <h1>Finish!<br/>Upload Your Resume</h1>
                {/*3. description text for header*/}
                <desc>Upload your resume, the platform will help you parse and optimize, you can also skip this step
                </desc>
            </div>
            {/*4. right part: upload file*/}
            <div className="Upload-content">
                <div className="White-panel">
                    {/*5. component: an upload window*/}
                    <div className="White-panel-title">
                        <h1>Upload File</h1>
                    </div>
                    {/*6. upload window*/}
                    <div className="White-panel-upload-window">
                        <FileUploadWindow setUploadFiles={handleNewFiles} allFiles={allFiles}>
                        </FileUploadWindow>
                    </div>
                    {/*7. button for step*/}
                    <div className="White-panel-button">
                        <StandardButton id={1} name="Last Step" available={0}></StandardButton>
                        <StandardButton id={2} name="Finish" available={1}></StandardButton>
                    </div>
                    {/*8. progress bar*/}
                    <ProgressBar></ProgressBar>
                </div>
            </div>
            {/*9. image decoration at bottom left*/}
            <img name="uploadYourResume"
                 className="Image-upload-your-resume"
                 src={uploadYourResume}
                 alt="uploadYourResume.png"/>
        </div>
    );
}

