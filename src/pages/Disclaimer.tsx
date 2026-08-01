import { ExternalRedirect } from "@/components/ExternalRedirect";
import { config } from "@/config";

export default function Disclaimer() {
  return <ExternalRedirect to={`${config.mainSiteUrl}/disclaimer`} />;
}
