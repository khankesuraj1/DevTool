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
      setError("Encoding failed");
    }
  };

  const handleDecode = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/decode", { text: input });
      setOutput(res.data.result);
      setError("");
    } catch (err) {
      setOutput("");
      setError("Decoding failed");
    }
  };

  return (
    <div>
      <textarea
        className="w-full h-32 p-2 border rounded"
        placeholder="Enter text or Base64 here"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <div className="flex gap-2 mt-2">
        <button className="bg-green-600 text-white px-4 py-2 rounded" onClick={handleEncode}>
          Encode
        </button>
        <button className="bg-yellow-500 text-white px-4 py-2 rounded" onClick={handleDecode}>
          Decode
        </button>
      </div>
      {error && <div className="text-red-500 mt-2">{error}</div>}
      {output && (
        <pre className="bg-gray-100 p-2 mt-4 overflow-auto max-h-64 border rounded">{output}</pre>
      )}
    </div>
  );
}
