import React from "react";
import "../App.css";
import { useNavigate } from "react-router-dom";

const Buttons = ({ onStop, onStart, onReset, onSelectActivity }) => {
    const navigate = useNavigate();

    const handleActivityClick = (event) => {
        const activity = event.target.value;
        onSelectActivity(activity);
    };

    const handleGraphClick = () => {
        navigate("/chart", { state: { totalTimes: {} } }); // Pass your data here when you navigate to the chart page
    };

    return (
        <>
            <div className="activity-buttons-container">
                <button value="JavaScript" onClick={handleActivityClick}>JavaScript</button>
                <button value="Java" onClick={handleActivityClick}>Java</button>
                <button value="C++" onClick={handleActivityClick}>C++</button>
                <button value="Python" onClick={handleActivityClick}>Python</button>
                <button value="Go" onClick={handleActivityClick}>Go</button>
            </div>
            <div className="action-buttons-container">
                <button id="stop-button" onClick={onStop}>Stop</button>
                <button id="start-button" onClick={onStart}>Start</button>
                <button id="reset-button" onClick={onReset}>Restart</button>
                <button onClick={handleGraphClick}>Graph</button>
            </div>
        </>
    );
};

export default Buttons;
