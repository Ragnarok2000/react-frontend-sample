import React, { useState } from "react";
import { getItem } from "../api";
import toast from "react-hot-toast";

export default function GetItem() {
  const [id, setId] = useState("");
  const [item, setItem] = useState(null);

  const fetchItem = async () => {
    try {
      const res = await getItem(id);
      setItem(res.data);
      toast.success("Item fetched successfully!", { duration: 5000 });
    } catch {
      toast.error("Item not found", { duration: 3000 });
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Get Item</h2>
      <div className="space-y-3">
        <input
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          placeholder="ID"
          onChange={e => setId(e.target.value)}
        />
        <button
          onClick={fetchItem}
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
        >
          Fetch Item
        </button>
      </div>

      {item && (
        <div className="mt-4 p-4 border rounded bg-gray-50">
          <h3 className="font-bold text-lg mb-2">Item Details</h3>
          <p><span className="font-semibold">ID:</span> {item.id}</p>
          <p><span className="font-semibold">Name:</span> {item.name}</p>
          <p><span className="font-semibold">Description:</span> {item.description}</p>
          <p><span className="font-semibold">Price:</span> {item.price}</p>
        </div>
      )}
    </div>
  );
}