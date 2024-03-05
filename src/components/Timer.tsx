import { useEffect, useRef, useState } from "react";
import {
  useTimerContext,
  type Timer as TimerProps,
} from "../store/timers-context";
const Timer = ({ name, duration }: TimerProps) => {
  const interval = useRef<number | null>(null);
  const [remainingTime, setRemainingTime] = useState(duration * 1000);
  const { isRunning } = useTimerContext();
  if (remainingTime <= 0 && interval.current) {
    clearInterval(interval.current);
  }
  useEffect(() => {
    let timer: number;
    if (isRunning) {
      timer = setInterval(() => {
        setRemainingTime((prevTime) => {
          if (prevTime <= 0) {
            return prevTime;
          }
          return prevTime - 50;
        });
        interval.current = timer;
      }, 50);
    } else if (interval.current) {
      clearInterval(interval.current);
    }
    return () => {
      clearInterval(timer);
    };
  }, [isRunning]);

  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
  return (
    <div className="timer bg-green-800 p-4 rounded text-white  shadow">
      <p className="timer-title text-capitalize text-center">{name}</p>
      <progress max={duration * 1000} value={remainingTime} />
      <p className="text-center">{formattedRemainingTime}</p>
    </div>
  );
};

export default Timer;
