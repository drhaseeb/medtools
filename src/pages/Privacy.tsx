import { ExternalRedirect } from "@/components/ExternalRedirect";
import { config } from "@/config";

export default function Privacy() {
  return <ExternalRedirect to={`${config.mainSiteUrl}/privacy`} />;
}
