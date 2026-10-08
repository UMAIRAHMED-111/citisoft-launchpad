import Reveal from "@/components/landing/Reveal";

const tools = [
  { name: "SAP", kind: "ERP" },
  { name: "NetSuite", kind: "ERP" },
  { name: "QuickBooks", kind: "Accounting" },
  { name: "Salesforce", kind: "CRM" },
  { name: "HubSpot", kind: "CRM" },
  { name: "Slack", kind: "Chat" },
  { name: "Microsoft Teams", kind: "Chat" },
  { name: "Azure", kind: "Cloud" },
  { name: "AWS", kind: "Cloud" },
  { name: "Power Automate", kind: "Workflow" },
  { name: "UiPath", kind: "RPA" },
  { name: "SQL Server", kind: "Data" },
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
                className="soft-card flex items-center justify-between gap-2 rounded-xl bg-white px-4 py-3.5"
              >
                <span className="min-w-0">
                  <span className="block truncate text-[15px] font-medium text-foreground">
                    {tool.name}
                  </span>
                  <span className="mt-0.5 block text-[12px] text-muted-foreground">
                    {tool.kind}
                  </span>
                </span>
                <span
                  className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#22a55a]"
                  aria-hidden="true"
                />
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
};

export default StackStrip;
