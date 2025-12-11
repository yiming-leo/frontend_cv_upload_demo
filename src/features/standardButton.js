

// standard button for the step clicking at right bottom
export default function StandardButton(props) {
    const {id, name, available} = props
    // for handling button's onclick event
    const handleButtonClick = () => {
        // check available or not
        if (!available) {
            console.log(`Button "${name}" is unavailable`)
            return;
        }
        // judge witch one been clicked
        if (id === 1) {
            console.log(`Button "${name}" has been clicked, last step`)
        } else if (id === 2) {
            console.log(`Button "${name}" has been clicked, next step`)
        }
    }
    return (
        // control name and available
        <button className="Standard-button"
                disabled={available === 0}
                onClick={handleButtonClick}
        >
            {name}
        </button>
    )
}
