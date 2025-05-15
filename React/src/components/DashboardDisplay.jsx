import DashBoardBox from "./DashboardBox";
import time from "../data/time";
import "../styles/dashboardbox.css";

export default function DashboardDisplay() {
  return (
    <div className="box-container">
      <DashBoardBox
        title={time[0].title}
        hours={time[0].timeframes.weekly.current}
        duration="week"
        total={time[0].timeframes.weekly.previous}
      />
      <DashBoardBox
        title={time[1].title}
        hours={time[1].timeframes.weekly.current}
        duration="week"
        total={time[1].timeframes.weekly.previous}
      />
      <DashBoardBox
        title={time[2].title}
        hours={time[2].timeframes.weekly.current}
        duration="week"
        total={time[2].timeframes.weekly.previous}
      />
      <DashBoardBox
        title={time[3].title}
        hours={time[3].timeframes.weekly.current}
        duration="week"
        total={time[3].timeframes.weekly.previous}
      />
      <DashBoardBox
        title={time[4].title}
        hours={time[4].timeframes.weekly.current}
        duration="week"
        total={time[4].timeframes.weekly.previous}
      />
      <DashBoardBox
        title={time[5].title}
        hours={time[5].timeframes.weekly.current}
        duration="week"
        total={time[5].timeframes.weekly.previous}
      />
    </div>
  );
}
