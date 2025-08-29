import React from 'react';
import { Settings as SettingsIcon, User, Shield, Database, Bell } from 'lucide-react';

const Settings = () => {
  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-600 mt-2">Configure your monitoring environment</p>
      </div>
      
      <div className="bg-white rounded-lg shadow p-12 text-center">
        <SettingsIcon className="h-16 w-16 text-gray-400 mx-auto mb-4" />
        <h3 className="text-lg font-medium text-gray-900 mb-2">Configuration</h3>
        <p className="text-gray-500 mb-6">
          This page will allow you to configure system settings, user preferences, and monitoring parameters.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
          <button className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <User className="h-6 w-6 text-gray-600 mx-auto mb-2" />
            <span className="text-sm text-gray-700">Profile</span>
          </button>
          <button className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <Shield className="h-6 w-6 text-gray-600 mx-auto mb-2" />
            <span className="text-sm text-gray-700">Security</span>
          </button>
          <button className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <Database className="h-6 w-6 text-gray-600 mx-auto mb-2" />
            <span className="text-sm text-gray-700">Data Sources</span>
          </button>
          <button className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
            <Bell className="h-6 w-6 text-gray-600 mx-auto mb-2" />
            <span className="text-sm text-gray-700">Notifications</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
