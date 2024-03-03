import { type ReactNode, createContext, useContext, useReducer } from "react";

type Timer = {
  name: string;
  duration: number;
};

type TimersState = {
  isRunning: boolean;
  timers: Timer[];
};
const initialState: TimersState = {
  isRunning: true,
  timers: [],
};

type TimersContextValue = TimersState & {
  addTimer: (timerData: Timer) => void;
  startTimer: () => void;
  stopTimer: () => void;
};
const TimersContext = createContext<TimersContextValue | null>(null);

export const useTimerContext = () => {
  const timerCtx = useContext(TimersContext);
  if (timerCtx === null) {
    throw new Error("Error ! context is null");
  }
  return timerCtx;
};

type TimerContextProviderProps = {
  children: ReactNode;
};

type AddTimerAction = {
  type: "ADD_TIMER";
  payload: Timer;
};
type StartTimersAction = {
  type: "START_TIMERS";
};
type StopTimersAction = {
  type: "STOP_TIMERS";
};

type Action = AddTimerAction | StartTimersAction | StopTimersAction;
const timersReducer = (state: TimersState, action: Action): TimersState => {
  if (action.type === "START_TIMERS") {
    return { ...state, isRunning: true };
  }
  if (action.type === "STOP_TIMERS") {
    return {
      ...state,
      isRunning: false,
    };
  }
  if (action.type === "ADD_TIMER") {
    return {
      ...state,
      timers: [
        ...state.timers,
        { name: action.payload.name, duration: action.payload.duration },
      ],
    };
  }
  return state;
};
const TimerContextProvider = ({ children }: TimerContextProviderProps) => {
  const [timersState, dispatch] = useReducer(timersReducer, initialState);
  const ctx: TimersContextValue = {
    timers: timersState.timers,
    isRunning: timersState.isRunning,
    addTimer(timerData) {
      dispatch({ type: "ADD_TIMER", payload: timerData });
    },
    startTimer() {
      dispatch({ type: "START_TIMERS" });
    },
    stopTimer() {
      dispatch({ type: "STOP_TIMERS" });
    },
  };
  return (
    <TimersContext.Provider value={ctx}>{children}</TimersContext.Provider>
  );
};

export default TimerContextProvider;
