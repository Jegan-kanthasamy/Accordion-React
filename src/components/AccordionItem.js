import "../index.css";

export default function AccordionItem({ num, title, text, curOpen, onOpen }) {
  const toggle = num === curOpen;

  function handleToggle() {
    onOpen(toggle ? null : num);
  }

  return (
    <div className={`item ${toggle ? "open" : ""}`} onClick={handleToggle}>
      <p className={`number ${toggle ? "color" : ""} `}>
        {num > 8 ? num + 1 : `${0}${num + 1}`}
      </p>
      <p className={`title ${toggle ? "color" : ""} `}>{title}</p>
      <p className="icon">{toggle ? "+" : "-"}</p>
      <div className={`content-box ${toggle ? "" : "disable"}`}>
        <p>{text}</p>
      </div>
    </div>
  );
}
