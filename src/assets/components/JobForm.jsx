import React, { useState } from 'react';
import { addJob, runScraper } from '../../api.js';
import { PlusCircle, PlayCircle } from 'lucide-react'; // Optional: install with `npm install lucide-react`

const JobForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    location: '',
    description: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addJob(formData);
    setFormData({ title: '', company: '', location: '', description: '' });
    window.location.reload();
  };

  const handleScrape = async () => {
    await runScraper();
    window.location.reload();
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 max-w-2xl mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Add Job Listing</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid sm:grid-cols-2 gap-4">
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Job Title"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Company"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Location"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 col-span-full sm:col-span-2"
            required
          />
        </div>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Job Description"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 min-h-[120px]"
        />
        <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
          <button
            type="submit"
            className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-black text-white px-5 py-3 rounded-lg transition-colors duration-300 cursor-pointer"
          >
            <PlusCircle className="w-5 h-5" />
            Add Job
          </button>
          <button
            onClick={handleScrape}
            type="button"
            className="flex items-center justify-center gap-2 bg-green-600 hover:bg-red-700 text-white px-5 py-3 rounded-lg transition-colors duration-300 cursor-pointer"
          >
            <PlayCircle className="w-5 h-5" />
            Run Scraper
          </button>

        </div>
      </form>
    </div>
  );
};

export default JobForm;
