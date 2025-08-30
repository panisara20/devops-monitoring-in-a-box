"use client"

import React from "react"
import { motion } from "framer-motion"
import {
  BarChart3,
  TrendingUp,
  TrendingDown,
  Clock,
  Calendar,
  Download,
  ArrowUpDown,
  Filter,
  RefreshCw
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select"
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from "recharts"

// Mock data
const timeRangeData = [
  { name: "1h", value: 1 },
  { name: "6h", value: 6 },
  { name: "12h", value: 12 },
  { name: "1d", value: 24 },
  { name: "7d", value: 168 },
  { name: "30d", value: 720 }
]

const cpuUsageData = [
  { time: "00:00", value: 30 },
  { time: "04:00", value: 45 },
  { time: "08:00", value: 65 },
  { time: "12:00", value: 80 },
  { time: "16:00", value: 70 },
  { time: "20:00", value: 55 },
  { time: "24:00", value: 40 },
]

const memoryUsageData = [
  { time: "00:00", value: 50 },
  { time: "04:00", value: 60 },
  { time: "08:00", value: 70 },
  { time: "12:00", value: 75 },
  { time: "16:00", value: 72 },
  { time: "20:00", value: 65 },
  { time: "24:00", value: 58 },
]

const diskUsageData = [
  { time: "00:00", value: 20 },
  { time: "04:00", value: 22 },
  { time: "08:00", value: 25 },
  { time: "12:00", value: 28 },
  { time: "16:00", value: 26 },
  { time: "20:00", value: 24 },
  { time: "24:00", value: 21 },
]

const networkTrafficData = [
  { time: "00:00", inbound: 2, outbound: 1 },
  { time: "04:00", inbound: 4, outbound: 3 },
  { time: "08:00", inbound: 8, outbound: 5 },
  { time: "12:00", inbound: 12, outbound: 7 },
  { time: "16:00", inbound: 6, outbound: 4 },
  { time: "20:00", inbound: 4, outbound: 3 },
  { time: "24:00", inbound: 2, outbound: 1 },
]

const resourceDistributionData = [
  { name: "CPU", value: 45 },
  { name: "Memory", value: 67 },
  { name: "Disk", value: 23 },
  { name: "Network", value: 12 },
]

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#6366f1'];

export default function MetricsPage() {
  const [timeRange, setTimeRange] = React.useState("24")

  return (
    <div>
      {/* Header */}
      <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold">Metrics</h1>
          <p className="text-muted-foreground mt-2">
            System performance metrics and analytics
          </p>
        </motion.div>

        <div className="flex flex-wrap items-center gap-2">
          <Select value={timeRange} onValueChange={setTimeRange}>
            <SelectTrigger className="w-[120px]">
              <SelectValue placeholder="Time Range" />
            </SelectTrigger>
            <SelectContent>
              {timeRangeData.map((range) => (
                <SelectItem key={range.name} value={range.value.toString()}>
                  Last {range.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Button variant="outline" size="sm" className="gap-1">
            <Calendar className="h-4 w-4" />
            Custom Range
          </Button>

          <Button variant="outline" size="sm" className="gap-1">
            <Filter className="h-4 w-4" />
            Filter
          </Button>

          <Button variant="outline" size="sm" className="gap-1">
            <RefreshCw className="h-4 w-4" />
            Refresh
          </Button>

          <Button variant="outline" size="sm" className="gap-1">
            <Download className="h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="overview" className="mb-6">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="cpu">CPU</TabsTrigger>
          <TabsTrigger value="memory">Memory</TabsTrigger>
          <TabsTrigger value="disk">Disk</TabsTrigger>
          <TabsTrigger value="network">Network</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2"
            >
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>System Resource Usage</CardTitle>
                    <Button variant="outline" size="sm" className="gap-1">
                      <ArrowUpDown className="h-4 w-4" />
                      Sort
                    </Button>
                  </div>
                  <CardDescription>
                    CPU, memory, and disk utilization over time
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[350px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart
                        data={[...Array(7)].map((_, i) => ({
                          time: cpuUsageData[i].time,
                          cpu: cpuUsageData[i].value,
                          memory: memoryUsageData[i].value,
                          disk: diskUsageData[i].value,
                        }))}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />
                        <XAxis dataKey="time" />
                        <YAxis />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: "var(--background)",
                            borderColor: "var(--border)"
                          }}
                          formatter={(value) => [`${value}%`]}
                        />
                        <Legend />
                        <Line
                          type="monotone"
                          dataKey="cpu"
                          stroke="#3b82f6"
                          strokeWidth={2}
                          activeDot={{ r: 8 }}
                        />
                        <Line
                          type="monotone"
                          dataKey="memory"
                          stroke="#10b981"
                          strokeWidth={2}
                        />
                        <Line
                          type="monotone"
                          dataKey="disk"
                          stroke="#f59e0b"
                          strokeWidth={2}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Resource Distribution</CardTitle>
                  <CardDescription>
                    Current system resource allocation
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[350px] flex items-center justify-center">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={resourceDistributionData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                          outerRadius={120}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {resourceDistributionData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip
                          formatter={(value) => [`${value}%`, 'Usage']}
                          contentStyle={{
                            backgroundColor: "var(--background)",
                            borderColor: "var(--border)"
                          }}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Network Traffic</CardTitle>
                  <CardDescription>
                    Inbound and outbound network traffic
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart
                        data={networkTrafficData}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />
                        <XAxis dataKey="time" />
                        <YAxis />
                        <Tooltip
                          formatter={(value) => [`${value} MB/s`]}
                          contentStyle={{
                            backgroundColor: "var(--background)",
                            borderColor: "var(--border)"
                          }}
                        />
                        <Legend />
                        <Area
                          type="monotone"
                          dataKey="inbound"
                          stackId="1"
                          stroke="#3b82f6"
                          fill="#3b82f6"
                          fillOpacity={0.3}
                        />
                        <Area
                          type="monotone"
                          dataKey="outbound"
                          stackId="1"
                          stroke="#ef4444"
                          fill="#ef4444"
                          fillOpacity={0.3}
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Memory Usage Breakdown</CardTitle>
                  <CardDescription>
                    Memory usage by type
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={[
                          { name: 'Used', value: 67 },
                          { name: 'Cache', value: 18 },
                          { name: 'Buffer', value: 8 },
                          { name: 'Free', value: 7 },
                        ]}
                        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip
                          formatter={(value) => [`${value}%`]}
                          contentStyle={{
                            backgroundColor: "var(--background)",
                            borderColor: "var(--border)"
                          }}
                        />
                        <Bar dataKey="value" fill="#10b981" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </TabsContent>

        {/* CPU Tab */}
        <TabsContent value="cpu">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>CPU Usage</CardTitle>
                <CardDescription>
                  Detailed CPU utilization metrics
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={cpuUsageData}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />
                      <XAxis dataKey="time" />
                      <YAxis domain={[0, 100]} />
                      <Tooltip
                        formatter={(value) => [`${value}%`, 'CPU Usage']}
                        contentStyle={{
                          backgroundColor: "var(--background)",
                          borderColor: "var(--border)"
                        }}
                      />
                      <Line
                        type="monotone"
                        dataKey="value"
                        stroke="#3b82f6"
                        strokeWidth={2}
                        activeDot={{ r: 8 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Current Usage</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="text-3xl font-bold">45%</div>
                    <div className="flex items-center text-green-500">
                      <TrendingDown className="h-4 w-4 mr-1" />
                      <span className="text-sm">5% lower than avg</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Average Load</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-xl font-bold">0.8</div>
                      <div className="text-sm text-muted-foreground">1 min</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold">1.2</div>
                      <div className="text-sm text-muted-foreground">5 min</div>
                    </div>
                    <div>
                      <div className="text-xl font-bold">1.5</div>
                      <div className="text-sm text-muted-foreground">15 min</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Core Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-4 gap-2">
                    {[42, 38, 51, 46].map((usage, i) => (
                      <div key={i} className="text-center">
                        <div className="text-lg font-bold">{usage}%</div>
                        <div className="text-xs text-muted-foreground">Core {i+1}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        {/* Memory Tab */}
        <TabsContent value="memory">
          <Card>
            <CardHeader>
              <CardTitle>Memory Usage</CardTitle>
              <CardDescription>
                RAM utilization over time
              </CardDescription>
            </CardHeader>
            <CardContent>
              {/* Memory specific metrics would go here */}
              <p className="text-muted-foreground">Detailed memory metrics and visualizations</p>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Disk Tab */}
        <TabsContent value="disk">
          <Card>
            <CardHeader>
              <CardTitle>Disk Usage</CardTitle>
              <CardDescription>
                Storage metrics and I/O operations
              </CardDescription>
            </CardHeader>
            <CardContent>
              {/* Disk specific metrics would go here */}
              <p className="text-muted-foreground">Detailed disk metrics and visualizations</p>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Network Tab */}
        <TabsContent value="network">
          <Card>
            <CardHeader>
              <CardTitle>Network Traffic</CardTitle>
              <CardDescription>
                Network throughput and connections
              </CardDescription>
            </CardHeader>
            <CardContent>
              {/* Network specific metrics would go here */}
              <p className="text-muted-foreground">Detailed network metrics and visualizations</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
