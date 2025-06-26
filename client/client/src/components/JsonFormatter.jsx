import { useState } from "react";
import axios from "axios";

export default function JsonFormatter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const handleFormat = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/format-json", { text: input });
      setOutput(res.data.formatted);
      setError("");
    } catch (err) {
      setOutput("");
      setError(err.response?.data?.error || "❌ Invalid JSON input");
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 text-gray-700">🧾 JSON Formatter</h2>

      <textarea
        className="w-full h-40 p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none transition-all"
        placeholder="Paste raw JSON here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button
        className="bg-blue-600 hover:bg-blue-700 transition text-white font-medium px-5 py-2 mt-4 rounded-lg shadow-md"
        onClick={handleFormat}
      >
        Format JSON
      </button>

      {error && <div className="text-red-500 mt-4 font-medium">{error}</div>}

      {output && (
        <div className="mt-6">
          <h3 className="text-md font-semibold text-gray-600 mb-2">Formatted Output:</h3>
          <pre className="bg-gray-100 text-sm p-4 rounded-lg border overflow-auto max-h-64 whitespace-pre-wrap">
            {output}
          </pre>
        </div>
      )}
    </div>
  );
}
