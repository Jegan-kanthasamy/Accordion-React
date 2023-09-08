import { useState } from "react";
import "../index.css";
export default function AccordionItem({ num, title, text }) {
  const [toggle, setToggle] = useState(true);
  return (
    <div
      className={`item ${toggle ? "" : "open"}`}
      onClick={e => setToggle(!toggle)}
    >
      <p className="number">{num > 9 ? num : `${0}${num + 1}`}</p>
      <p className="title">{title}</p>
      <p className="icon">-</p>
      <div className={`content-box ${toggle ? "disable" : ""}`}>
        <p>{text}</p>
      </div>
    </div>
  );
}
