import { useState } from "react";
import "../index.css";
export default function AccordionItem({ num, title, text }) {
  const [toggle, setToggle] = useState(true);
  return (
    <div
      className={`item ${toggle ? "" : "open"}`}
      onClick={e => setToggle(!toggle)}
    >
      <p className={`number ${toggle ? "" : "color"} `}>
        {num > 8 ? num + 1 : `${0}${num + 1}`}
      </p>
      <p className={`title ${toggle ? "" : "color"} `}>{title}</p>
      <p className="icon">{toggle ? "+" : "-"}</p>
      <div className={`content-box ${toggle ? "disable" : ""}`}>
        <p>{text}</p>
      </div>
    </div>
  );
}
