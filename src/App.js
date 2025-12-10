import './App.css';
import uploadYourResume from "./assets/uploadYourResume.png"
import FileUploadWindow from "./features/fileUpload";

export default function App() {
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
                        <FileUploadWindow></FileUploadWindow>
                    </div>
                    {/*7. button for step*/}
                    <div className="White-panel-button">
                        <StandardButton name="Last Step" available={0}></StandardButton>
                        <StandardButton name="Finish" available={1}></StandardButton>
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

function StandardButton(props) {
    const {name, available} = props
    return (
        // control name and available
        <button className="Standard-button"
                disabled={available === 0}
        >
            {name}
        </button>
    )
}

function ProgressBar(){
    return(
        <div className="Withe-panel-progress-bar">
            111
        </div>
    )
}
