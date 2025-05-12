import React from 'react';
import JobForm from './assets/components/JobForm';
import JobList from './assets/components/JobList';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <header className="bg-black text-white py-4 shadow-md">
        <h1 className="text-4xl font-bold text-center tracking-wide">🌟 Job Listings Portal</h1>
      </header>
      <main className="max-w-5xl mx-auto px-4 py-8">
        <section className="mb-10">
          <JobForm />
        </section>
        <section>
          <JobList />
        </section>
      </main>
      <footer className="text-center text-sm text-gray-500 py-6">
        © {new Date().getFullYear()} Job Listings. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
