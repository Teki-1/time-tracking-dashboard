import DashBoardBox from "./DashboardBox";
import time from "../data/time";
import "../styles/dashboardbox.css";
import Work from "../assets/images/icon-work.svg?react";
import Study from "../assets/images/icon-study.svg?react";
import Social from "../assets/images/icon-Social.svg?react";
import SelfCare from "../assets/images/icon-self-care.svg?react";
import Play from "../assets/images/icon-play.svg?react";
import Excercise from "../assets/images/icon-exercise.svg?react";

export default function DashboardDisplay() {
  return (
    <div className="box-container">
      <DashBoardBox
        color="hsl(15, 100%, 70%)"
        title={time[0].title}
        hours={time[0].timeframes.weekly.current}
        duration="week"
        total={time[0].timeframes.weekly.previous}
        Icon={Work}
      />
      <DashBoardBox
        color="hsl(195, 74%, 62%)"
        title={time[1].title}
        hours={time[1].timeframes.weekly.current}
        duration="week"
        total={time[1].timeframes.weekly.previous}
        Icon={Play}
      />
      <DashBoardBox
        color="hsl(348, 100%, 68%)"
        title={time[2].title}
        hours={time[2].timeframes.weekly.current}
        duration="week"
        total={time[2].timeframes.weekly.previous}
        Icon={Study}
      />
      <DashBoardBox
        color="hsl(145, 58%, 55%)"
        title={time[3].title}
        hours={time[3].timeframes.weekly.current}
        duration="week"
        total={time[3].timeframes.weekly.previous}
        Icon={Excercise}
      />
      <DashBoardBox
        color="hsl(264, 64%, 52%)"
        title={time[4].title}
        hours={time[4].timeframes.weekly.current}
        duration="week"
        total={time[4].timeframes.weekly.previous}
        Icon={Social}
      />
      <DashBoardBox
        color="hsl(43, 84%, 65%)"
        title={time[5].title}
        hours={time[5].timeframes.weekly.current}
        duration="week"
        total={time[5].timeframes.weekly.previous}
        Icon={SelfCare}
      />
    </div>
  );
}
