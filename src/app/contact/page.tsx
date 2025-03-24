"use client";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: "",
    phone: ""
  });


  const handleChange = (event: any) => {
    const { name, value } = event.target;

    setFormData((prev: any) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Form Data Submitted:", formData);
  };
  return (
    <div>
      <h1>Contact Form</h1>
      <form className="w-3xl bg-gray-600 p-4 rounded-md flex flex-col gap-4" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <p>Name</p>
          <input className="bg-white text-black w-full" name="name" type="text" value={formData.name} onChange={handleChange} />
        </div>
        <div className="flex flex-col">
          <p>Email</p>
          <input className="bg-white text-black w-full" name="email" type="text" value={formData.email} onChange={handleChange} />
        </div>
        <div className="flex flex-col">
          <p>Phone</p>
          <input className="bg-white text-black w-full" name="phone" type="text" value={formData.phone} onChange={handleChange} />
        </div>

        <button className="bg-blue-500 p-2 rounded-md cursor-pointer hover:opacity-50" type="submit">Send</button>
      </form>
    </div>
  );
}
