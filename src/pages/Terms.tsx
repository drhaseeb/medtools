import { ExternalRedirect } from "@/components/ExternalRedirect";
import { config } from "@/config";

export default function Terms() {
  return <ExternalRedirect to={`${config.mainSiteUrl}/terms`} />;
}
