import { useState } from "react";
import "../index.css";
import AccordionItem from "./AccordionItem";

export default function Accordion({ details }) {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <div className="accordion">
      {details.map((e, i) => (
        <AccordionItem
          num={i}
          title={e.title}
          text={e.text}
          curOpen={curOpen}
          onOpen={setCurOpen}
        />
      ))}
    </div>
  );
}
