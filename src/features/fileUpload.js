import uploadIcon from "../assets/uploadIcon.png"

export default function FileUploadWindow() {
    return (
        <>
            {/*use label to trigger an invisible input*/}
            <input
                type="file"
                id="file-upload"
                style={{display: 'none'}}
                multiple
            />
            <label htmlFor="file-upload" className="upload-window-entity">
                <img alt="upload_icon.png" src={uploadIcon}/>
                <desc>Drag your resume file to this area, or click on the area to select the appropriate file to
                    upload
                </desc>
            </label>
            <div className="uploaded-list">111</div>
        </>
    )
}


