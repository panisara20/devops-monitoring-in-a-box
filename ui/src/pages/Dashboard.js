import React from 'react';
import { 
  Cpu, 
  HardDrive, 
  Network, 
  Activity, 
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  Clock,
  Settings,
  Database,
  BarChart3,
  FileText,
  Bell
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import ThemeToggle from '../components/ThemeToggle';

const Dashboard = () => {
  // Mock data - in real app, this would come from your monitoring APIs
  const systemMetrics = {
    cpu: 45,
    memory: 67,
    disk: 23,
    network: 12
  };

  const chartData = [
    { time: '00:00', cpu: 30, memory: 50, disk: 20 },
    { time: '04:00', cpu: 45, memory: 60, disk: 22 },
    { time: '08:00', cpu: 65, memory: 70, disk: 25 },
    { time: '12:00', cpu: 80, memory: 75, disk: 28 },
    { time: '16:00', cpu: 70, memory: 72, disk: 26 },
    { time: '20:00', cpu: 55, memory: 65, disk: 24 },
    { time: '24:00', cpu: 40, memory: 58, disk: 21 },
  ];

  const recentAlerts = [
    { id: 1, severity: 'warning', message: 'High CPU usage detected', time: '2 minutes ago' },
    { id: 2, severity: 'info', message: 'System backup completed', time: '1 hour ago' },
    { id: 3, severity: 'error', message: 'Disk space low', time: '3 hours ago' },
  ];

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'error':
        return 'text-red-600 bg-red-100';
      case 'warning':
        return 'text-yellow-600 bg-yellow-100';
      case 'info':
        return 'text-blue-600 bg-blue-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const getSeverityIcon = (severity) => {
    switch (severity) {
      case 'error':
        return <AlertTriangle className="h-4 w-4" />;
      case 'warning':
        return <AlertTriangle className="h-4 w-4" />;
      case 'info':
        return <CheckCircle className="h-4 w-4" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
          <p className="text-gray-600 dark:text-gray-300 mt-2">Monitor your system health and performance</p>
        </div>
        <ThemeToggle />
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
              <Cpu className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600 dark:text-gray-300">CPU Usage</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{systemMetrics.cpu}%</p>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
              <TrendingUp className="h-4 w-4 mr-1" />
              <span>+5.2% from last hour</span>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg">
              <HardDrive className="h-6 w-6 text-green-600 dark:text-green-400" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Memory Usage</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{systemMetrics.memory}%</p>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
              <TrendingUp className="h-4 w-4 mr-1" />
              <span>+2.1% from last hour</span>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg">
              <HardDrive className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Disk Usage</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{systemMetrics.disk}%</p>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
              <TrendingUp className="h-4 w-4 mr-1" />
              <span>+0.5% from last hour</span>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div className="flex items-center">
            <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
              <Network className="h-6 w-6 text-purple-600 dark:text-purple-400" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600 dark:text-gray-300">Network I/O</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">{systemMetrics.network} MB/s</p>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
              <TrendingUp className="h-4 w-4 mr-1" />
              <span>+12.3% from last hour</span>
            </div>
          </div>
        </div>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 sm:gap-6 mb-8">
        {/* CPU & Memory Chart */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">System Performance</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="cpu" stroke="#3b82f6" strokeWidth={2} name="CPU %" />
              <Line type="monotone" dataKey="memory" stroke="#10b981" strokeWidth={2} name="Memory %" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Disk Usage Chart */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Disk Usage Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="disk" stroke="#f59e0b" fill="#fef3c7" name="Disk %" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Activity & Quick Actions */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4 sm:gap-6">
        {/* Recent Alerts */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Alerts</h3>
            <a
              href="http://localhost:9093"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3 py-1 text-sm font-medium text-primary-600 hover:text-primary-700 bg-primary-50 hover:bg-primary-100 dark:bg-primary-900/20 dark:text-primary-400 dark:hover:bg-primary-900/30 rounded-md transition-colors duration-200"
            >
              <Bell className="h-4 w-4 mr-1" />
              View in Alertmanager
            </a>
          </div>
          <div className="space-y-3">
            {recentAlerts.map((alert) => (
              <div key={alert.id} className="flex items-start space-x-3">
                <div className={`p-2 rounded-full ${getSeverityColor(alert.severity)}`}>
                  {getSeverityIcon(alert.severity)}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900 dark:text-white">{alert.message}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{alert.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <button className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700">
              <Activity className="h-4 w-4 mr-2" />
              View All Metrics
            </button>
            <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
              <AlertTriangle className="h-4 w-4 mr-2" />
              Manage Alerts
            </button>
            <button className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
              <Settings className="h-4 w-4 mr-2" />
              System Settings
            </button>
          </div>
        </div>

        {/* System Status */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">System Status</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <a 
                href="http://localhost:9090" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-primary-600 hover:text-primary-700 font-medium hover:underline flex items-center"
              >
                <Database className="h-4 w-4 mr-2" />
                Prometheus
              </a>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-green-600">Healthy</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <a 
                href="http://localhost:3000" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-primary-600 hover:text-primary-700 font-medium hover:underline flex items-center"
              >
                <BarChart3 className="h-4 w-4 mr-2" />
                Grafana
              </a>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-green-600">Healthy</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <a 
                href="http://localhost:3100" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-primary-600 hover:text-primary-700 font-medium hover:underline flex items-center"
              >
                <FileText className="h-4 w-4 mr-2" />
                Loki
              </a>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-green-600">Healthy</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <a 
                href="http://localhost:9093" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-primary-600 hover:text-primary-700 font-medium hover:underline flex items-center"
              >
                <Bell className="h-4 w-4 mr-2" />
                Alertmanager
              </a>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-green-600">Healthy</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
