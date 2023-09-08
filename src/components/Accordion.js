import "../index.css";
import AccordionItem from "./AccordionItem";
export default function Accordion({ datas }) {
  return (
    <div className="accordion">
      {datas.map((e, i) => (
        <AccordionItem num={i} title={e.title} text={e.text} />
      ))}
    </div>
  );
}
