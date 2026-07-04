import { useState } from "react";
import "../styles/ScreenTimeWizard.css";

function ScreenTimeWizard({ close, onBack, onNext }) {

    const [hours, setHours] = useState(4);
    const [minutes, setMinutes] = useState(30);

    const increaseHour = () => {
        if (hours < 24) setHours(hours + 1);
    };

    const decreaseHour = () => {
        if (hours > 0) setHours(hours - 1);
    };

    const increaseMinute = () => {
        if (minutes < 59)
            setMinutes(minutes + 1);
    };

    const decreaseMinute = () => {
        if (minutes > 0)
            setMinutes(minutes - 1);
    };

    return (

        <div className="wizard-overlay">

            <div className="wizard-card screen-card">

                <h2>Screen Time Today</h2>

                <p className="subtitle">
                    Approximately how much screen time did you have today?
                </p>

                <div className="time-display">

                    <span>{hours}</span>

                    <small>hrs</small>

                    <span>{minutes}</span>

                    <small>mins</small>

                </div>

                <div className="time-container">

                    <div className="time-box">

                        <p>Hours</p>

                        <div className="counter">

                            <button onClick={decreaseHour}>−</button>

                            <span>{hours}</span>

                            <button onClick={increaseHour}>+</button>

                        </div>

                    </div>

                    <div className="time-box">

                        <p>Minutes</p>

                        <div className="counter">

                            <button onClick={decreaseMinute}>−</button>

                            <span>{minutes}</span>

                            <button onClick={increaseMinute}>+</button>

                        </div>

                    </div>

                </div>

                <div className="wizard-buttons">

                    <button
                        className="cancel-btn"
                        onClick={onBack}
                    >
                        ← Back
                    </button>

                    <button
                        className="next-btn"
                        onClick={() =>
                            onNext({
                                hours,
                                minutes
                            })
                        }
                    >
                        Next →
                    </button>

                </div>

            </div>

        </div>

    );

}

export default ScreenTimeWizard;