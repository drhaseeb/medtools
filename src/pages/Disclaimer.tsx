import { LegalPage } from "./Legal";
import { disclaimer } from "@/content/legal";

export default function Disclaimer() {
  return <LegalPage title={disclaimer.title} sections={disclaimer.sections} />;
}
