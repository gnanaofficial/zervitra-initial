import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  LayoutDashboard, Building2, Users, CreditCard, BarChart3, Sparkles,
  Activity, Settings, HeartPulse, ListTodo, ClipboardList, HelpCircle,
  TrendingUp, ArrowUpRight, ArrowDownRight, CheckCircle, AlertCircle,
  XCircle, RefreshCw, Clock, Globe, Shield, Zap, Brain, Database,
  Server, Cpu, HardDrive, Wifi, Plus, Search, MoreHorizontal, Eye,
  Trash2, Edit, ExternalLink, Filter, Download, Copy
} from 'lucide-react';
import {
  mockAdminStats, mockAdminOrgs, mockAIModels, mockAIConfig, mockAIUsage,
  mockAuditLogs, mockTeamMembers
} from '../../lib/mock-data';
import { cn, formatCurrency, formatNumber, formatDate, timeAgo } from '../../lib/utils';
import {
  AreaChart, Area, BarChart, Bar, LineChart, Line, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };
const stagger = { visible: { transition: { staggerChildren: 0.05 } } };

// ─── ADMIN OVERVIEW ───
export function AdminOverview() {
  const stats = [
    { label: 'Organizations', value: mockAdminStats.totalOrgs, icon: Building2, change: '+3', trend: 'up' },
    { label: 'Total Users', value: mockAdminStats.totalUsers, icon: Users, change: '+28', trend: 'up' },
    { label: 'Active Users', value: mockAdminStats.activeUsers, icon: Activity, change: '+12', trend: 'up' },
    { label: 'Total Jobs', value: mockAdminStats.totalJobs, icon: Sparkles, change: '+14', trend: 'up' },
    { label: 'AI Screenings', value: formatNumber(mockAdminStats.totalScreenings), icon: Brain, change: '+843', trend: 'up' },
    { label: 'MRR', value: formatCurrency(mockAdminStats.mrr), icon: CreditCard, change: '+$2.1K', trend: 'up' },
  ];

  const revenueData = [
    { month: 'May', mrr: 12400 }, { month: 'Jun', mrr: 14200 }, { month: 'Jul', mrr: 13800 },
    { month: 'Aug', mrr: 15600 }, { month: 'Sep', mrr: 16900 }, { month: 'Oct', mrr: 18750 },
  ];

  return (
    <motion.div initial="hidden" animate="visible" variants={stagger} className="p-6 lg:p-8 space-y-8">
      <motion.div variants={fadeUp} className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-display font-bold text-white">Platform Overview</h1>
          <p className="text-sm text-surface-400 mt-1">Real-time platform metrics and health</p>
        </div>
        <span className="badge-success">All Systems Operational</span>
      </motion.div>

      <motion.div variants={stagger} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {stats.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div key={i} variants={fadeUp} className="bg-surface-900 border border-surface-800 rounded-2xl p-4">
              <div className="flex items-center justify-between mb-3">
                <Icon className="w-4 h-4 text-surface-400" />
                <div className={cn('flex items-center gap-0.5 text-xs font-medium', s.trend === 'up' ? 'text-success-400' : 'text-danger-400')}>
                  <ArrowUpRight className="w-3 h-3" />{s.change}
                </div>
              </div>
              <p className="text-xl font-bold text-white">{s.value}</p>
              <p className="text-xs text-surface-400 mt-1">{s.label}</p>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Charts */}
      <div className="grid lg:grid-cols-2 gap-6">
        <motion.div variants={fadeUp} className="bg-surface-900 border border-surface-800 rounded-2xl p-6">
          <h3 className="font-semibold text-white mb-4">Monthly Recurring Revenue</h3>
          <ResponsiveContainer width="100%" height={220}>
            <AreaChart data={revenueData}>
              <defs>
                <linearGradient id="mrrGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#38bdf8" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#38bdf8" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
              <XAxis dataKey="month" tick={{ fontSize: 12, fill: '#475569' }} />
              <YAxis tick={{ fontSize: 12, fill: '#475569' }} tickFormatter={v => `$${(v/1000).toFixed(0)}K`} />
              <Tooltip contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: 12, color: '#fff', fontSize: 12 }} formatter={v => formatCurrency(v)} />
              <Area type="monotone" dataKey="mrr" stroke="#38bdf8" fill="url(#mrrGrad)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>

        <motion.div variants={fadeUp} className="bg-surface-900 border border-surface-800 rounded-2xl p-6">
          <h3 className="font-semibold text-white mb-4">Daily AI Requests</h3>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={mockAIUsage.dailyUsage}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
              <XAxis dataKey="date" tick={{ fontSize: 12, fill: '#475569' }} />
              <YAxis tick={{ fontSize: 12, fill: '#475569' }} />
              <Tooltip contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: 12, color: '#fff', fontSize: 12 }} />
              <Bar dataKey="requests" fill="#a855f7" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Recent orgs */}
      <motion.div variants={fadeUp} className="bg-surface-900 border border-surface-800 rounded-2xl p-6">
        <div className="flex items-center justify-between mb-5">
          <h3 className="font-semibold text-white">Recent Organizations</h3>
          <Link to="/admin/organizations" className="text-xs text-brand-400 hover:text-brand-300">View All →</Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead><tr className="border-b border-surface-800">
              <th className="text-left pb-3 text-xs font-semibold text-surface-500 uppercase">Org</th>
              <th className="text-left pb-3 text-xs font-semibold text-surface-500 uppercase">Plan</th>
              <th className="text-left pb-3 text-xs font-semibold text-surface-500 uppercase">Users</th>
              <th className="text-left pb-3 text-xs font-semibold text-surface-500 uppercase">Screenings</th>
              <th className="text-left pb-3 text-xs font-semibold text-surface-500 uppercase">Status</th>
            </tr></thead>
            <tbody className="space-y-1">
              {mockAdminOrgs.map(org => (
                <tr key={org.id} className="border-b border-surface-800/50">
                  <td className="py-3 text-white font-medium">{org.name}</td>
                  <td className="py-3 text-surface-400">{org.plan}</td>
                  <td className="py-3 text-surface-400">{org.users}</td>
                  <td className="py-3 text-surface-400">{formatNumber(org.screenings)}</td>
                  <td className="py-3"><span className={cn('badge', org.status === 'Active' ? 'badge-success' : 'badge-danger')}>{org.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── ADMIN ORGANIZATIONS ───
export function AdminOrganizations() {
  const [search, setSearch] = useState('');
  const filtered = mockAdminOrgs.filter(o => o.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-6 lg:p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-display font-bold text-white">Organizations</h1>
          <p className="text-sm text-surface-400 mt-1">{mockAdminOrgs.length} organizations</p>
        </div>
        <button className="btn-primary gap-1.5"><Plus className="w-4 h-4" /> Create Org</button>
      </div>
      <div className="flex items-center gap-3">
        <div className="flex items-center bg-surface-900 border border-surface-800 rounded-xl px-3 py-1.5 flex-1 max-w-sm">
          <Search className="w-4 h-4 text-surface-500 mr-2" />
          <input type="text" placeholder="Search organizations..." value={search} onChange={e => setSearch(e.target.value)} className="bg-transparent text-sm outline-none w-full placeholder-surface-500 text-white" />
        </div>
      </div>
      <div className="bg-surface-900 border border-surface-800 rounded-2xl overflow-hidden">
        <table className="w-full text-sm">
          <thead><tr className="border-b border-surface-800">
            {['Organization', 'Plan', 'Users', 'Jobs', 'Screenings', 'Status', 'Created', ''].map(h => (
              <th key={h} className="text-left px-5 py-3 text-xs font-semibold text-surface-500 uppercase">{h}</th>
            ))}
          </tr></thead>
          <tbody>
            {filtered.map(org => (
              <tr key={org.id} className="border-b border-surface-800/50 hover:bg-surface-800/30 transition-colors">
                <td className="px-5 py-4 text-white font-medium">{org.name}</td>
                <td className="px-5 py-4"><span className={cn('badge', org.plan === 'Enterprise' ? 'badge-purple' : org.plan === 'Professional' ? 'badge-info' : 'badge-neutral')}>{org.plan}</span></td>
                <td className="px-5 py-4 text-surface-400">{org.users}</td>
                <td className="px-5 py-4 text-surface-400">{org.jobs}</td>
                <td className="px-5 py-4 text-surface-400">{formatNumber(org.screenings)}</td>
                <td className="px-5 py-4"><span className={cn('badge', org.status === 'Active' ? 'badge-success' : 'badge-danger')}>{org.status}</span></td>
                <td className="px-5 py-4 text-surface-500">{formatDate(org.createdAt)}</td>
                <td className="px-5 py-4">
                  <div className="flex gap-1">
                    <button className="p-1.5 hover:bg-surface-700 rounded-lg text-surface-400 hover:text-white transition-colors"><Eye className="w-3.5 h-3.5" /></button>
                    <button className="p-1.5 hover:bg-surface-700 rounded-lg text-surface-400 hover:text-white transition-colors"><Edit className="w-3.5 h-3.5" /></button>
                    <button className="p-1.5 hover:bg-danger-900 rounded-lg text-surface-400 hover:text-danger-400 transition-colors"><Trash2 className="w-3.5 h-3.5" /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}

// ─── ADMIN USERS ───
export function AdminUsers() {
  const allUsers = [...mockTeamMembers, ...mockTeamMembers.map(m => ({ ...m, id: m.id + '_2', email: m.email.replace('@', '2@') }))];
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-6 lg:p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-display font-bold text-white">Users</h1>
          <p className="text-sm text-surface-400 mt-1">{mockAdminStats.totalUsers} total users across all organizations</p>
        </div>
        <button className="btn-primary gap-1.5"><Plus className="w-4 h-4" /> Invite User</button>
      </div>
      <div className="bg-surface-900 border border-surface-800 rounded-2xl overflow-hidden">
        <table className="w-full text-sm">
          <thead><tr className="border-b border-surface-800">
            {['User', 'Role', 'Organization', 'Status', 'Last Active', ''].map(h => (
              <th key={h} className="text-left px-5 py-3 text-xs font-semibold text-surface-500 uppercase">{h}</th>
            ))}
          </tr></thead>
          <tbody>
            {allUsers.slice(0, 8).map((u, i) => (
              <tr key={i} className="border-b border-surface-800/50 hover:bg-surface-800/30 transition-colors">
                <td className="px-5 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-brand-900 text-brand-400 flex items-center justify-center text-xs font-bold">{u.name[0]}</div>
                    <div><p className="text-white font-medium text-sm">{u.name}</p><p className="text-xs text-surface-500">{u.email}</p></div>
                  </div>
                </td>
                <td className="px-5 py-4"><span className="badge-neutral text-xs">{u.role}</span></td>
                <td className="px-5 py-4 text-surface-400">TechCorp Inc.</td>
                <td className="px-5 py-4"><span className={cn('badge', u.status === 'Active' ? 'badge-success' : 'badge-warning')}>{u.status}</span></td>
                <td className="px-5 py-4 text-surface-500 text-xs">{u.lastActive ? timeAgo(u.lastActive) : '—'}</td>
                <td className="px-5 py-4">
                  <button className="p-1.5 hover:bg-surface-700 rounded-lg text-surface-400 hover:text-white transition-colors"><MoreHorizontal className="w-3.5 h-3.5" /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}

// ─── ADMIN SUBSCRIPTIONS ───
export function AdminSubscriptions() {
  const plans = [
    { name: 'Starter', orgs: 18, mrr: 1782, color: '#64748b' },
    { name: 'Professional', orgs: 19, mrr: 5681, color: '#38bdf8' },
    { name: 'Enterprise', orgs: 5, mrr: 11250, color: '#a855f7' },
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-6 lg:p-8 space-y-6">
      <h1 className="text-2xl font-display font-bold text-white">Subscriptions</h1>
      <div className="grid md:grid-cols-3 gap-4">
        {plans.map(p => (
          <div key={p.name} className="bg-surface-900 border border-surface-800 rounded-2xl p-5">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: p.color }} />
              <h3 className="font-semibold text-white">{p.name}</h3>
            </div>
            <p className="text-2xl font-bold text-white">{p.orgs} <span className="text-sm text-surface-400 font-normal">orgs</span></p>
            <p className="text-surface-400 mt-1">{formatCurrency(p.mrr)}/mo</p>
          </div>
        ))}
      </div>
      <div className="bg-surface-900 border border-surface-800 rounded-2xl p-6">
        <h3 className="font-semibold text-white mb-4">Revenue by Plan</h3>
        <ResponsiveContainer width="100%" height={240}>
          <BarChart data={plans}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
            <XAxis dataKey="name" tick={{ fontSize: 12, fill: '#475569' }} />
            <YAxis tick={{ fontSize: 12, fill: '#475569' }} tickFormatter={v => formatCurrency(v)} />
            <Tooltip contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: 12, color: '#fff', fontSize: 12 }} formatter={v => formatCurrency(v)} />
            <Bar dataKey="mrr" radius={[6, 6, 0, 0]}>
              {plans.map((p, i) => <Cell key={i} fill={p.color} />)}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}

// ─── ADMIN USAGE ───
export function AdminUsage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-6 lg:p-8 space-y-6">
      <h1 className="text-2xl font-display font-bold text-white">Platform Usage</h1>
      <div className="grid md:grid-cols-4 gap-4">
        {[
          { label: 'Total Tokens', value: formatNumber(mockAdminStats.totalTokens), icon: Brain },
          { label: 'Total Screenings', value: formatNumber(mockAdminStats.totalScreenings), icon: Sparkles },
          { label: 'Total AI Cost', value: formatCurrency(mockAdminStats.totalCost), icon: CreditCard },
          { label: 'Total Jobs', value: mockAdminStats.totalJobs, icon: Building2 },
        ].map((s, i) => {
          const Icon = s.icon;
          return (
            <div key={i} className="bg-surface-900 border border-surface-800 rounded-2xl p-5">
              <Icon className="w-5 h-5 text-brand-400 mb-3" />
              <p className="text-xl font-bold text-white">{s.value}</p>
              <p className="text-xs text-surface-400 mt-1">{s.label}</p>
            </div>
          );
        })}
      </div>
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="bg-surface-900 border border-surface-800 rounded-2xl p-6">
          <h3 className="font-semibold text-white mb-4">Daily Token Usage</h3>
          <ResponsiveContainer width="100%" height={220}>
            <AreaChart data={mockAIUsage.dailyUsage}>
              <defs>
                <linearGradient id="tokGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#a855f7" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#a855f7" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
              <XAxis dataKey="date" tick={{ fontSize: 12, fill: '#475569' }} />
              <YAxis tick={{ fontSize: 12, fill: '#475569' }} tickFormatter={v => `${(v/1000).toFixed(0)}K`} />
              <Tooltip contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: 12, color: '#fff', fontSize: 12 }} />
              <Area type="monotone" dataKey="tokens" stroke="#a855f7" fill="url(#tokGrad)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="bg-surface-900 border border-surface-800 rounded-2xl p-6">
          <h3 className="font-semibold text-white mb-4">Cost per Day</h3>
          <ResponsiveContainer width="100%" height={220}>
            <LineChart data={mockAIUsage.dailyUsage}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" />
              <XAxis dataKey="date" tick={{ fontSize: 12, fill: '#475569' }} />
              <YAxis tick={{ fontSize: 12, fill: '#475569' }} tickFormatter={v => `$${v}`} />
              <Tooltip contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: 12, color: '#fff', fontSize: 12 }} formatter={v => formatCurrency(v)} />
              <Line type="monotone" dataKey="cost" stroke="#22c55e" strokeWidth={2} dot={{ fill: '#22c55e', r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </motion.div>
  );
}

// ─── ADMIN AI SETTINGS ───
export function AdminAISettings() {
  const [selectedDefault, setSelectedDefault] = useState(mockAIConfig.defaultModel);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-6 lg:p-8 space-y-6 max-w-4xl">
      <h1 className="text-2xl font-display font-bold text-white">AI Settings</h1>

      <div className="bg-surface-900 border border-success-800/50 rounded-2xl p-5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-purple-500 flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div>
            <p className="font-semibold text-white">Anthropic Claude — Connected</p>
            <p className="text-xs text-surface-400">Platform-wide AI provider • {mockAIConfig.totalRequests} total requests</p>
          </div>
          <span className="badge-success ml-auto">Operational</span>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="font-semibold text-white">Available Models</h3>
        {mockAIModels.map(model => (
          <div
            key={model.id}
            onClick={() => setSelectedDefault(model.id)}
            className={cn(
              'bg-surface-900 border-2 rounded-2xl p-5 cursor-pointer transition-all',
              selectedDefault === model.id ? 'border-brand-500' : 'border-surface-800 hover:border-surface-700'
            )}
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-semibold text-white">{model.name}</h4>
                  {model.recommended && <span className="badge-primary text-[10px]">Recommended</span>}
                  {selectedDefault === model.id && <span className="badge-success text-[10px]">Platform Default</span>}
                </div>
                <p className="text-xs text-surface-500 mt-1">{model.id}</p>
                <p className="text-xs text-surface-400 mt-1">Context: {formatNumber(model.contextWindow)} tokens</p>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {model.capabilities.map(c => <span key={c} className="badge-neutral text-[10px]">{c}</span>)}
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-bold text-white">${model.inputPrice}<span className="text-xs text-surface-500">/M in</span></p>
                <p className="text-sm font-bold text-white">${model.outputPrice}<span className="text-xs text-surface-500">/M out</span></p>
                <span className={cn('badge mt-2', model.status === 'Available' ? 'badge-success' : 'badge-neutral')}>{model.status}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-surface-900 border border-surface-800 rounded-2xl p-6">
        <h3 className="font-semibold text-white mb-4">Platform AI Parameters</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div><label className="text-xs font-medium text-surface-400 mb-1.5 block">Default Max Tokens</label><input type="number" className="input bg-surface-800 border-surface-700 text-white" defaultValue={mockAIConfig.maxTokens} /></div>
          <div><label className="text-xs font-medium text-surface-400 mb-1.5 block">Default Temperature</label><input type="number" step="0.1" className="input bg-surface-800 border-surface-700 text-white" defaultValue={mockAIConfig.temperature} /></div>
          <div><label className="text-xs font-medium text-surface-400 mb-1.5 block">Request Timeout (ms)</label><input type="number" className="input bg-surface-800 border-surface-700 text-white" defaultValue={mockAIConfig.timeout} /></div>
          <div><label className="text-xs font-medium text-surface-400 mb-1.5 block">Max Retries</label><input type="number" className="input bg-surface-800 border-surface-700 text-white" defaultValue={mockAIConfig.maxRetries} /></div>
        </div>
        <div className="flex justify-end mt-5"><button className="btn-primary">Save Platform Config</button></div>
      </div>
    </motion.div>
  );
}

// ─── ADMIN AI USAGE ───
export function AdminAIUsage() {
  const colors = ['#38bdf8', '#a855f7', '#22c55e', '#f59e0b', '#ef4444'];
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-6 lg:p-8 space-y-6">
      <h1 className="text-2xl font-display font-bold text-white">AI Usage Analytics</h1>
      <div className="grid md:grid-cols-4 gap-4">
        {[
          { label: 'Total Requests', value: formatNumber(mockAIUsage.totalRequests) },
          { label: 'Total Tokens', value: formatNumber(mockAIUsage.totalTokens) },
          { label: 'Total Cost', value: formatCurrency(mockAIUsage.totalCost) },
          { label: 'Avg Latency', value: `${(mockAIUsage.avgLatency/1000).toFixed(1)}s` },
        ].map((s, i) => (
          <div key={i} className="bg-surface-900 border border-surface-800 rounded-2xl p-5">
            <p className="text-xl font-bold text-white">{s.value}</p>
            <p className="text-xs text-surface-400 mt-1">{s.label}</p>
          </div>
        ))}
      </div>
      <div className="bg-surface-900 border border-surface-800 rounded-2xl p-6">
        <h3 className="font-semibold text-white mb-4">Usage by Workflow</h3>
        <div className="space-y-4">
          {mockAIUsage.byWorkflow.map((wf, i) => (
            <div key={i}>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-sm text-surface-300">{wf.workflow}</span>
                <div className="flex items-center gap-4 text-xs text-surface-400">
                  <span>{formatNumber(wf.requests)} req</span>
                  <span>{formatCurrency(wf.cost)}</span>
                  <span className="font-bold text-white">{wf.percentage}%</span>
                </div>
              </div>
              <div className="h-2 bg-surface-800 rounded-full overflow-hidden">
                <div className="h-full rounded-full transition-all duration-500" style={{ width: `${wf.percentage}%`, backgroundColor: colors[i % colors.length] }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// ─── SYSTEM HEALTH ───
export function AdminSystemHealth() {
  const services = [
    { name: 'API Server', status: 'Operational', latency: '45ms', uptime: '99.99%' },
    { name: 'Claude AI Engine', status: 'Operational', latency: '2.3s', uptime: '99.95%' },
    { name: 'Database', status: 'Operational', latency: '3ms', uptime: '100%' },
    { name: 'Queue Service', status: 'Operational', latency: '12ms', uptime: '99.97%' },
    { name: 'Storage', status: 'Degraded', latency: '250ms', uptime: '99.80%' },
    { name: 'Email Service', status: 'Operational', latency: '180ms', uptime: '99.98%' },
  ];

  const metrics = [
    { label: 'CPU Usage', value: 42, icon: Cpu, color: '#38bdf8' },
    { label: 'Memory', value: 67, icon: Server, color: '#a855f7' },
    { label: 'Storage', value: 31, icon: HardDrive, color: '#22c55e' },
    { label: 'Network', value: 18, icon: Wifi, color: '#f59e0b' },
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-6 lg:p-8 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-display font-bold text-white">System Health</h1>
        <button className="btn-outline btn-sm gap-1.5 border-surface-700 text-surface-400 hover:text-white"><RefreshCw className="w-3.5 h-3.5" /> Refresh</button>
      </div>

      <div className="grid md:grid-cols-4 gap-4">
        {metrics.map((m, i) => {
          const Icon = m.icon;
          return (
            <div key={i} className="bg-surface-900 border border-surface-800 rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <Icon className="w-4 h-4" style={{ color: m.color }} />
                <span className="text-xs text-surface-400">{m.label}</span>
              </div>
              <p className="text-2xl font-bold text-white mb-2">{m.value}%</p>
              <div className="h-2 bg-surface-800 rounded-full overflow-hidden">
                <div className="h-full rounded-full" style={{ width: `${m.value}%`, backgroundColor: m.color }} />
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-surface-900 border border-surface-800 rounded-2xl overflow-hidden">
        <div className="px-5 py-4 border-b border-surface-800"><h3 className="font-semibold text-white">Service Status</h3></div>
        <div className="divide-y divide-surface-800">
          {services.map((s, i) => (
            <div key={i} className="flex items-center justify-between px-5 py-4">
              <div className="flex items-center gap-3">
                <div className={cn('w-2 h-2 rounded-full', s.status === 'Operational' ? 'bg-success-500' : 'bg-warning-500')} />
                <span className="text-sm text-white">{s.name}</span>
              </div>
              <div className="flex items-center gap-6 text-sm">
                <span className="text-surface-400">Latency: {s.latency}</span>
                <span className="text-surface-400">Uptime: {s.uptime}</span>
                <span className={cn('badge', s.status === 'Operational' ? 'badge-success' : 'badge-warning')}>{s.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// ─── ADMIN QUEUES ───
export function AdminQueues() {
  const queues = [
    { name: 'AI Screening Queue', pending: 12, processing: 3, completed: 1847, failed: 15, avgTime: '45s' },
    { name: 'Resume Parser Queue', pending: 5, processing: 1, completed: 3200, failed: 8, avgTime: '12s' },
    { name: 'Email Delivery Queue', pending: 23, processing: 2, completed: 45200, failed: 42, avgTime: '2s' },
    { name: 'Report Generator Queue', pending: 2, processing: 0, completed: 890, failed: 3, avgTime: '5s' },
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-6 lg:p-8 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-display font-bold text-white">Queue Management</h1>
        <button className="btn-outline btn-sm gap-1.5 border-surface-700 text-surface-400 hover:text-white"><RefreshCw className="w-3.5 h-3.5" /> Refresh</button>
      </div>
      <div className="space-y-4">
        {queues.map((q, i) => (
          <div key={i} className="bg-surface-900 border border-surface-800 rounded-2xl p-5">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-white">{q.name}</h3>
              <span className="text-xs text-surface-400">Avg: {q.avgTime}</span>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[
                { label: 'Pending', value: q.pending, color: 'text-warning-400' },
                { label: 'Processing', value: q.processing, color: 'text-info-400' },
                { label: 'Completed', value: formatNumber(q.completed), color: 'text-success-400' },
                { label: 'Failed', value: q.failed, color: 'text-danger-400' },
              ].map(stat => (
                <div key={stat.label} className="text-center p-3 bg-surface-800 rounded-xl">
                  <p className={cn('text-lg font-bold', stat.color)}>{stat.value}</p>
                  <p className="text-xs text-surface-500 mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

// ─── ADMIN AUDIT LOGS ───
export function AdminAuditLogs() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-6 lg:p-8 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-display font-bold text-white">Audit Logs</h1>
        <button className="btn-outline btn-sm gap-1.5 border-surface-700 text-surface-400 hover:text-white"><Download className="w-3.5 h-3.5" /> Export</button>
      </div>
      <div className="bg-surface-900 border border-surface-800 rounded-2xl overflow-hidden">
        <table className="w-full text-sm">
          <thead><tr className="border-b border-surface-800">
            {['Action', 'User', 'Target', 'Timestamp', 'IP'].map(h => (
              <th key={h} className="text-left px-5 py-3 text-xs font-semibold text-surface-500 uppercase">{h}</th>
            ))}
          </tr></thead>
          <tbody>
            {[...mockAuditLogs, ...mockAuditLogs].map((log, i) => (
              <tr key={i} className="border-b border-surface-800/50 hover:bg-surface-800/30 transition-colors">
                <td className="px-5 py-3.5 text-white font-medium">{log.action}</td>
                <td className="px-5 py-3.5 text-surface-400">{log.user}</td>
                <td className="px-5 py-3.5 text-surface-400 max-w-xs truncate">{log.target}</td>
                <td className="px-5 py-3.5 text-surface-500 text-xs">{timeAgo(log.timestamp)}</td>
                <td className="px-5 py-3.5 text-surface-500 text-xs font-mono">{log.ip || '—'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}

// ─── ADMIN SUPPORT ───
export function AdminSupport() {
  const tickets = [
    { id: 'TKT-001', subject: 'AI screening not returning results', org: 'StartupXYZ', priority: 'High', status: 'Open', created: '2h ago' },
    { id: 'TKT-002', subject: 'Billing issue — double charge', org: 'DesignStudio', priority: 'Critical', status: 'In Progress', created: '5h ago' },
    { id: 'TKT-003', subject: 'Integration with Greenhouse not syncing', org: 'DataDriven Co.', priority: 'Medium', status: 'Open', created: '1d ago' },
    { id: 'TKT-004', subject: 'Team member cannot access reports', org: 'TechCorp Inc.', priority: 'Low', status: 'Resolved', created: '2d ago' },
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-6 lg:p-8 space-y-6">
      <h1 className="text-2xl font-display font-bold text-white">Support Tickets</h1>
      <div className="space-y-3">
        {tickets.map(t => (
          <div key={t.id} className="bg-surface-900 border border-surface-800 rounded-2xl p-5">
            <div className="flex items-start justify-between mb-2">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-mono text-surface-500">{t.id}</span>
                  <span className={cn('badge', t.priority === 'Critical' ? 'badge-danger' : t.priority === 'High' ? 'badge-warning' : t.priority === 'Medium' ? 'badge-info' : 'badge-neutral')}>{t.priority}</span>
                </div>
                <h3 className="text-sm font-semibold text-white">{t.subject}</h3>
                <p className="text-xs text-surface-500 mt-0.5">{t.org} • {t.created}</p>
              </div>
              <div className="flex items-center gap-2">
                <span className={cn('badge', t.status === 'Open' ? 'badge-warning' : t.status === 'In Progress' ? 'badge-info' : 'badge-success')}>{t.status}</span>
                <button className="btn-ghost btn-sm text-surface-400 hover:text-white border border-surface-700">View</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

// ─── ADMIN PLATFORM SETTINGS ───
export function AdminPlatformSettings() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-6 lg:p-8 space-y-6 max-w-3xl">
      <h1 className="text-2xl font-display font-bold text-white">Platform Settings</h1>

      {[
        { title: 'General', fields: [{ label: 'Platform Name', value: 'Static Global' }, { label: 'Support Email', value: 'support@staticglobal.com' }, { label: 'Max Orgs Per Plan (Starter)', value: '50' }] },
        { title: 'Security', fields: [{ label: 'Session Timeout (mins)', value: '60' }, { label: 'Max Login Attempts', value: '5' }, { label: 'Password Min Length', value: '8' }] },
      ].map(section => (
        <div key={section.title} className="bg-surface-900 border border-surface-800 rounded-2xl p-6">
          <h3 className="font-semibold text-white mb-4">{section.title}</h3>
          <div className="space-y-4">
            {section.fields.map(f => (
              <div key={f.label}>
                <label className="text-xs font-medium text-surface-400 mb-1.5 block">{f.label}</label>
                <input type="text" className="input bg-surface-800 border-surface-700 text-white placeholder-surface-600" defaultValue={f.value} />
              </div>
            ))}
          </div>
          <div className="flex justify-end mt-5"><button className="btn-primary">Save</button></div>
        </div>
      ))}
    </motion.div>
  );
}
