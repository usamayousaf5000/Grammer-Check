import React from 'react';
import { deleteJob } from '../../api.js';
import { Trash2 } from 'lucide-react'; // Optional icon, install with `npm install lucide-react`

const JobCard = ({ job, onDelete }) => {
  const handleDelete = async () => {
    await deleteJob(job.id);
    onDelete(job.id);
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">{job.title}</h2>
          <p className="text-sm text-gray-500 mt-1">{job.company} · {job.location}</p>
        </div>
        <button
          onClick={handleDelete}
          className="text-red-500 hover:text-red-600 transition-colors duration-200"
          title="Delete Job"
        >
          <Trash2 className="w-5 h-5" />
        </button>
      </div>
      <p className="text-gray-700 mt-4 text-sm leading-relaxed">{job.description}</p>
    </div>
  );
};

export default JobCard;
