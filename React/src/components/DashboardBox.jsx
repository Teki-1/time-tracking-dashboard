import "react";

export default function DashBoardBox(props) {
  return (
    <div className="background-art" style={{ backgorundColor: props.color }}>
      <div className="box-content">
        <h1 className="title">{props.title}</h1>
        <h2 className="current-total">{props.hours}</h2>
        <p className="last-total">
          Last {props.duration} - {props.total}
        </p>
      </div>
    </div>
  );
}
