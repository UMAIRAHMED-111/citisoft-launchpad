import { Check, Sparkles } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type CardProps = { className?: string };

const Badge = ({
  children,
  tone = "green",
}: {
  children: string;
  tone?: "green" | "deep" | "plain" | "amber";
}) => (
  <span
    className={cn(
      "inline-flex shrink-0 items-center rounded-full px-2 py-0.5 text-[10px] font-medium sm:text-[11px]",
      tone === "green" && "bg-[#dcfce7] text-[#166534]",
      tone === "deep" && "bg-deep text-cream-soft",
      tone === "plain" && "bg-white text-deep",
      tone === "amber" && "bg-[#fbefe6] text-[#ea4e03]"
    )}
  >
    {children}
  </span>
);

const Shell = ({
  className,
  children,
}: CardProps & { children: ReactNode }) => (
  <div
    className={cn(
      "glass-card w-full max-w-[320px] rounded-2xl p-3.5 text-left sm:max-w-[340px] sm:p-4",
      className
    )}
  >
    {children}
  </div>
);

const Header = ({
  title,
  sub,
  badge,
}: {
  title: string;
  sub: string;
  badge: ReactNode;
}) => (
  <div className="mb-3 flex items-start justify-between gap-3">
    <div className="min-w-0">
      <p className="truncate text-[13px] font-semibold text-foreground sm:text-sm">
        {title}
      </p>
      <p className="mt-0.5 text-[11px] text-[#8a8a8a]">{sub}</p>
    </div>
    {badge}
  </div>
);

export const AuditCard = ({ className }: CardProps) => (
  <Shell className={className}>
    <Header
      title="Ops Opportunity Audit"
      sub="90-day roadmap"
      badge={<Badge>Prioritized</Badge>}
    />
    <div className="space-y-1.5">
      {[
        ["Invoice → payment automation", "Now", "deep"],
        ["Exception routing for AP", "Next", "plain"],
        ["Portfolio reporting layer", "Later", "plain"],
      ].map(([label, phase, tone]) => (
        <div
          key={label}
          className="glass-row flex items-center justify-between gap-3 rounded-lg px-3 py-2"
        >
          <span className="truncate text-[12px] text-[#3b342c]">{label}</span>
          <Badge tone={tone as "deep" | "plain"}>{phase}</Badge>
        </div>
      ))}
    </div>
  </Shell>
);

export const WorkshopCard = ({ className }: CardProps) => (
  <Shell className={className}>
    <Header
      title="Ops Systems Workshop"
      sub="Week 2 of 4 · Finance team"
      badge={<Badge>Live</Badge>}
    />
    <div className="flex items-center justify-between text-[11px] text-[#3b342c]">
      <span>Course progress</span>
      <span className="font-medium">50%</span>
    </div>
    <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-white/60">
      <div className="h-full w-1/2 rounded-full bg-primary" />
    </div>
    <div className="mt-3 flex items-center gap-2">
      <div className="flex -space-x-1.5">
        {["JD", "MK", "AS", "RM"].map((i) => (
          <span
            key={i}
            className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-[#d3ecfa] text-[8px] font-semibold text-deep"
          >
            {i}
          </span>
        ))}
      </div>
      <span className="text-[11px] text-[#8a8a8a]">+8 teammates enrolled</span>
    </div>
  </Shell>
);

export const AgentCard = ({ className }: CardProps) => (
  <Shell className={className}>
    <div className="mb-3 flex items-start justify-between gap-3">
      <div className="flex items-center gap-2.5">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-deep text-[10px] font-semibold text-cream-soft">
          IA
        </span>
        <div>
          <p className="text-[13px] font-semibold text-foreground sm:text-sm">
            Invoice agent
          </p>
          <p className="text-[11px] text-[#8a8a8a]">Run #4821</p>
        </div>
      </div>
      <Badge>Auto-resolved</Badge>
    </div>
    <div className="glass-row rounded-lg px-3 py-2.5">
      <p className="flex items-center gap-1.5 text-[11px] font-medium text-deep">
        <Sparkles className="h-3 w-3" />
        Drafted by agent
      </p>
      <p className="mt-1 text-[12px] leading-snug text-[#3b342c]">
        Matched invoice #4821 to PO-058 and queued the $4,280.00 payment for
        your approval.
      </p>
    </div>
    <div className="mt-3 grid grid-cols-2 gap-2">
      <span className="rounded-lg bg-primary py-2 text-center text-[12px] font-medium text-cream-soft">
        Approve & send
      </span>
      <span className="rounded-lg bg-white/80 py-2 text-center text-[12px] font-medium text-foreground">
        Edit
      </span>
    </div>
  </Shell>
);

export const GrowthCard = ({ className }: CardProps) => (
  <Shell className={className}>
    <Header
      title="Growth pipeline"
      sub="This week · HubSpot"
      badge={<Badge>Live</Badge>}
    />
    <div className="space-y-1.5">
      {[
        ["Qualified inbound", "14", "Now"],
        ["Demos booked", "6", "Next"],
        ["Closed-won", "2", "Won"],
      ].map(([label, value, phase]) => (
        <div
          key={label}
          className="glass-row flex items-center justify-between gap-3 rounded-lg px-3 py-2"
        >
          <span className="truncate text-[12px] text-[#3b342c]">{label}</span>
          <div className="flex items-center gap-2">
            <span className="text-[12px] font-semibold tabular-nums text-foreground">
              {value}
            </span>
            <Badge tone={phase === "Won" ? "green" : phase === "Now" ? "deep" : "plain"}>
              {phase}
            </Badge>
          </div>
        </div>
      ))}
    </div>
  </Shell>
);

export const DiscoverCard = ({ className }: CardProps) => (
  <Shell className={className}>
    <Header
      title="Discovery findings"
      sub="12 interviews · 6 systems mapped"
      badge={<Badge tone="amber">3 hotspots</Badge>}
    />
    <div className="space-y-1.5">
      {[
        ["Manual PO matching", "14 hrs / wk"],
        ["Card reconciliation", "9 hrs / wk"],
        ["Vendor onboarding", "6 hrs / wk"],
      ].map(([label, cost]) => (
        <div
          key={label}
          className="glass-row flex items-center justify-between gap-3 rounded-lg px-3 py-2"
        >
          <span className="truncate text-[12px] text-[#3b342c]">{label}</span>
          <span className="font-label shrink-0 !text-[10px] text-[#ea4e03]">
            {cost}
          </span>
        </div>
      ))}
    </div>
  </Shell>
);

export const DesignCard = ({ className }: CardProps) => (
  <Shell className={className}>
    <Header
      title="Solution architecture"
      sub="Scope agreed · v2"
      badge={<Badge tone="deep">Signed off</Badge>}
    />
    <div className="space-y-1.5">
      {[
        ["Your ERP + bank feeds", "Source"],
        ["Matching & exception agent", "Build"],
        ["Approval queue in Slack", "Surface"],
      ].map(([label, layer], i) => (
        <div key={label}>
          <div className="glass-row flex items-center justify-between gap-3 rounded-lg px-3 py-2">
            <span className="truncate text-[12px] text-[#3b342c]">{label}</span>
            <span className="font-label shrink-0 !text-[10px] text-primary">
              {layer}
            </span>
          </div>
          {i < 2 && <div className="mx-auto h-1.5 w-px bg-primary/40" />}
        </div>
      ))}
    </div>
  </Shell>
);

export const DeployCard = ({ className }: CardProps) => (
  <Shell className={className}>
    <Header
      title="Production monitor"
      sub="Last 30 days"
      badge={<Badge>Healthy</Badge>}
    />
    <div className="grid grid-cols-3 gap-1.5">
      {[
        ["1,284", "Invoices run"],
        ["96%", "Auto-matched"],
        ["0", "Failed runs"],
      ].map(([value, label]) => (
        <div key={label} className="glass-row rounded-lg px-2 py-2">
          <p className="text-[15px] font-semibold tabular-nums text-foreground">
            {value}
          </p>
          <p className="text-[10px] text-[#8a8a8a]">{label}</p>
        </div>
      ))}
    </div>
    <p className="mt-3 flex items-center gap-1.5 text-[11px] text-[#3b342c]">
      <Check className="h-3 w-3 text-[#166534]" />
      Team trained · tuning review every month
    </p>
  </Shell>
);
