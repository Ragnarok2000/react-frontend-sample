import React, { useState } from "react";
import { addItem } from "../api";
import toast from "react-hot-toast";

export default function AddItemForm() {
  const [form, setForm] = useState({ name: "", description: "", price: "" });

  const handleSubmit = async () => {
    try {
      const res = await addItem(form);
      toast.success("Item added with ID: " + res.data.id, { duration: 5000 }); // stays 5s
    // eslint-disable-next-line no-unused-vars
    } catch (err) {
      toast.error("Error adding item", { duration: 3000 }); // stays 3s
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Add Item</h2>
      <div className="space-y-3">
        <input
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Name"
          onChange={e => setForm({ ...form, name: e.target.value })}
        />
        <input
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Description"
          onChange={e => setForm({ ...form, description: e.target.value })}
        />
        <input
          className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Price"
          type="number"
          onChange={e => setForm({ ...form, price: e.target.value })}
        />
        <button
          onClick={handleSubmit}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          Add Item
        </button>
      </div>
    </div>
  );
}