import React from 'react';
import { Bell, AlertTriangle, CheckCircle } from 'lucide-react';

const Alerts = () => {
  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Alerts</h1>
        <p className="text-gray-600 mt-2">Monitor and manage system alerts</p>
      </div>
      
      <div className="bg-white rounded-lg shadow p-12 text-center">
        <Bell className="h-16 w-16 text-gray-400 mx-auto mb-4" />
        <h3 className="text-lg font-medium text-gray-900 mb-2">Alert Management</h3>
        <p className="text-gray-500 mb-6">
          This page will show active alerts, alert history, and allow you to manage alert rules and notifications.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700">
            <AlertTriangle className="h-4 w-4 mr-2 inline" />
            View Alerts
          </button>
          <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400">
            <CheckCircle className="h-4 w-4 mr-2 inline" />
            Alertmanager
          </button>
        </div>
      </div>
    </div>
  );
};

export default Alerts;
