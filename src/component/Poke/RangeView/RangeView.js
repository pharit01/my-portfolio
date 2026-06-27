import "./RangeView.css";

function RangeView({ value = 0, max = 255, variant = "default" }) {
  const pct = Math.max(
    0,
    Math.min(100, (parseInt(value, 10) / parseInt(max, 10)) * 100)
  );

  return (
    <div
      className={`range-view range-view-${variant}`}
      style={{ "--percent": `${pct}%` }}
    />
  );
}

export default RangeView;
