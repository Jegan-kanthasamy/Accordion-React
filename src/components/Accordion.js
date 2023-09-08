import "../index.css";
import AccordionItem from "./AccordionItem";
export default function Accordion({ details }) {
  return (
    <div className="accordion">
      {details.map((e, i) => (
        <AccordionItem num={i} title={e.title} text={e.text} />
      ))}
    </div>
  );
}
