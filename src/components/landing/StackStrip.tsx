import sapLogo from "@/assets/logos/sap.svg";
import quickbooksLogo from "@/assets/logos/quickbooks.svg";
import sageLogo from "@/assets/logos/sage.svg";
import salesforceLogo from "@/assets/logos/salesforce.svg";
import hubspotLogo from "@/assets/logos/hubspot.svg";
import slackLogo from "@/assets/logos/slack.svg";
import azureLogo from "@/assets/logos/azure.svg";
import awsLogo from "@/assets/logos/aws.svg";
import snowflakeLogo from "@/assets/logos/snowflake.svg";
import sqlserverLogo from "@/assets/logos/sqlserver.svg";
import uipathLogo from "@/assets/logos/uipath.svg";
import claudeLogo from "@/assets/logos/claude.svg";
import Reveal from "@/components/landing/Reveal";

const tools = [
  { name: "SAP", kind: "ERP", logo: sapLogo },
  { name: "QuickBooks", kind: "Accounting", logo: quickbooksLogo },
  { name: "Sage", kind: "Accounting", logo: sageLogo },
  { name: "Salesforce", kind: "CRM", logo: salesforceLogo },
  { name: "HubSpot", kind: "CRM", logo: hubspotLogo },
  { name: "Slack", kind: "Chat", logo: slackLogo },
  { name: "Azure", kind: "Cloud", logo: azureLogo },
  { name: "AWS", kind: "Cloud", logo: awsLogo },
  { name: "Snowflake", kind: "Data", logo: snowflakeLogo },
  { name: "SQL Server", kind: "Data", logo: sqlserverLogo },
  { name: "UiPath", kind: "RPA", logo: uipathLogo },
  { name: "Claude", kind: "AI", logo: claudeLogo },
];

const StackStrip = () => {
  return (
    <section className="bg-cream py-20 sm:py-28">
      <div className="container mx-auto grid gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.3fr] lg:items-center lg:gap-20 lg:px-10">
        <Reveal>
          <h2 className="text-[clamp(2.2rem,4.8vw,3.5rem)] leading-[1.04] tracking-[-0.015em] text-foreground">
            We build into the tools you <span className="accent-word">already</span> run
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
            No rip and replace. Agents and automations plug into your ERP, CRM,
            chat, and data layer — so your team keeps working where it already
            works.
          </p>
        </Reveal>

        <Reveal delay={90}>
          <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3">
            {tools.map((tool) => (
              <li
                key={tool.name}
                className="soft-card flex items-center gap-3 rounded-xl bg-white px-3.5 py-3 sm:px-4"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#f6f3ee]">
                  <img src={tool.logo} alt="" className="h-6 w-6 object-contain" loading="lazy" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-[15px] font-medium text-foreground">
                    {tool.name}
                  </span>
                  <span className="mt-0.5 block text-[12px] text-muted-foreground">
                    {tool.kind}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
};

export default StackStrip;
