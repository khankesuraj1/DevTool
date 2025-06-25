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
      setError(err.response?.data?.error || "Something went wrong");
    }
  };

  return (
    <div>
      <textarea
        className="w-full h-40 p-2 border rounded"
        placeholder="Paste your JSON here"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="bg-blue-500 text-white px-4 py-2 mt-2 rounded" onClick={handleFormat}>
        Format JSON
      </button>
      {error && <div className="text-red-500 mt-2">{error}</div>}
      {output && (
        <pre className="bg-gray-100 p-2 mt-4 overflow-auto max-h-64 border rounded">{output}</pre>
      )}
    </div>
  );
}
