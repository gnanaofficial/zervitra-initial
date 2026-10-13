import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  LayoutDashboard, Briefcase, Users, Brain, TrendingUp, ArrowUpRight, ArrowDownRight,
  Clock, CheckCircle, AlertCircle, UserPlus, Calendar, BarChart3, Sparkles,
  FileText, ChevronRight, Activity, Zap, Target, Eye
} from 'lucide-react';
import {
  mockDashboardStats, mockRecentActivity, mockJobs, mockCandidates,
  mockScreenings, mockInterviews, mockAIConfig
} from '../../lib/mock-data';
import { cn, formatNumber } from '../../lib/utils';
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const chartData = [
  { name: 'Mon', applications: 12, screenings: 8 },
  { name: 'Tue', applications: 19, screenings: 14 },
  { name: 'Wed', applications: 15, screenings: 11 },
  { name: 'Thu', applications: 25, screenings: 18 },
  { name: 'Fri', applications: 22, screenings: 16 },
  { name: 'Sat', applications: 8, screenings: 5 },
  { name: 'Sun', applications: 5, screenings: 3 },
];

const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };
const stagger = { visible: { transition: { staggerChildren: 0.06 } } };

const iconMap = {
  UserPlus: UserPlus, Brain: Brain, Calendar: Calendar,
  CheckCircle: CheckCircle, FileText: FileText, Briefcase: Briefcase,
};

export function DashboardPage() {
  const stats = [
    { label: 'Active Jobs', value: mockDashboardStats.activeJobs, icon: Briefcase, change: '+2', trend: 'up', color: 'brand' },
    { label: 'Total Applications', value: mockDashboardStats.totalApplications, icon: Users, change: '+23', trend: 'up', color: 'purple' },
    { label: 'AI Screenings Today', value: mockDashboardStats.aiScreeningsToday, icon: Brain, change: '+5', trend: 'up', color: 'info' },
    { label: 'Interviews This Week', value: mockDashboardStats.interviewsThisWeek, icon: Calendar, change: '-1', trend: 'down', color: 'warning' },
    { label: 'Offer Accept Rate', value: mockDashboardStats.offerAcceptRate, icon: Target, change: '+3%', trend: 'up', color: 'success' },
    { label: 'Avg Time to Hire', value: mockDashboardStats.avgTimeToHire, icon: Clock, change: '-2d', trend: 'up', color: 'danger' },
  ];

  const colorMap = {
    brand: { bg: 'bg-brand-50', icon: 'text-brand-600', border: 'border-brand-100' },
    purple: { bg: 'bg-purple-50', icon: 'text-purple-600', border: 'border-purple-100' },
    info: { bg: 'bg-info-50', icon: 'text-info-600', border: 'border-info-100' },
    warning: { bg: 'bg-warning-50', icon: 'text-warning-600', border: 'border-warning-100' },
    success: { bg: 'bg-success-50', icon: 'text-success-600', border: 'border-success-100' },
    danger: { bg: 'bg-danger-50', icon: 'text-danger-600', border: 'border-danger-100' },
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={stagger} className="p-6 lg:p-8 space-y-8">
      {/* Header */}
      <motion.div variants={fadeUp} className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-display font-bold text-surface-950">Dashboard</h1>
          <p className="text-sm text-surface-500 mt-1">Welcome back, Sarah. Here's your recruitment overview.</p>
        </div>
        <div className="flex gap-3">
          <Link to="/app/jobs" className="btn-outline btn-sm">Post New Job</Link>
          <Link to="/app/ai-screening" className="btn-primary btn-sm gap-1.5"><Sparkles className="w-3.5 h-3.5" /> Run Screening</Link>
        </div>
      </motion.div>

      {/* AI Status Bar */}
      <motion.div variants={fadeUp} className="card p-4 bg-gradient-to-r from-brand-50 via-purple-50 to-info-50 border-brand-100">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-purple-500 flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-sm font-semibold text-surface-900">Claude AI Engine — {mockAIConfig.status}</p>
              <p className="text-xs text-surface-500">Model: {mockAIConfig.defaultModel} • Avg Latency: {mockAIConfig.avgLatency} • Error Rate: {mockAIConfig.errorRate}</p>
            </div>
          </div>
          <Link to="/app/settings/ai" className="btn-sm btn-outline">Configure</Link>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <motion.div variants={stagger} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          const colors = colorMap[stat.color];
          return (
            <motion.div key={i} variants={fadeUp} className="stat-card">
              <div className="flex items-center justify-between mb-3">
                <div className={cn('w-9 h-9 rounded-lg flex items-center justify-center', colors.bg)}>
                  <Icon className={cn('w-4 h-4', colors.icon)} />
                </div>
                <div className={cn('flex items-center gap-0.5 text-xs font-medium', stat.trend === 'up' ? 'text-success-600' : 'text-danger-600')}>
                  {stat.trend === 'up' ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                  {stat.change}
                </div>
              </div>
              <p className="stat-value">{stat.value}</p>
              <p className="stat-label">{stat.label}</p>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Charts Row */}
      <div className="grid lg:grid-cols-2 gap-6">
        <motion.div variants={fadeUp} className="card p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-semibold text-surface-900">Applications & Screenings</h3>
            <span className="badge-neutral">Last 7 days</span>
          </div>
          <ResponsiveContainer width="100%" height={240}>
            <AreaChart data={chartData}>
              <defs>
                <linearGradient id="colorApps" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#38bdf8" stopOpacity={0.2} />
                  <stop offset="95%" stopColor="#38bdf8" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorScreenings" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#a855f7" stopOpacity={0.2} />
                  <stop offset="95%" stopColor="#a855f7" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="name" tick={{ fontSize: 12, fill: '#94a3b8' }} />
              <YAxis tick={{ fontSize: 12, fill: '#94a3b8' }} />
              <Tooltip contentStyle={{ borderRadius: 12, border: '1px solid #e2e8f0', fontSize: 12 }} />
              <Area type="monotone" dataKey="applications" stroke="#38bdf8" fill="url(#colorApps)" strokeWidth={2} />
              <Area type="monotone" dataKey="screenings" stroke="#a855f7" fill="url(#colorScreenings)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>

        <motion.div variants={fadeUp} className="card p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-semibold text-surface-900">Pipeline Overview</h3>
            <Link to="/app/pipeline" className="text-xs text-brand-600 hover:underline font-medium">View Pipeline →</Link>
          </div>
          <ResponsiveContainer width="100%" height={240}>
            <BarChart data={[
              { stage: 'New', count: 15 }, { stage: 'Screening', count: 8 },
              { stage: 'Assessment', count: 5 }, { stage: 'Interview', count: 4 },
              { stage: 'Offer', count: 2 }, { stage: 'Hired', count: 1 },
            ]}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="stage" tick={{ fontSize: 11, fill: '#94a3b8' }} />
              <YAxis tick={{ fontSize: 12, fill: '#94a3b8' }} />
              <Tooltip contentStyle={{ borderRadius: 12, border: '1px solid #e2e8f0', fontSize: 12 }} />
              <Bar dataKey="count" fill="#38bdf8" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Bottom Section */}
      <div className="grid lg:grid-cols-3 gap-6">
        {/* Recent Activity */}
        <motion.div variants={fadeUp} className="card p-6 lg:col-span-2">
          <div className="flex items-center justify-between mb-5">
            <h3 className="font-semibold text-surface-900">Recent Activity</h3>
            <Link to="/app/activity" className="text-xs text-brand-600 hover:underline font-medium">View All →</Link>
          </div>
          <div className="space-y-1">
            {mockRecentActivity.map(act => {
              const Icon = iconMap[act.icon] || Activity;
              return (
                <div key={act.id} className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-surface-50 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-surface-100 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-surface-500" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-surface-700 truncate">{act.message}</p>
                  </div>
                  <span className="text-xs text-surface-400 whitespace-nowrap">{act.time}</span>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Upcoming Interviews */}
        <motion.div variants={fadeUp} className="card p-6">
          <div className="flex items-center justify-between mb-5">
            <h3 className="font-semibold text-surface-900">Upcoming Interviews</h3>
            <Link to="/app/interviews" className="text-xs text-brand-600 hover:underline font-medium">View All →</Link>
          </div>
          <div className="space-y-3">
            {mockInterviews.filter(i => i.status === 'Scheduled').map(int => (
              <div key={int.id} className="p-3 rounded-xl bg-surface-50 border border-surface-100">
                <p className="text-sm font-medium text-surface-900">{int.candidateName}</p>
                <p className="text-xs text-surface-500 mt-0.5">{int.jobTitle}</p>
                <div className="flex items-center gap-2 mt-2 text-xs text-surface-500">
                  <Calendar className="w-3 h-3" />
                  <span>{int.date} at {int.time}</span>
                </div>
                <div className="flex items-center gap-2 mt-1 text-xs text-surface-500">
                  <Clock className="w-3 h-3" />
                  <span>{int.duration} • {int.location}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
