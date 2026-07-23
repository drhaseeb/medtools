import { LegalPage } from "./Legal";
import { terms } from "@/content/legal";

export default function Terms() {
  return <LegalPage title={terms.title} sections={terms.sections} />;
}
