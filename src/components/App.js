import Accordion from "./Accordion";
import { faqs } from "./data";

export default function App() {
  return <Accordion details={faqs} />;
}
