import React from 'react';
import { FileText, Search, Filter } from 'lucide-react';

const Logs = () => {
  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Logs</h1>
        <p className="text-gray-600 mt-2">Centralized log aggregation and search</p>
      </div>
      
      <div className="bg-white rounded-lg shadow p-12 text-center">
        <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
        <h3 className="text-lg font-medium text-gray-900 mb-2">Log Management</h3>
        <p className="text-gray-500 mb-6">
          This page will provide log search, filtering, and analysis capabilities powered by Loki.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700">
            <Search className="h-4 w-4 mr-2 inline" />
            Search Logs
          </button>
          <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400">
            <Filter className="h-4 w-4 mr-2 inline" />
            View in Loki
          </button>
        </div>
      </div>
    </div>
  );
};

export default Logs;
