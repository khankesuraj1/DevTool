import { useState } from "react";
import axios from "axios";

export default function Base64Tool() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  const handleEncode = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/encode", { text: input });
      setOutput(res.data.result);
      setError("");
    } catch (err) {
      setOutput("");
      setError("❌ Encoding failed");
    }
  };

  const handleDecode = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/decode", { text: input });
      setOutput(res.data.result);
      setError("");
    } catch (err) {
      setOutput("");
      setError("❌ Decoding failed");
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 text-gray-700">🔐 Base64 Encoder / Decoder</h2>

      <textarea
        className="w-full h-36 p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none transition-all"
        placeholder="Enter plain text or Base64 encoded text..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <div className="flex flex-wrap gap-3 mt-4">
        <button
          className="bg-green-600 hover:bg-green-700 transition text-white font-medium px-5 py-2 rounded-lg shadow-md"
          onClick={handleEncode}
        >
          Encode
        </button>
        <button
          className="bg-yellow-500 hover:bg-yellow-600 transition text-white font-medium px-5 py-2 rounded-lg shadow-md"
          onClick={handleDecode}
        >
          Decode
        </button>
      </div>

      {error && <div className="text-red-500 mt-4 font-medium">{error}</div>}

      {output && (
        <div className="mt-6">
          <h3 className="text-md font-semibold text-gray-600 mb-2">Output:</h3>
          <pre className="bg-gray-100 text-sm p-4 rounded-lg border overflow-auto max-h-64 whitespace-pre-wrap">
            {output}
          </pre>
        </div>
      )}
    </div>
  );
}
