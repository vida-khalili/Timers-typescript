import { useTimerContext } from "../store/timers-context";
import Timer from "./Timer";

const Timers = () => {
  const { timers } = useTimerContext();
  return (
    <ul className="d-flex align-items-center justify-content-center flex-wrap gap-2 p-0 m-0">
      {timers.map((timer, index) => (
        <li key={index}>
          <Timer {...timer} />
        </li>
      ))}
    </ul>
  );
};

export default Timers;
