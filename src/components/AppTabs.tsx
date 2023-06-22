/* eslint-disable prettier/prettier */
import { motion } from "framer-motion";
import { useState } from "react";
import { BsFillGridFill, BsTable } from "react-icons/bs";

interface TabProps {
  id: string;
  label: string;
  icon: any;
  url: string;
}

const tabs: TabProps[] = [
  { id: "g", label: "Grid", icon: <BsFillGridFill />, url: "#grid-view" },
  { id: "t", label: "Table", icon: <BsTable size={23} />, url: "#table-view" }
];

export function AppTabs(): React.ReactElement {
  const [activeTab, setActiveTab] = useState<string | undefined>(tabs[0]?.id);
  return (
    <div className="flex space-x-1 py-6">
      {tabs.map((tab) => (
        <a
          href={tab.url}
          key={tab.id}
          // eslint-disable-next-line @typescript-eslint/no-confusing-void-expression
          onClick={() => setActiveTab(tab.id)}
          className={`${
            activeTab === tab.id ? "" : "hover:text-white/60"
          } hover:bg-white/51 relative flex h-20 w-36 items-center justify-center rounded px-3 py-1.5 text-lg font-medium text-white outline-sky-400 transition duration-200 hover:text-white focus-visible:outline-2 sm:h-48 sm:w-48 sm:text-2xl `}
          style={{
            WebkitTapHighlightColor: "transparent"
          }}
        >
          {activeTab === tab.id && (
            <motion.span
              layoutId="bubble"
              className="absolute inset-0 bg-white/10"
              style={{ borderRadius: 5 }}
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          <div className="mr-1">{tab.icon}</div>
          <div className="mr-1">{tab.label}</div>
        </a>
      ))}
    </div>
  );
}
