import { useState } from "react";
import "../index.css";
export default function AccordionItem({ num, title, text }) {
  const [toggle, setToggle] = useState(true);
  return (
    <div
      className={`item ${toggle ? "" : "open"}`}
      onClick={e => setToggle(!toggle)}
    >
      <p className="number">{num}</p>
      <p className="title">{title}</p>
      <p className="icon">-</p>
      <div className={`content-box ${toggle ? "disable" : ""}`}>
        <p>{text}</p>
      </div>
    </div>
  );
}
