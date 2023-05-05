import clsx from "clsx";

const phase1 = {
  name: "Phase 1",
  state: "completed",
  points: [
    "Wallet Connector",
    "NFT Character Builder",
    "Core Gameplay Loop",
    "Multiplayer Support",
    "Multiplayer Maps",
    "Closed Beta",
  ],
};

const phase2 = {
  name: "Phase 2",
  state: "in-progress",
  points: [
    "Battle Royale Game Mode",
    "Custom Lobbies",
    "Post Production",
    "New Weapons and Items",
    "New NFT Collections",
    "Open Beta",
  ],
};

const phase3 = {
  name: "Phase 3",
  state: "not-started",
  points: [
    "Multi Chain Wallet Integration",
    "Desktop and Mobile Versions",
    "Chain Specific Content",
    "NFT Attire System",
    "Tournaments",
    "Live Launch",
  ],
};

const phase4 = {
  name: "Phase 4",
  state: "not-started",
  points: [
    "Governance Token",
    "Player Driven Content",
    "DAO Token",
    "New PVE Content",
    "Cross Chain League",
  ],
};

function HeaderBox({
  className,
  content,
}: {
  className: string;
  content: { name: string; state: string; points: string[] };
}) {
  className = clsx(
    "flex justify-center items-center border border-orange-300 rounded-md shadow-lg font-logo text-2xl transition ease-in-out hover:bg-white/10 hover:border-white duration-300",
    className,
    { "text-orange-300/80": content.state === "completed" },
    {
      "shadow-2xl shadow-orange-400/50 animate-text bg-gradient-to-r from-stone-100 via-orange-300 to-stone-100 bg-clip-text text-transparent font-black transition ease-in-out hover:shadow-white":
        content.state === "in-progress",
    }
  );

  return <div className={className}>{content.name}</div>;
}

function ContentBox({
  className,
  content,
}: {
  className: string;
  content: { name: string; state: string; points: string[] };
}) {
  className = clsx(
    "border border-orange-300 rounded-md shadow-lg row-span-2 px-12 py-4 leading-8 mb-10 header:row-span-3 header:mb-0 transition ease-in-out hover:bg-white/10 hover:border-white duration-300",
    className,
    { "text-orange-300/80": content.state === "completed" },
    {
      "shadow-2xl shadow-orange-400/80 transition ease-in-out hover:shadow-white":
        content.state === "in-progress",
    }
  );

  return (
    <div className={className}>
      <ul className="list-disc ">
        {content.points.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function HorizontalDivider({ className }: { className: string }) {
  className = clsx("relative", className);

  return (
    <div className={className} aria-hidden="true">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-orange-300" />
      </div>
    </div>
  );
}

function VerticalDivider({ className }: { className: string }) {
  className = clsx("relative", className);

  return (
    <div className={className} aria-hidden="true">
      <div className="absolute inset-0 flex justify-center">
        <div className="h-full border-l border-orange-300" />
      </div>
    </div>
  );
}

export function RoadmapGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-[45%_10%_45%] header:grid-cols-[30%_5%_30%_5%_30%] grid-rows-9 sm:grid-rows-[10%_auto_10%_auto_10%_auto_10%_auto] header:grid-rows-[10%_auto_10%_auto_10%_auto_10%_auto_auto] gap-0 text-white sm:pt-8">
      <HeaderBox className="order-[1] header:order-[3]" content={phase1} />
      <ContentBox className="order-[3] header:order-[1]" content={phase1} />

      <HeaderBox
        className="order-[5] col-start-1 header:col-start-3"
        content={phase2}
      />
      <ContentBox className="order-[7]" content={phase2} />
      <HeaderBox
        className="order-[9] col-start-1 header:order-[11] header:col-start-3"
        content={phase3}
      />
      <ContentBox
        className=" order-[11] header:order-[9] header:col-start-1"
        content={phase3}
      />
      <HeaderBox
        className="order-[13] col-start-1 header:col-start-3"
        content={phase4}
      />
      <ContentBox className="order-[15]" content={phase4} />
      <HorizontalDivider className="hidden sm:block order-[2]" />
      <HorizontalDivider className="hidden sm:block order-[6]" />
      <HorizontalDivider className="hidden sm:block order-[10]" />
      <HorizontalDivider className="hidden sm:block order-[14]" />
      <VerticalDivider className="hidden sm:block order-[4] header:col-start-3" />
      <VerticalDivider className="hidden sm:block order-[8] header:col-start-3" />
      <VerticalDivider className="hidden sm:block order-[12] header:col-start-3" />
    </div>
  );
}
