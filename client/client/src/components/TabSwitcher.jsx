export default function TabSwitcher({ activeTab, setActiveTab }) {
  return (
    <div className="flex gap-4 mb-4 justify-center">
      <button
        className={`px-4 py-2 rounded ${activeTab === "json" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        onClick={() => setActiveTab("json")}
      >
        JSON Formatter
      </button>
      <button
        className={`px-4 py-2 rounded ${activeTab === "base64" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        onClick={() => setActiveTab("base64")}
      >
        Base64 Encoder/Decoder
      </button>
    </div>
  );
}
