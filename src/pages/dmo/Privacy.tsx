import { LegalPage } from "./Legal";
import { privacy } from "@/content/legal";

export default function Privacy() {
  return (
    <LegalPage
      title={privacy.title}
      sections={privacy.sections}
      lastUpdated={privacy.lastUpdated}
    />
  );
}
