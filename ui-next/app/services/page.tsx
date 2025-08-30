"use client"

import React from "react"
import { motion } from "framer-motion"
import { Server, CheckCircle, AlertTriangle, RefreshCw, Play, Pause, ThumbsUp } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Mock data - would be fetched with React Query in production
const services = [
  {
    id: "prometheus",
    name: "Prometheus",
    status: "running",
    health: "healthy",
    uptime: "5d 12h 30m",
    cpu: 2.4,
    memory: 512,
    memoryUsage: 68,
    version: "2.42.0",
    port: 9090,
    dataRetention: "15d",
    scrapeTargets: 12,
    scrapeInterval: "15s",
    description: "Monitoring system and time series database"
  },
  {
    id: "grafana",
    name: "Grafana",
    status: "running",
    health: "healthy",
    uptime: "5d 12h 30m",
    cpu: 1.8,
    memory: 256,
    memoryUsage: 42,
    version: "9.5.1",
    port: 3000,
    plugins: ["Prometheus", "Loki", "Alert Manager"],
    description: "Analytics & monitoring solution"
  },
  {
    id: "loki",
    name: "Loki",
    status: "running",
    health: "healthy",
    uptime: "5d 12h 29m",
    cpu: 3.2,
    memory: 1024,
    memoryUsage: 56,
    version: "2.8.0",
    port: 3100,
    dataRetention: "7d",
    activeQueries: 3,
    description: "Log aggregation system"
  },
  {
    id: "node-exporter",
    name: "Node Exporter",
    status: "running",
    health: "healthy",
    uptime: "5d 12h 30m",
    cpu: 0.5,
    memory: 32,
    memoryUsage: 28,
    version: "1.5.0",
    port: 9100,
    collectors: ["CPU", "Memory", "Disk", "Network"],
    description: "Exposes system metrics"
  },
  {
    id: "alertmanager",
    name: "Alertmanager",
    status: "running",
    health: "warning",
    uptime: "5d 12h 28m",
    cpu: 0.8,
    memory: 128,
    memoryUsage: 35,
    version: "0.25.0",
    port: 9093,
    activeAlerts: 2,
    silences: 1,
    description: "Handles alerts from Prometheus"
  }
]

const getStatusIcon = (status: string) => {
  switch (status) {
    case "running":
      return <Play className="h-4 w-4 text-green-500" />
    case "stopped":
      return <Pause className="h-4 w-4 text-red-500" />
    case "restarting":
      return <RefreshCw className="h-4 w-4 text-yellow-500 animate-spin" />
    default:
      return <AlertTriangle className="h-4 w-4 text-gray-500" />
  }
}

const getHealthIcon = (health: string) => {
  switch (health) {
    case "healthy":
      return <CheckCircle className="h-4 w-4 text-green-500" />
    case "warning":
      return <AlertTriangle className="h-4 w-4 text-yellow-500" />
    case "critical":
      return <AlertTriangle className="h-4 w-4 text-red-500" />
    default:
      return <AlertTriangle className="h-4 w-4 text-gray-500" />
  }
}

const getStatusBadge = (status: string) => {
  switch (status) {
    case "running":
      return <Badge variant="outline" className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">Running</Badge>
    case "stopped":
      return <Badge variant="outline" className="bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400">Stopped</Badge>
    case "restarting":
      return <Badge variant="outline" className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400">Restarting</Badge>
    default:
      return <Badge variant="outline">Unknown</Badge>
  }
}

const getHealthBadge = (health: string) => {
  switch (health) {
    case "healthy":
      return <Badge className="bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">Healthy</Badge>
    case "warning":
      return <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400">Warning</Badge>
    case "critical":
      return <Badge className="bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400">Critical</Badge>
    default:
      return <Badge>Unknown</Badge>
  }
}

export default function ServicesPage() {
  return (
    <div>
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold">Services</h1>
          <p className="text-muted-foreground mt-2">
            Manage and monitor your DevOps services
          </p>
        </motion.div>
        <Button variant="outline" className="gap-2">
          <RefreshCw className="h-4 w-4" />
          Refresh
        </Button>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-2">
                    <div className="p-2 rounded-md bg-primary/10">
                      <Server className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle>{service.name}</CardTitle>
                  </div>
                  <div className="flex space-x-2">
                    {getStatusBadge(service.status)}
                    {getHealthBadge(service.health)}
                  </div>
                </div>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="overview">
                  <TabsList className="mb-4">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="stats">Stats</TabsTrigger>
                    <TabsTrigger value="logs">Logs</TabsTrigger>
                  </TabsList>
                  <TabsContent value="overview" className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-muted-foreground">Version</p>
                        <p className="text-sm font-medium">{service.version}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Port</p>
                        <p className="text-sm font-medium">{service.port}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Uptime</p>
                        <p className="text-sm font-medium">{service.uptime}</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">CPU</p>
                        <p className="text-sm font-medium">{service.cpu}%</p>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="stats" className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <p className="text-sm text-muted-foreground">Memory Usage</p>
                        <p className="text-sm font-medium">{service.memoryUsage}%</p>
                      </div>
                      <Progress value={service.memoryUsage} className="h-2" />
                      <p className="text-xs text-muted-foreground mt-1">
                        {(service.memory * service.memoryUsage / 100).toFixed(0)} MB of {service.memory} MB
                      </p>
                    </div>
                    <div>
                      {service.activeAlerts !== undefined && (
                        <div className="flex justify-between items-center">
                          <p className="text-sm text-muted-foreground">Active Alerts</p>
                          <p className="text-sm font-medium">{service.activeAlerts}</p>
                        </div>
                      )}
                      {service.scrapeTargets !== undefined && (
                        <div className="flex justify-between items-center">
                          <p className="text-sm text-muted-foreground">Scrape Targets</p>
                          <p className="text-sm font-medium">{service.scrapeTargets}</p>
                        </div>
                      )}
                      {service.activeQueries !== undefined && (
                        <div className="flex justify-between items-center">
                          <p className="text-sm text-muted-foreground">Active Queries</p>
                          <p className="text-sm font-medium">{service.activeQueries}</p>
                        </div>
                      )}
                      {service.dataRetention !== undefined && (
                        <div className="flex justify-between items-center">
                          <p className="text-sm text-muted-foreground">Data Retention</p>
                          <p className="text-sm font-medium">{service.dataRetention}</p>
                        </div>
                      )}
                    </div>
                  </TabsContent>
                  <TabsContent value="logs" className="space-y-4">
                    <div className="bg-muted/50 rounded-md p-2 text-xs font-mono max-h-32 overflow-y-auto">
                      <p>[INFO] Service started successfully</p>
                      <p>[INFO] Listening on port {service.port}</p>
                      <p>[INFO] Connected to database</p>
                      <p>[INFO] Initialization complete</p>
                      {service.health === "warning" && (
                        <>
                          <p className="text-yellow-500">[WARN] High memory usage detected</p>
                          <p className="text-yellow-500">[WARN] Consider scaling resources</p>
                        </>
                      )}
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" className="gap-1">
                  <Play className="h-3 w-3" />
                  Open
                </Button>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="gap-1">
                    <RefreshCw className="h-3 w-3" />
                    Restart
                  </Button>
                  <Button variant="outline" size="sm" className="gap-1">
                    <Pause className="h-3 w-3" />
                    Stop
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
