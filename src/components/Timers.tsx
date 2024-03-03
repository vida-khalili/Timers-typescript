import { useTimerContext } from "../store/timers-context";
import Timer from "./Timer";

const Timers = () => {
  const { timers } = useTimerContext();
  return (
    <ul className="d-flex align-items-center justify-content-center">
      {timers.map((timer, index) => (
        <li key={index}>
          <Timer {...timer} />
        </li>
      ))}
    </ul>
  );
};

export default Timers;
