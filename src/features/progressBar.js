import CheckIcon from "../assets/CheckIcon.png"


// progress bar for the step progress at right bottom
export default function ProgressBar() {
    return (
        // the whole progress bar wrapper
        <div className="Withe-panel-progress-bar">
            {/*progress bar's blue line, represent which step we arrived*/}
            <div className="Progress-bar-line-did"></div>
            {/*progress bar's circle wrapper, including numbered circle*/}
            <div className="Progress-bar-circle-wrapper">
                {/*progress bar's independent circle*/}
                <div className="Progress-bar-circle">
                    <img className="Finished-icon" src={CheckIcon} alt="finished.ico"></img>
                </div>
                <div className="Progress-bar-circle">
                    {/*use 'if' counting*/}
                    <img className="Finished-icon" src={CheckIcon} alt="finished.ico"></img>
                </div>
                <div className="Progress-bar-circle">
                    {/*use 'if' counting*/}
                    <div className="Step-icon">3</div>
                </div>
            </div>
            {/*progress bar's gray line, represent the whole step*/}
            <div className="Progress-bar-line"></div>
        </div>
    )
}
