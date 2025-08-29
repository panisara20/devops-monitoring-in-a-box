import React, { useState } from 'react';
import { 
  Server, 
  Database, 
  BarChart3, 
  FileText, 
  Monitor, 
  Activity,
  Square,
  RotateCcw,
  Settings,
  ExternalLink,
  CheckCircle,
  AlertTriangle,
  XCircle
} from 'lucide-react';

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: 'prometheus',
      name: 'Prometheus',
      description: 'Metrics collection and storage',
      status: 'healthy',
      port: 9090,
      icon: Database,
      version: '2.45.0',
      uptime: '15 days',
      targets: 8,
      metrics: '2.3M',
      actions: ['restart', 'stop', 'logs']
    },
    {
      id: 'grafana',
      name: 'Grafana',
      description: 'Visualization and dashboards',
      status: 'healthy',
      port: 3000,
      icon: BarChart3,
      version: '10.0.0',
      uptime: '15 days',
      dashboards: 12,
      users: 3,
      actions: ['restart', 'stop', 'logs']
    },
    {
      id: 'loki',
      name: 'Loki',
      description: 'Log aggregation and querying',
      status: 'healthy',
      port: 3100,
      icon: FileText,
      version: '2.9.0',
      uptime: '15 days',
      streams: 156,
      logs: '45GB',
      actions: ['restart', 'stop', 'logs']
    },
    {
      id: 'alertmanager',
      name: 'Alertmanager',
      description: 'Alert routing and silencing',
      status: 'healthy',
      port: 9093,
      icon: Activity,
      version: '0.25.0',
      uptime: '15 days',
      alerts: 2,
      silences: 0,
      actions: ['restart', 'stop', 'logs']
    },
    {
      id: 'node-exporter',
      name: 'Node Exporter',
      description: 'System metrics exporter',
      status: 'healthy',
      port: 9100,
      icon: Monitor,
      version: '1.6.0',
      uptime: '15 days',
      collectors: 28,
      metrics: '1.2K',
      actions: ['restart', 'stop', 'logs']
    },
    {
      id: 'cadvisor',
      name: 'cAdvisor',
      description: 'Container metrics and resource usage',
      status: 'healthy',
      port: 8080,
      icon: Server,
      version: '0.47.0',
      uptime: '15 days',
      containers: 12,
      metrics: '890',
      actions: ['restart', 'stop', 'logs']
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'healthy':
        return 'bg-green-500';
      case 'warning':
        return 'bg-yellow-500';
      case 'error':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'healthy':
        return <CheckCircle className="h-5 w-5 text-green-600" />;
      case 'warning':
        return <AlertTriangle className="h-5 w-5 text-yellow-600" />;
      case 'error':
        return <XCircle className="h-5 w-5 text-red-600" />;
      default:
        return <XCircle className="h-5 w-5 text-gray-600" />;
    }
  };

  const handleAction = (serviceId, action) => {
    console.log(`Performing ${action} on ${serviceId}`);
    // In real app, this would call your backend API
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Services</h1>
        <p className="text-gray-600 mt-2">Monitor and manage your monitoring stack services</p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div key={service.id} className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-200">
            <div className="p-6">
              {/* Service Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary-100 rounded-lg">
                    <service.icon className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{service.name}</h3>
                    <p className="text-sm text-gray-500">{service.description}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <div className={`w-3 h-3 rounded-full ${getStatusColor(service.status)}`}></div>
                  {getStatusIcon(service.status)}
                </div>
              </div>

              {/* Service Details */}
              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Port:</span>
                  <span className="font-medium">{service.port}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Version:</span>
                  <span className="font-medium">{service.version}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Uptime:</span>
                  <span className="font-medium">{service.uptime}</span>
                </div>
                {service.targets && (
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Targets:</span>
                    <span className="font-medium">{service.targets}</span>
                  </div>
                )}
                {service.metrics && (
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Metrics:</span>
                    <span className="font-medium">{service.metrics}</span>
                  </div>
                )}
                {service.dashboards && (
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Dashboards:</span>
                    <span className="font-medium">{service.dashboards}</span>
                  </div>
                )}
                {service.containers && (
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Containers:</span>
                    <span className="font-medium">{service.containers}</span>
                  </div>
                )}
              </div>

              {/* Actions */}
              <div className="flex space-x-2 mb-4">
                <button
                  onClick={() => handleAction(service.id, 'restart')}
                  className="flex-1 flex items-center justify-center px-3 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors duration-200"
                >
                  <RotateCcw className="h-4 w-4 mr-1" />
                  Restart
                </button>
                <button
                  onClick={() => handleAction(service.id, 'stop')}
                  className="flex-1 flex items-center justify-center px-3 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors duration-200"
                >
                  <Square className="h-4 w-4 mr-1" />
                  Stop
                </button>
                <button
                  onClick={() => handleAction(service.id, 'logs')}
                  className="flex-1 flex items-center justify-center px-3 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors duration-200"
                >
                  <FileText className="h-4 w-4 mr-1" />
                  Logs
                </button>
              </div>

              {/* External Link */}
              <div className="flex justify-between items-center">
                <a
                  href={`http://localhost:${service.port}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-primary-600 hover:text-primary-700 font-medium"
                >
                  <ExternalLink className="h-4 w-4 mr-1" />
                  Open Service
                </a>
                <button
                  onClick={() => setSelectedService(service)}
                  className="inline-flex items-center text-sm text-gray-600 hover:text-gray-700 font-medium"
                >
                  <Settings className="h-4 w-4 mr-1" />
                  Configure
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Service Summary */}
      <div className="mt-8 bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Service Summary</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">
              {services.filter(s => s.status === 'healthy').length}
            </div>
            <div className="text-sm text-gray-600">Healthy Services</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-600">
              {services.filter(s => s.status === 'warning').length}
            </div>
            <div className="text-sm text-gray-600">Warning Services</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-red-600">
              {services.filter(s => s.status === 'error').length}
            </div>
            <div className="text-sm text-gray-600">Error Services</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary-600">
              {services.length}
            </div>
            <div className="text-sm text-gray-600">Total Services</div>
          </div>
        </div>
      </div>

      {/* Service Configuration Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900">
                Configure {selectedService.name}
              </h3>
              <button
                onClick={() => setSelectedService(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                <XCircle className="h-6 w-6" />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Service Port
                </label>
                <input
                  type="number"
                  defaultValue={selectedService.port}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Log Level
                </label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500">
                  <option>info</option>
                  <option>debug</option>
                  <option>warn</option>
                  <option>error</option>
                </select>
              </div>
              <div className="flex space-x-3 pt-4">
                <button className="flex-1 px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700">
                  Save Changes
                </button>
                <button
                  onClick={() => setSelectedService(null)}
                  className="flex-1 px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
