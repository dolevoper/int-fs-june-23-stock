import React, { useState, ChangeEvent, FormEvent } from "react";
import 'tailwindcss/base';
import 'tailwindcss/components';
import 'tailwindcss/utilities';

export function App() {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    category: ""
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <main className="flex justify-center items-center bg-gradient-to-br from-sky-400 via-lightgray-400 
          to-lime-300 h-[100vh] w-full">
      <section className="w-full md:max-w-[500px] p-4 flex flex-col text-center item-center justify-center 
            md:px-10 lg:p-24 h-full lg:h-[500px] bg-white bg-opacity-20 backdrop-blur-lg drop-shadow-lg 
            rounded text-zinc-700">
        <h1 className="text-4xl fornt-thin">Stock: add or edit items<span className="font-black">NOW!</span></h1>
        <form onSubmit={handleSubmit} className="mt-4">
          <div className="flex flex-col mb-4">
            <label htmlFor="id" className="mb-1">ID:</label>
            <input 
              type="number" 
              id="id" 
              name="id" 
              value={formData.id} 
              onChange={handleChange} 
              className="px-2 py-1 rounded-md border-2 bg-slate-200 border-white"
              required 
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="name" className="mb-1">Name:</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              className="px-2 py-1 rounded-md border-2 bg-slate-200 border-white"
              required 
            />
          </div>
          <div className="flex flex-col mb-4">
            <label htmlFor="category" className="mb-1">Category:</label>
            <input 
              type="text" 
              id="category" 
              name="category" 
              value={formData.category} 
              onChange={handleChange} 
              className="px-2 py-1 rounded-md border-2 bg-slate-200 border-white"
              required 
            />
          </div>
          <button type="submit" className="rounded-md border-2 border-zinc-100 hover:border-zinc-500 
            hover:text-zinc-500 text-zinc-100 px-4 py-2 cursor-pointer">
            Submit
          </button>
        </form>
      </section>
    </main>
  );
}
