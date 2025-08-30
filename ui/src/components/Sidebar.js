import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  Server,
  BarChart3,
  FileText,
  Bell,
  Settings,
  Menu,
  X,
  Activity,
  Database,
  Monitor,
} from "lucide-react";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Dashboard", href: "/", icon: Home },
    { name: "Services", href: "/services", icon: Server },
    { name: "Metrics", href: "/metrics", icon: BarChart3 },
    { name: "Logs", href: "/logs", icon: FileText },
    { name: "Alerts", href: "/alerts", icon: Bell },
    { name: "Settings", href: "/settings", icon: Settings },
  ];

  const serviceStatus = [
    { name: "Prometheus", status: "healthy", icon: Database },
    { name: "Grafana", status: "healthy", icon: BarChart3 },
    { name: "Loki", status: "healthy", icon: FileText },
    { name: "Node Exporter", status: "healthy", icon: Monitor },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "healthy":
        return "bg-green-500 dark:bg-green-400";
      case "warning":
        return "bg-yellow-500 dark:bg-yellow-400";
      case "error":
        return "bg-red-500 dark:bg-red-400";
      default:
        return "bg-gray-500 dark:bg-gray-400";
    }
  };

  return (
    <>
      {/* Mobile menu button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 rounded-md bg-white dark:bg-gray-800 dark:text-white shadow-lg"
        >
          {isCollapsed ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`
        fixed inset-y-0 left-0 z-40 w-64 bg-white dark:bg-gray-900 shadow-lg dark:shadow-gray-900/50 transform transition-transform duration-300 ease-in-out lg:translate-x-0
        ${isCollapsed ? "-translate-x-full" : "translate-x-0"}
        lg:relative lg:translate-x-0
      `}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-primary-600 dark:bg-primary-700 rounded-lg">
                <Activity className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-gray-900 dark:text-white">
                  DevOps Monitor
                </h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Monitoring in a Box
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`
                    flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200
                    ${
                      isActive
                        ? "bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 border-r-2 border-primary-600 dark:border-primary-500"
                        : "text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white"
                    }
                  `}
                >
                  <item.icon className="mr-3 h-5 w-5" />
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Service Status */}
          <div className="px-4 py-6 border-t border-gray-200 dark:border-gray-700">
            <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
              Service Status
            </h3>
            <div className="space-y-2">
              {serviceStatus.map((service) => (
                <div
                  key={service.name}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center space-x-2">
                    <service.icon className="h-4 w-4 text-gray-400 dark:text-gray-300" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">
                      {service.name}
                    </span>
                  </div>
                  <div
                    className={`w-2 h-2 rounded-full ${getStatusColor(service.status)}`}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="px-4 py-4 border-t border-gray-200 dark:border-gray-700">
            <div className="text-center">
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Built with{" "}
                <span className="text-red-500 dark:text-red-400">❤️</span> by
                Harshhaa
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay for mobile */}
      {!isCollapsed && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm z-30 lg:hidden"
          onClick={() => setIsCollapsed(true)}
        />
      )}
    </>
  );
};

export default Sidebar;
