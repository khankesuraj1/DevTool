import { useState } from "react";
import TabSwitcher from "./components/TabSwitcher";
import JsonFormatter from "./components/JsonFormatter";
import Base64Tool from "./components/Base64Tool";

export default function App() {
  const [activeTab, setActiveTab] = useState("json");

  return (
    <div className="p-4 font-sans max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center">Dev Toolbox</h1>
      <TabSwitcher activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === "json" ? <JsonFormatter /> : <Base64Tool />}
    </div>
  );
}
