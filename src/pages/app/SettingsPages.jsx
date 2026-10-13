import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  User, Building2, Lock, Bell, Eye, Database, CreditCard, Sparkles, Key, Webhook,
  Settings, Save, Upload, Trash2, Plus, Copy, RefreshCw, CheckCircle, AlertCircle,
  Shield, Globe, Mail, Phone, Camera, ExternalLink, ToggleLeft, ToggleRight, Download
} from 'lucide-react';
import {
  mockUser, mockOrganization, mockAIModels, mockAIConfig, mockAIUsage
} from '../../lib/mock-data';
import { cn, formatCurrency, formatNumber } from '../../lib/utils';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const SettingsHeader = ({ title, description }) => (
  <div className="mb-8">
    <h1 className="text-xl font-display font-bold text-surface-950">{title}</h1>
    {description && <p className="text-sm text-surface-500 mt-1">{description}</p>}
  </div>
);

const SettingsSection = ({ title, children, description }) => (
  <div className="card p-6 mb-6">
    {title && <h3 className="font-semibold text-surface-900 mb-1">{title}</h3>}
    {description && <p className="text-xs text-surface-500 mb-4">{description}</p>}
    {children}
  </div>
);

const Toggle = ({ label, description, defaultOn = false }) => {
  const [on, setOn] = useState(defaultOn);
  return (
    <div className="flex items-center justify-between py-3 border-b border-surface-50 last:border-0">
      <div><p className="text-sm font-medium text-surface-700">{label}</p>{description && <p className="text-xs text-surface-400 mt-0.5">{description}</p>}</div>
      <button onClick={() => setOn(!on)} className={cn('w-10 h-6 rounded-full transition-colors flex items-center', on ? 'bg-brand-500 justify-end' : 'bg-surface-300 justify-start')}>
        <div className="w-4 h-4 bg-white rounded-full shadow-sm mx-1" />
      </button>
    </div>
  );
};

// ─── PROFILE SETTINGS ───
export function ProfileSettings() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-6 lg:p-8 max-w-3xl">
      <SettingsHeader title="Profile" description="Manage your personal information and preferences" />
      <SettingsSection title="Personal Information">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-2xl bg-brand-100 flex items-center justify-center text-brand-700 font-bold text-lg">SC</div>
          <div>
            <button className="btn-outline btn-sm gap-1.5"><Camera className="w-3.5 h-3.5" /> Change Photo</button>
            <p className="text-xs text-surface-400 mt-1">JPG or PNG, max 2MB</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div><label className="label">First Name</label><input type="text" className="input" defaultValue="Sarah" /></div>
          <div><label className="label">Last Name</label><input type="text" className="input" defaultValue="Chen" /></div>
          <div><label className="label">Email</label><input type="email" className="input" defaultValue={mockUser.email} /></div>
          <div><label className="label">Phone</label><input type="tel" className="input" defaultValue="+1 555-0100" /></div>
          <div className="md:col-span-2"><label className="label">Job Title</label><input type="text" className="input" defaultValue="Head of Talent Acquisition" /></div>
        </div>
        <div className="flex justify-end mt-6"><button className="btn-primary gap-1.5"><Save className="w-4 h-4" /> Save Changes</button></div>
      </SettingsSection>
    </motion.div>
  );
}

// ─── COMPANY SETTINGS ───
export function CompanySettings() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-6 lg:p-8 max-w-3xl">
      <SettingsHeader title="Company" description="Manage your organization settings" />
      <SettingsSection title="Organization Details">
        <div className="grid md:grid-cols-2 gap-4">
          <div><label className="label">Company Name</label><input type="text" className="input" defaultValue={mockOrganization.name} /></div>
          <div><label className="label">Domain</label><input type="text" className="input" defaultValue={mockOrganization.domain} /></div>
          <div><label className="label">Plan</label><input type="text" className="input bg-surface-50" value={mockOrganization.plan} readOnly /></div>
          <div><label className="label">Seats</label><input type="text" className="input bg-surface-50" value={`${mockOrganization.usedSeats} / ${mockOrganization.seats}`} readOnly /></div>
        </div>
        <div className="flex justify-end mt-6"><button className="btn-primary gap-1.5"><Save className="w-4 h-4" /> Save Changes</button></div>
      </SettingsSection>
    </motion.div>
  );
}

// ─── SECURITY SETTINGS ───
export function SecuritySettings() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-6 lg:p-8 max-w-3xl">
      <SettingsHeader title="Security" description="Manage passwords, 2FA, and login sessions" />
      <SettingsSection title="Change Password">
        <div className="space-y-4">
          <div><label className="label">Current Password</label><input type="password" className="input" placeholder="••••••••" /></div>
          <div><label className="label">New Password</label><input type="password" className="input" placeholder="••••••••" /></div>
          <div><label className="label">Confirm New Password</label><input type="password" className="input" placeholder="••••••••" /></div>
        </div>
        <div className="flex justify-end mt-6"><button className="btn-primary gap-1.5"><Save className="w-4 h-4" /> Update Password</button></div>
      </SettingsSection>
      <SettingsSection title="Two-Factor Authentication" description="Add an extra layer of security to your account">
        <div className="flex items-center justify-between p-4 bg-warning-50 rounded-xl border border-warning-100">
          <div className="flex items-center gap-3">
            <Shield className="w-5 h-5 text-warning-600" />
            <div>
              <p className="text-sm font-medium text-surface-900">2FA is not enabled</p>
              <p className="text-xs text-surface-500">Protect your account with authenticator app</p>
            </div>
          </div>
          <button className="btn-primary btn-sm">Enable 2FA</button>
        </div>
      </SettingsSection>
      <SettingsSection title="Active Sessions">
        {[
          { device: 'Chrome on Windows', location: 'San Francisco, US', time: 'Current session', current: true },
          { device: 'Safari on macOS', location: 'San Francisco, US', time: '2 hours ago', current: false },
        ].map((s, i) => (
          <div key={i} className="flex items-center justify-between py-3 border-b border-surface-50 last:border-0">
            <div>
              <p className="text-sm font-medium text-surface-700">{s.device}</p>
              <p className="text-xs text-surface-500">{s.location} • {s.time}</p>
            </div>
            {s.current ? <span className="badge-success">Current</span> : <button className="btn-ghost btn-sm text-danger-600">Revoke</button>}
          </div>
        ))}
      </SettingsSection>
    </motion.div>
  );
}

// ─── NOTIFICATION SETTINGS ───
export function NotificationSettings() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-6 lg:p-8 max-w-3xl">
      <SettingsHeader title="Notifications" description="Choose how you want to be notified" />
      <SettingsSection title="Email Notifications">
        <Toggle label="New applications" description="Get notified when candidates apply" defaultOn />
        <Toggle label="AI screening complete" description="When Claude finishes screening a candidate" defaultOn />
        <Toggle label="Interview reminders" description="Reminders before scheduled interviews" defaultOn />
        <Toggle label="Weekly digest" description="Weekly summary of recruitment activity" />
        <Toggle label="Product updates" description="New features and improvements" />
      </SettingsSection>
      <SettingsSection title="In-App Notifications">
        <Toggle label="Desktop push notifications" defaultOn />
        <Toggle label="Sound alerts" />
      </SettingsSection>
    </motion.div>
  );
}

// ─── PRIVACY SETTINGS ───
export function PrivacySettings() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-6 lg:p-8 max-w-3xl">
      <SettingsHeader title="Privacy" description="Control data sharing and visibility" />
      <SettingsSection title="Data Privacy">
        <Toggle label="Share anonymized usage data" description="Help improve the platform" defaultOn />
        <Toggle label="AI training data" description="Allow anonymized data to improve AI models" />
        <Toggle label="Third-party analytics" description="Allow analytics cookies" defaultOn />
      </SettingsSection>
      <SettingsSection title="Data Export">
        <p className="text-sm text-surface-500 mb-4">Download a copy of all your data</p>
        <button className="btn-outline gap-1.5"><Download className="w-4 h-4" /> Export All Data</button>
      </SettingsSection>
    </motion.div>
  );
}


// ─── RETENTION SETTINGS ───
export function RetentionSettings() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-6 lg:p-8 max-w-3xl">
      <SettingsHeader title="Data Retention" description="Configure how long data is stored" />
      <SettingsSection title="Retention Policies">
        <div className="space-y-4">
          {[
            { label: 'Candidate data', value: '24 months' },
            { label: 'AI screening results', value: '12 months' },
            { label: 'Interview recordings', value: '6 months' },
            { label: 'Audit logs', value: '36 months' },
          ].map(p => (
            <div key={p.label} className="flex items-center justify-between">
              <span className="text-sm text-surface-700">{p.label}</span>
              <select className="select-input w-40 py-1.5 text-sm">{['6 months', '12 months', '24 months', '36 months', 'Indefinite'].map(o => <option key={o} selected={o===p.value}>{o}</option>)}</select>
            </div>
          ))}
        </div>
        <div className="flex justify-end mt-6"><button className="btn-primary gap-1.5"><Save className="w-4 h-4" /> Save</button></div>
      </SettingsSection>
    </motion.div>
  );
}

// ─── BILLING SETTINGS ───
export function BillingSettings() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-6 lg:p-8 max-w-3xl">
      <SettingsHeader title="Billing" description="Manage your subscription and billing" />
      <SettingsSection title="Current Plan">
        <div className="flex items-center justify-between p-4 bg-brand-50 rounded-xl border border-brand-100">
          <div>
            <p className="text-base font-bold text-surface-900">{mockOrganization.plan} Plan</p>
            <p className="text-sm text-surface-500">Next billing date: Nov 15, 2024</p>
          </div>
          <button className="btn-primary btn-sm">Upgrade Plan</button>
        </div>
      </SettingsSection>
      <SettingsSection title="Usage This Month">
        <div className="grid grid-cols-3 gap-4 mb-4">
          {[
            { label: 'AI Screenings', used: 342, limit: 500 },
            { label: 'Team Seats', used: mockOrganization.usedSeats, limit: mockOrganization.seats },
            { label: 'API Calls', used: 1847, limit: 5000 },
          ].map(u => (
            <div key={u.label} className="text-center">
              <p className="text-lg font-bold text-surface-900">{u.used}<span className="text-sm text-surface-400">/{u.limit}</span></p>
              <p className="text-xs text-surface-500">{u.label}</p>
              <div className="progress-bar mt-2"><div className="progress-fill bg-brand-500" style={{ width: `${(u.used/u.limit)*100}%` }} /></div>
            </div>
          ))}
        </div>
      </SettingsSection>
      <SettingsSection title="Payment Method">
        <div className="flex items-center justify-between p-4 bg-surface-50 rounded-xl border border-surface-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-7 bg-surface-800 rounded flex items-center justify-center text-white text-[10px] font-bold">VISA</div>
            <div><p className="text-sm font-medium text-surface-900">•••• •••• •••• 4242</p><p className="text-xs text-surface-500">Expires 12/25</p></div>
          </div>
          <button className="btn-outline btn-sm">Update</button>
        </div>
      </SettingsSection>
    </motion.div>
  );
}

// ─── AI SETTINGS ───
export function AISettings() {
  const [selectedModel, setSelectedModel] = useState(mockAIConfig.defaultModel);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-6 lg:p-8 max-w-4xl">
      <SettingsHeader title="AI Configuration" description="Configure Anthropic Claude integration and model settings" />

      {/* Connection Status */}
      <SettingsSection>
        <div className="flex items-center justify-between p-4 bg-success-50 rounded-xl border border-success-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-500 to-purple-500 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-sm font-semibold text-surface-900">Anthropic Claude — {mockAIConfig.status}</p>
              <p className="text-xs text-surface-500">Provider: {mockAIConfig.provider} • API connected</p>
            </div>
          </div>
          <span className="badge-success gap-1.5"><CheckCircle className="w-3 h-3" /> Connected</span>
        </div>
      </SettingsSection>

      {/* Model Selection */}
      <SettingsSection title="Model Selection" description="Choose the Claude model for different workflows">
        <div className="space-y-3 mb-6">
          {mockAIModels.map(model => (
            <div
              key={model.id}
              onClick={() => setSelectedModel(model.id)}
              className={cn(
                'p-4 rounded-xl border-2 cursor-pointer transition-all',
                selectedModel === model.id ? 'border-brand-500 bg-brand-50/30' : 'border-surface-200 hover:border-surface-300'
              )}
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm font-semibold text-surface-900">{model.name}</h4>
                    {model.recommended && <span className="badge-primary text-[10px]">Recommended</span>}
                  </div>
                  <p className="text-xs text-surface-500 mt-1">
                    Context: {formatNumber(model.contextWindow)} tokens • Max output: {formatNumber(model.maxOutput)} tokens
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {model.capabilities.map(c => <span key={c} className="badge-neutral text-[10px]">{c}</span>)}
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-semibold text-surface-900">${model.inputPrice}<span className="text-xs text-surface-400">/M input</span></p>
                  <p className="text-sm font-semibold text-surface-900">${model.outputPrice}<span className="text-xs text-surface-400">/M output</span></p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SettingsSection>

      {/* Task-Specific Models */}
      <SettingsSection title="Task-Specific Models" description="Assign different models to different workflows">
        <div className="space-y-4">
          {Object.entries(mockAIConfig.taskModels).map(([task, modelId]) => (
            <div key={task} className="flex items-center justify-between">
              <span className="text-sm text-surface-700 capitalize">{task.replace(/([A-Z])/g, ' $1').trim()}</span>
              <select className="select-input w-64 py-1.5 text-sm" defaultValue={modelId}>
                {mockAIModels.map(m => <option key={m.id} value={m.id}>{m.name}</option>)}
              </select>
            </div>
          ))}
        </div>
      </SettingsSection>

      {/* Parameters */}
      <SettingsSection title="Model Parameters">
        <div className="grid md:grid-cols-2 gap-4">
          <div><label className="label">Max Tokens</label><input type="number" className="input" defaultValue={mockAIConfig.maxTokens} /></div>
          <div><label className="label">Temperature</label><input type="number" step="0.1" className="input" defaultValue={mockAIConfig.temperature} /></div>
          <div><label className="label">Timeout (ms)</label><input type="number" className="input" defaultValue={mockAIConfig.timeout} /></div>
          <div><label className="label">Max Retries</label><input type="number" className="input" defaultValue={mockAIConfig.maxRetries} /></div>
        </div>
        <div className="flex justify-end mt-6"><button className="btn-primary gap-1.5"><Save className="w-4 h-4" /> Save Configuration</button></div>
      </SettingsSection>

      {/* Budget */}
      <SettingsSection title="Budget & Limits">
        <div className="flex items-center justify-between p-4 bg-surface-50 rounded-xl mb-4">
          <div>
            <p className="text-sm text-surface-500">Monthly Budget</p>
            <p className="text-xl font-bold text-surface-900">{formatCurrency(mockAIConfig.currentSpend)} <span className="text-sm font-normal text-surface-400">/ {formatCurrency(mockAIConfig.monthlyBudget)}</span></p>
          </div>
          <div className="w-32">
            <div className="progress-bar"><div className="progress-fill bg-brand-500" style={{ width: `${(mockAIConfig.currentSpend/mockAIConfig.monthlyBudget)*100}%` }} /></div>
            <p className="text-xs text-surface-400 mt-1 text-right">{Math.round((mockAIConfig.currentSpend/mockAIConfig.monthlyBudget)*100)}% used</p>
          </div>
        </div>
        <Toggle label="Alert on 80% budget" description="Receive notification when 80% of budget is used" defaultOn />
        <Toggle label="Auto-pause on budget exceeded" description="Stop AI processing when budget is exceeded" />
      </SettingsSection>

      {/* Usage Chart */}
      <SettingsSection title="Usage Overview">
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={mockAIUsage.dailyUsage}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
            <XAxis dataKey="date" tick={{ fontSize: 12, fill: '#94a3b8' }} />
            <YAxis tick={{ fontSize: 12, fill: '#94a3b8' }} />
            <Tooltip contentStyle={{ borderRadius: 12, border: '1px solid #e2e8f0', fontSize: 12 }} />
            <Bar dataKey="requests" fill="#38bdf8" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
        <div className="grid grid-cols-4 gap-4 mt-4">
          {[
            { label: 'Total Requests', value: formatNumber(mockAIConfig.totalRequests) },
            { label: 'Avg Latency', value: mockAIConfig.avgLatency },
            { label: 'Error Rate', value: mockAIConfig.errorRate },
            { label: 'Total Spend', value: formatCurrency(mockAIConfig.currentSpend) },
          ].map(s => (
            <div key={s.label} className="text-center p-3 bg-surface-50 rounded-xl">
              <p className="text-sm font-bold text-surface-900">{s.value}</p>
              <p className="text-xs text-surface-500">{s.label}</p>
            </div>
          ))}
        </div>
      </SettingsSection>
    </motion.div>
  );
}

// ─── API KEYS SETTINGS ───
export function APIKeysSettings() {
  const keys = [
    { name: 'Production Key', prefix: 'sg_prod_', created: 'Oct 1, 2024', lastUsed: '2 hours ago', status: 'Active' },
    { name: 'Staging Key', prefix: 'sg_stg_', created: 'Sep 15, 2024', lastUsed: '5 days ago', status: 'Active' },
  ];
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-6 lg:p-8 max-w-3xl">
      <SettingsHeader title="API Keys" description="Manage API keys for integrations" />
      <SettingsSection>
        <div className="flex justify-end mb-4"><button className="btn-primary btn-sm gap-1.5"><Plus className="w-3.5 h-3.5" /> Generate Key</button></div>
        {keys.map(k => (
          <div key={k.name} className="flex items-center justify-between py-3 border-b border-surface-50 last:border-0">
            <div>
              <p className="text-sm font-medium text-surface-900">{k.name}</p>
              <p className="text-xs text-surface-500 font-mono">{k.prefix}••••••••••</p>
              <p className="text-xs text-surface-400 mt-1">Created {k.created} • Last used {k.lastUsed}</p>
            </div>
            <div className="flex items-center gap-2">
              <button className="btn-ghost btn-sm"><Copy className="w-3.5 h-3.5" /></button>
              <button className="btn-ghost btn-sm text-danger-600"><Trash2 className="w-3.5 h-3.5" /></button>
            </div>
          </div>
        ))}
      </SettingsSection>
    </motion.div>
  );
}

// ─── WEBHOOKS SETTINGS ───
export function WebhooksSettings() {
  const hooks = [
    { url: 'https://hooks.slack.com/services/xxx', events: ['screening.complete', 'application.new'], status: 'Active' },
    { url: 'https://api.internal.com/webhooks/sg', events: ['candidate.stage_changed'], status: 'Active' },
  ];
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-6 lg:p-8 max-w-3xl">
      <SettingsHeader title="Webhooks" description="Configure webhook endpoints for real-time events" />
      <SettingsSection>
        <div className="flex justify-end mb-4"><button className="btn-primary btn-sm gap-1.5"><Plus className="w-3.5 h-3.5" /> Add Webhook</button></div>
        {hooks.map((h, i) => (
          <div key={i} className="p-4 bg-surface-50 rounded-xl mb-3 last:mb-0">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-mono text-surface-700 truncate flex-1 mr-4">{h.url}</p>
              <span className="badge-success">{h.status}</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {h.events.map(e => <span key={e} className="badge-neutral text-[10px] font-mono">{e}</span>)}
            </div>
          </div>
        ))}
      </SettingsSection>
    </motion.div>
  );
}

// ─── INTEGRATIONS SETTINGS ───
export function IntegrationsSettings() {
  const integrations = [
    { name: 'Slack', description: 'Send notifications to Slack channels', connected: true, icon: '💬' },
    { name: 'Google Calendar', description: 'Sync interview schedules', connected: true, icon: '📅' },
    { name: 'LinkedIn', description: 'Import candidate profiles', connected: false, icon: '💼' },
    { name: 'Greenhouse', description: 'Sync jobs and candidates', connected: false, icon: '🌿' },
    { name: 'Workday', description: 'Sync employee data', connected: false, icon: '🏢' },
    { name: 'DocuSign', description: 'Send and track offer letters', connected: false, icon: '✍️' },
  ];
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-6 lg:p-8 max-w-3xl">
      <SettingsHeader title="Integrations" description="Connect third-party tools and services" />
      <div className="grid md:grid-cols-2 gap-4">
        {integrations.map(int => (
          <div key={int.name} className="card p-5">
            <div className="flex items-start gap-3">
              <span className="text-2xl">{int.icon}</span>
              <div className="flex-1">
                <h3 className="text-sm font-semibold text-surface-900">{int.name}</h3>
                <p className="text-xs text-surface-500 mt-0.5">{int.description}</p>
              </div>
            </div>
            <div className="mt-4">
              {int.connected ? (
                <div className="flex items-center justify-between">
                  <span className="badge-success gap-1"><CheckCircle className="w-3 h-3" /> Connected</span>
                  <button className="btn-ghost btn-sm text-danger-600">Disconnect</button>
                </div>
              ) : (
                <button className="btn-outline btn-sm w-full justify-center">Connect</button>
              )}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
