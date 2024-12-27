import { useEffect, useState } from "react";
import Buttons from "./Buttons";  // Import Buttons component

const Timer = () => {
    const [seconds, setSeconds] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const [activity, setActivity] = useState(null);
    const [totalTimes, setTotalTimes] = useState({});



    

    useEffect(() => {
        let timer;
        if (isRunning) {
            timer = setInterval(() => {
                setSeconds((prev) => prev + 1);
            }, 1000);
        }
        return () => clearInterval(timer);
    }, [isRunning]);

    const handleReset = () => {
        setIsRunning(false);
        setSeconds(0);
    };

    const handleStart = () => {
        handleReset();
        if (!activity) return;
        setIsRunning(true);
        if (totalTimes[activity]) {
            const totalTimes2 = totalTimes[activity] + seconds;
            setTotalTimes((prev) => ({
                ...prev,
                [activity]: totalTimes2,
            }));
        } else {
            setTotalTimes((prev) => ({
                ...prev,
                [activity]: 0,
            }));
        }
    };

    const handleStop = () => {
        if (!activity) return;
        setIsRunning(false);
        const totalTimes1 = totalTimes[activity] + seconds;
        setTotalTimes((prev) => ({
            ...prev,
            [activity]: totalTimes1,
        }));
    };

    const formatTime = (seconds) => {
        const hours = Math.floor(seconds / 3600);
        const mins = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;
        return `${String(hours).padStart(2, "0")}:${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
    };

    const handleActivityChange = (newActivity) => {
        handleReset();
        setActivity(newActivity);
    };

    return (
        <>
            <div className="timer-container">
                <div className="activity-text">
                    <p>Activity: {activity}</p>
                </div>
                <div className="timer-text">
                    <p>{formatTime(seconds)}</p>
                </div>
            </div>
            <Buttons
                onStop={handleStop}
                onStart={handleStart}
                onReset={handleReset}
                onSelectActivity={handleActivityChange}
            />
        </>
    );
};

export default Timer;
