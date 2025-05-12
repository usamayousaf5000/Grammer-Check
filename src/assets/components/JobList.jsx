import React, { useState, useEffect } from 'react';
import JobCard from './JobCard.jsx';
import { getJobs } from '../../api.js';

const JobList = () => {
    const [jobs, setJobs] = useState([]);
    const [filters, setFilters] = useState({ location: '', company: '', sort: 'created_at' });

    useEffect(() => {
        const fetchJobs = async () => {
            const data = await getJobs(filters);
            setJobs(data);
        };
        fetchJobs();
    }, [filters]);

    const handleDelete = (id) => {
        setJobs(jobs.filter(job => job.id !== id));
    };

    const handleFilterChange = (e) => {
        setFilters({ ...filters, [e.target.name]: e.target.value });
    };

    return (
        <div className="max-w-4xl mx-auto px-4">
            <div className="bg-white p-4 mb-6 rounded-2xl shadow-sm border border-gray-100">
                <h2 className="text-lg font-semibold text-gray-700 mb-3">Filter Jobs</h2>
                <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                    <input
                        type="text"
                        name="location"
                        value={filters.location}
                        onChange={handleFilterChange}
                        placeholder="Filter by Location"
                        className="w-full sm:w-auto p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
                    />
                    <input
                        type="text"
                        name="company"
                        value={filters.company}
                        onChange={handleFilterChange}
                        placeholder="Filter by Company"
                        className="w-full sm:w-auto p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
                    />
                    <select
                        name="sort"
                        value={filters.sort}
                        onChange={handleFilterChange}
                        className="w-full sm:w-auto p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400"
                    >
                        <option value="created_at">Sort by Date</option>
                        <option value="title">Sort by Title</option>
                        <option value="company">Sort by Company</option>
                    </select>
                </div>
            </div>
            <div className="mb-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Job Listings</h2>
                {jobs.length > 0 ? (
                    <div className="space-y-4">
                        {jobs.map((job) => (
                            <JobCard key={job.id} job={job} onDelete={handleDelete} />
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-gray-500 mt-4">No jobs found with current filters.</p>
                )}

            </div>
        </div>
    );
};

export default JobList;
