import "react";

export default function DashBoardBox(props) {
  const { color, title, hours, duration, total, Icon } = props;

  return (
    <div
      className="background-art"
      style={{ backgroundColor: color, position: "relative" }}
    >
      {Icon && (
        <div
          className="icon-wrapper"
          style={{ position: "absolute", top: "1px", right: "10px" }}
        >
          <Icon height="50px" />
        </div>
      )}
      <div className="box-content">
        <h1 className="title">{title}</h1>
        <h2 className="current-total">{hours} hrs</h2>
        <p className="last-total">
          Last {duration} - {total} hrs
        </p>
      </div>
    </div>
  );
}
