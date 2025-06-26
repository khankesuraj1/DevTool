import { useState } from "react";
import TabSwitcher from "./components/TabSwitcher";
import JsonFormatter from "./components/JsonFormatter";
import Base64Tool from "./components/Base64Tool";

export default function App() {
  const [activeTab, setActiveTab] = useState("json");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          🧰 Dev Toolbox
        </h1>

        <TabSwitcher activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className="mt-6 transition-all duration-300 ease-in-out">
          {activeTab === "json" ? <JsonFormatter /> : <Base64Tool />}
        </div>
      </div>
    </div>
  );
}
