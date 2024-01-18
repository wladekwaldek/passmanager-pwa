export default function ListElement(props) {
  return (
    <div>
      <span>{props.field}</span>
      <span style={{ color: "#9F5AED" }}>{props.value}</span>
    </div>
  );
}
