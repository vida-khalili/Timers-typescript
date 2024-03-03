import Button from "./UI/Button/Button";
import { useTimerContext } from "../store/timers-context";

const Header = () => {
  const timerCtx = useTimerContext();

  return (
    <header className="d-flex w-100 justify-content-around align-items-center  ">
      <h1 className="text-bold">React Timers</h1>
      <Button
        className="btn btn-green text-capitalize text-white"
        onClick={timerCtx.isRunning ? timerCtx.stopTimer : timerCtx.startTimer}
      >
        {timerCtx.isRunning ? "stop" : "start"} timers
      </Button>
    </header>
  );
};

export default Header;
