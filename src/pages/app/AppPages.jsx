import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Briefcase, Users, Brain, Search, Filter, Plus, MoreHorizontal, MapPin,
  Clock, DollarSign, Eye, Edit, Trash2, ChevronDown, CheckCircle, XCircle,
  AlertCircle, ArrowRight, Calendar, Star, Mail, Phone, FileText, Download,
  GitBranch, BarChart3, TrendingUp, Zap, Sparkles, MessageSquare, UserPlus,
  Shield, ClipboardList, Activity, Settings, ExternalLink, Copy, RefreshCw,
  Tag, Hash, Building2, Globe, Layers, Target, ArrowUpRight
} from 'lucide-react';
import {
  mockJobs, mockCandidates, mockScreenings, mockAssessments, mockInterviews,
  mockPipelineStages, mockTeamMembers, mockAuditLogs, mockRecentActivity,
  mockNotifications, mockAIModels, mockAIConfig, mockAIUsage
} from '../../lib/mock-data';
import { cn, formatDate, formatCurrency, formatNumber, getInitials, timeAgo } from '../../lib/utils';
import { AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };
const stagger = { visible: { transition: { staggerChildren: 0.05 } } };

// ─── JOBS PAGE ───
export function JobsPage() {
  const [view, setView] = useState('grid');
  const [filter, setFilter] = useState('All');
  const statuses = ['All', 'Active', 'Draft', 'Closed'];
  const filteredJobs = filter === 'All' ? mockJobs : mockJobs.filter(j => j.status === filter);

  const statusBadge = (status) => {
    const map = { Active: 'badge-success', Draft: 'badge-warning', Closed: 'badge-neutral' };
    return map[status] || 'badge-neutral';
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={stagger} className="p-6 lg:p-8 space-y-6">
      <motion.div variants={fadeUp} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-display font-bold text-surface-950">Jobs</h1>
          <p className="text-sm text-surface-500 mt-1">{mockJobs.length} total jobs • {mockJobs.filter(j=>j.status==='Active').length} active</p>
        </div>
        <Link to="/app/jobs/new" className="btn-primary gap-1.5"><Plus className="w-4 h-4" /> Create Job</Link>
      </motion.div>

      <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3">
        <div className="flex items-center bg-surface-100 rounded-xl px-3 py-1.5 flex-1 max-w-sm">
          <Search className="w-4 h-4 text-surface-400 mr-2" />
          <input type="text" placeholder="Search jobs..." className="bg-transparent text-sm outline-none w-full placeholder-surface-400" />
        </div>
        <div className="flex gap-1.5">
          {statuses.map(s => (
            <button key={s} onClick={() => setFilter(s)} className={cn('btn-sm', filter === s ? 'btn-primary' : 'btn-ghost')}>{s}</button>
          ))}
        </div>
      </motion.div>

      <motion.div variants={stagger} className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
        {filteredJobs.map(job => (
          <motion.div key={job.id} variants={fadeUp} className="card-hover p-5">
            <div className="flex items-start justify-between mb-3">
              <div>
                <Link to={`/app/jobs/${job.id}`} className="text-base font-semibold text-surface-900 hover:text-brand-600 transition-colors">{job.title}</Link>
                <p className="text-sm text-surface-500 mt-0.5">{job.department}</p>
              </div>
              <span className={statusBadge(job.status)}>{job.status}</span>
            </div>
            <div className="space-y-2 text-sm text-surface-500 mb-4">
              <div className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5" />{job.location}</div>
              <div className="flex items-center gap-2"><DollarSign className="w-3.5 h-3.5" />{job.salary}</div>
              <div className="flex items-center gap-2"><Clock className="w-3.5 h-3.5" />{job.type}</div>
            </div>
            <div className="flex items-center justify-between pt-3 border-t border-surface-100">
              <div className="flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-surface-400" />
                <span className="text-sm text-surface-600">{job.applicants} applicants</span>
                {job.newApplicants > 0 && <span className="badge-primary text-[10px] py-0">{job.newApplicants} new</span>}
              </div>
              <Link to={`/app/jobs/${job.id}`} className="text-xs text-brand-600 font-medium hover:underline">View →</Link>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export function JobDetailPage() {
  const { id } = useParams();
  const job = mockJobs.find(j => j.id === id) || mockJobs[0];
  const jobCandidates = mockCandidates.filter(c => c.appliedFor === job.title);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-6 lg:p-8 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-sm text-surface-500 mb-1">
            <Link to="/app/jobs" className="hover:text-brand-600">Jobs</Link>
            <span>/</span>
            <span className="text-surface-900">{job.title}</span>
          </div>
          <h1 className="text-2xl font-display font-bold text-surface-950">{job.title}</h1>
        </div>
        <div className="flex gap-2">
          <button className="btn-outline btn-sm gap-1.5"><Edit className="w-3.5 h-3.5" /> Edit</button>
          <button className="btn-primary btn-sm gap-1.5"><Eye className="w-3.5 h-3.5" /> Preview</button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="card p-6">
            <h3 className="font-semibold text-surface-900 mb-3">Job Description</h3>
            <p className="text-sm text-surface-600 leading-relaxed">{job.description}</p>
            <h4 className="font-semibold text-surface-900 mt-6 mb-3">Requirements</h4>
            <ul className="space-y-2">
              {job.requirements.map((r, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-surface-600">
                  <CheckCircle className="w-4 h-4 text-success-500 shrink-0" />{r}
                </li>
              ))}
            </ul>
            <h4 className="font-semibold text-surface-900 mt-6 mb-3">Benefits</h4>
            <div className="flex flex-wrap gap-2">
              {job.benefits.map((b, i) => <span key={i} className="badge-neutral">{b}</span>)}
            </div>
          </div>

          <div className="card p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-surface-900">Candidates ({jobCandidates.length})</h3>
              <button className="btn-sm btn-outline gap-1.5"><Brain className="w-3.5 h-3.5" /> Screen All</button>
            </div>
            <div className="space-y-2">
              {jobCandidates.map(c => (
                <Link key={c.id} to={`/app/candidates/${c.id}`} className="flex items-center gap-4 p-3 rounded-xl hover:bg-surface-50 transition-colors">
                  <div className="avatar avatar-md bg-brand-100 text-brand-700">{getInitials(c.name)}</div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-surface-900">{c.name}</p>
                    <p className="text-xs text-surface-500">{c.currentRole} at {c.company}</p>
                  </div>
                  <span className={cn('badge', c.matchScore >= 90 ? 'badge-success' : c.matchScore >= 80 ? 'badge-info' : c.matchScore >= 70 ? 'badge-warning' : 'badge-neutral')}>{c.matchScore}% match</span>
                </Link>
              ))}
              {jobCandidates.length === 0 && <p className="text-sm text-surface-400 text-center py-6">No candidates yet</p>}
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div className="card p-5">
            <h4 className="text-sm font-semibold text-surface-900 mb-3">Job Details</h4>
            <dl className="space-y-3 text-sm">
              {[
                ['Status', job.status], ['Department', job.department], ['Location', job.location],
                ['Type', job.type], ['Salary', job.salary], ['Posted', job.posted ? formatDate(job.posted) : 'Draft'],
                ['Deadline', job.deadline ? formatDate(job.deadline) : '—'],
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between">
                  <dt className="text-surface-500">{label}</dt>
                  <dd className="font-medium text-surface-900">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="card p-5">
            <h4 className="text-sm font-semibold text-surface-900 mb-3">Quick Stats</h4>
            <div className="grid grid-cols-2 gap-3">
              {[
                { label: 'Applicants', value: job.applicants },
                { label: 'New', value: job.newApplicants },
                { label: 'Screened', value: Math.floor(job.applicants * 0.6) },
                { label: 'Interviewed', value: Math.floor(job.applicants * 0.2) },
              ].map(s => (
                <div key={s.label} className="text-center p-3 bg-surface-50 rounded-xl">
                  <p className="text-lg font-bold text-surface-900">{s.value}</p>
                  <p className="text-xs text-surface-500">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ─── CANDIDATES PAGE ───
export function CandidatesPage() {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const statuses = ['All', 'New', 'Screening', 'Assessment', 'Interview', 'Offer', 'Rejected'];
  const filtered = mockCandidates.filter(c =>
    (statusFilter === 'All' || c.status === statusFilter) &&
    (search === '' || c.name.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <motion.div initial="hidden" animate="visible" variants={stagger} className="p-6 lg:p-8 space-y-6">
      <motion.div variants={fadeUp} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-display font-bold text-surface-950">Candidates</h1>
          <p className="text-sm text-surface-500 mt-1">{mockCandidates.length} total candidates in pipeline</p>
        </div>
        <button className="btn-primary gap-1.5"><UserPlus className="w-4 h-4" /> Add Candidate</button>
      </motion.div>

      <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3">
        <div className="flex items-center bg-surface-100 rounded-xl px-3 py-1.5 flex-1 max-w-sm">
          <Search className="w-4 h-4 text-surface-400 mr-2" />
          <input type="text" placeholder="Search candidates..." value={search} onChange={e => setSearch(e.target.value)} className="bg-transparent text-sm outline-none w-full placeholder-surface-400" />
        </div>
        <div className="flex gap-1.5 overflow-x-auto scrollbar-none">
          {statuses.map(s => (
            <button key={s} onClick={() => setStatusFilter(s)} className={cn('btn-sm whitespace-nowrap', statusFilter === s ? 'btn-primary' : 'btn-ghost')}>{s}</button>
          ))}
        </div>
      </motion.div>

      <motion.div variants={fadeUp} className="table-container">
        <table className="table">
          <thead>
            <tr>
              <th>Candidate</th><th>Applied For</th><th>Status</th><th>Match Score</th><th>Applied</th><th></th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(c => (
              <tr key={c.id}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar avatar-sm bg-brand-100 text-brand-700">{getInitials(c.name)}</div>
                    <div>
                      <Link to={`/app/candidates/${c.id}`} className="text-sm font-medium text-surface-900 hover:text-brand-600">{c.name}</Link>
                      <p className="text-xs text-surface-500">{c.email}</p>
                    </div>
                  </div>
                </td>
                <td className="text-sm text-surface-700">{c.appliedFor}</td>
                <td>
                  <span className={cn('badge', {
                    'badge-neutral': c.status === 'New', 'badge-info': c.status === 'Screening',
                    'badge-purple': c.status === 'Assessment', 'badge-warning': c.status === 'Interview',
                    'badge-success': c.status === 'Offer', 'badge-danger': c.status === 'Rejected',
                  })}>{c.status}</span>
                </td>
                <td>
                  <div className="flex items-center gap-2">
                    <div className="progress-bar w-16"><div className="progress-fill bg-brand-500" style={{ width: `${c.matchScore}%` }} /></div>
                    <span className="text-sm font-medium text-surface-700">{c.matchScore}%</span>
                  </div>
                </td>
                <td className="text-sm text-surface-500">{formatDate(c.appliedDate)}</td>
                <td>
                  <Link to={`/app/candidates/${c.id}`} className="btn-ghost btn-sm">View</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </motion.div>
  );
}

export function CandidateDetailPage() {
  const { id } = useParams();
  const candidate = mockCandidates.find(c => c.id === id) || mockCandidates[0];
  const screening = mockScreenings.find(s => s.candidateId === candidate.id);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-6 lg:p-8 space-y-6">
      <div className="flex items-center gap-2 text-sm text-surface-500 mb-1">
        <Link to="/app/candidates" className="hover:text-brand-600">Candidates</Link><span>/</span>
        <span className="text-surface-900">{candidate.name}</span>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Profile header */}
          <div className="card p-6">
            <div className="flex items-start gap-4">
              <div className="avatar avatar-lg bg-brand-100 text-brand-700">{getInitials(candidate.name)}</div>
              <div className="flex-1">
                <h1 className="text-xl font-display font-bold text-surface-950">{candidate.name}</h1>
                <p className="text-sm text-surface-500">{candidate.currentRole} at {candidate.company}</p>
                <div className="flex flex-wrap gap-4 mt-3 text-sm text-surface-500">
                  <span className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5" />{candidate.email}</span>
                  <span className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5" />{candidate.phone}</span>
                  <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" />{candidate.location}</span>
                </div>
              </div>
              <span className={cn('badge', candidate.matchScore >= 90 ? 'badge-success' : candidate.matchScore >= 80 ? 'badge-info' : 'badge-warning')}>{candidate.matchScore}% match</span>
            </div>
          </div>

          {/* Summary */}
          <div className="card p-6">
            <h3 className="font-semibold text-surface-900 mb-3">Summary</h3>
            <p className="text-sm text-surface-600 leading-relaxed">{candidate.summary}</p>
            <h4 className="font-semibold text-surface-900 mt-5 mb-3">Skills</h4>
            <div className="flex flex-wrap gap-2">
              {candidate.skills.map(s => <span key={s} className="badge-primary">{s}</span>)}
            </div>
            <h4 className="font-semibold text-surface-900 mt-5 mb-2">Education</h4>
            <p className="text-sm text-surface-600">{candidate.education}</p>
          </div>

          {/* AI Screening */}
          {screening && screening.status === 'Completed' && (
            <div className="card p-6 border-brand-200 bg-gradient-to-br from-white to-brand-50/30">
              <div className="flex items-center gap-2 mb-4">
                <Brain className="w-5 h-5 text-brand-600" />
                <h3 className="font-semibold text-surface-900">AI Screening Results</h3>
                <span className="badge-success ml-auto">{screening.matchScore}% Match</span>
              </div>
              <div className="space-y-3">
                {screening.criteria.map((cr, i) => (
                  <div key={i} className="p-3 bg-white rounded-xl border border-surface-200">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm font-medium text-surface-900">{cr.name}</span>
                      <span className={cn('text-xs font-semibold', cr.status === 'Supported' ? 'text-success-600' : 'text-warning-600')}>{cr.status}</span>
                    </div>
                    <p className="text-xs text-surface-500">{cr.evidence}</p>
                    <span className={cn('badge text-[10px] mt-1.5', cr.confidence === 'High' ? 'badge-success' : 'badge-warning')}>Confidence: {cr.confidence}</span>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-4 mt-4 text-xs text-surface-400">
                <span>Model: {screening.model}</span>
                <span>Tokens: {formatNumber(screening.tokensUsed)}</span>
                <span>Cost: {formatCurrency(screening.cost)}</span>
              </div>
            </div>
          )}
        </div>

        <div className="space-y-4">
          <div className="card p-5">
            <h4 className="text-sm font-semibold text-surface-900 mb-3">Actions</h4>
            <div className="space-y-2">
              <button className="btn-primary w-full justify-center gap-1.5 btn-sm"><Brain className="w-3.5 h-3.5" /> Run AI Screening</button>
              <button className="btn-outline w-full justify-center gap-1.5 btn-sm"><Calendar className="w-3.5 h-3.5" /> Schedule Interview</button>
              <button className="btn-outline w-full justify-center gap-1.5 btn-sm"><Mail className="w-3.5 h-3.5" /> Send Message</button>
              <button className="btn-outline w-full justify-center gap-1.5 btn-sm"><Download className="w-3.5 h-3.5" /> Download Resume</button>
            </div>
          </div>
          <div className="card p-5">
            <h4 className="text-sm font-semibold text-surface-900 mb-3">Details</h4>
            <dl className="space-y-2.5 text-sm">
              {[
                ['Applied For', candidate.appliedFor],
                ['Status', candidate.status],
                ['Experience', candidate.experience],
                ['Applied', formatDate(candidate.appliedDate)],
              ].map(([k, v]) => (
                <div key={k} className="flex justify-between">
                  <dt className="text-surface-500">{k}</dt>
                  <dd className="font-medium text-surface-900">{v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ─── PIPELINE PAGE ───
export function PipelinePage() {
  const stageColors = { new: '#64748b', screening: '#3b82f6', assessment: '#a855f7', interview: '#f59e0b', offer: '#22c55e', hired: '#059669', rejected: '#ef4444' };

  const getCandidatesByStage = (stageName) => {
    const map = { 'New': 'New', 'AI Screening': 'Screening', 'Assessment': 'Assessment', 'Interview': 'Interview', 'Offer': 'Offer', 'Hired': 'Hired', 'Rejected': 'Rejected' };
    return mockCandidates.filter(c => c.status === map[stageName]);
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-6 lg:p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-display font-bold text-surface-950">Pipeline</h1>
          <p className="text-sm text-surface-500 mt-1">Drag candidates across stages to update their status</p>
        </div>
        <button className="btn-outline btn-sm gap-1.5"><Filter className="w-3.5 h-3.5" /> Filter</button>
      </div>

      <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-thin">
        {mockPipelineStages.map(stage => {
          const candidates = getCandidatesByStage(stage.name);
          return (
            <div key={stage.id} className="min-w-[280px] flex-shrink-0">
              <div className="flex items-center gap-2 mb-3 px-1">
                <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: stage.color }} />
                <h3 className="text-sm font-semibold text-surface-900">{stage.name}</h3>
                <span className="badge-neutral text-[10px]">{stage.count}</span>
              </div>
              <div className="space-y-2 bg-surface-50 rounded-xl p-3 min-h-[200px]">
                {candidates.map(c => (
                  <Link key={c.id} to={`/app/candidates/${c.id}`} className="block p-3 bg-white rounded-xl border border-surface-200 hover:shadow-md hover:border-brand-200 transition-all cursor-pointer">
                    <div className="flex items-center gap-2 mb-1.5">
                      <div className="avatar w-6 h-6 text-[10px] bg-brand-100 text-brand-700">{getInitials(c.name)}</div>
                      <span className="text-sm font-medium text-surface-900">{c.name}</span>
                    </div>
                    <p className="text-xs text-surface-500 mb-2">{c.appliedFor}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-surface-400">{c.matchScore}% match</span>
                      <div className="progress-bar w-12"><div className="progress-fill bg-brand-500" style={{ width: `${c.matchScore}%` }} /></div>
                    </div>
                  </Link>
                ))}
                {candidates.length === 0 && (
                  <div className="flex items-center justify-center h-24 text-xs text-surface-400">No candidates</div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}

// ─── AI SCREENING PAGE ───
export function AIScreeningPage() {
  return (
    <motion.div initial="hidden" animate="visible" variants={stagger} className="p-6 lg:p-8 space-y-6">
      <motion.div variants={fadeUp} className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-display font-bold text-surface-950">AI Screening</h1>
          <p className="text-sm text-surface-500 mt-1">Claude-powered candidate screening and evaluation</p>
        </div>
        <button className="btn-primary gap-1.5"><Sparkles className="w-4 h-4" /> New Screening</button>
      </motion.div>

      {/* Stats */}
      <motion.div variants={fadeUp} className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Total Screenings', value: mockScreenings.length, icon: Brain, color: 'brand' },
          { label: 'Completed', value: mockScreenings.filter(s=>s.status==='Completed').length, icon: CheckCircle, color: 'success' },
          { label: 'In Progress', value: mockScreenings.filter(s=>s.status==='In Progress').length, icon: RefreshCw, color: 'info' },
          { label: 'Queued', value: mockScreenings.filter(s=>s.status==='Queued').length, icon: Clock, color: 'warning' },
        ].map((s,i) => {
          const Icon = s.icon;
          return (
            <div key={i} className="stat-card">
              <Icon className={cn('w-5 h-5 mb-2', `text-${s.color}-500`)} />
              <p className="stat-value">{s.value}</p>
              <p className="stat-label">{s.label}</p>
            </div>
          );
        })}
      </motion.div>

      {/* Screening results */}
      <motion.div variants={fadeUp} className="space-y-4">
        {mockScreenings.map(scr => (
          <div key={scr.id} className={cn('card p-5', scr.status === 'Completed' && 'border-l-4 border-l-success-500')}>
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="font-semibold text-surface-900">{scr.candidateName}</h3>
                <p className="text-sm text-surface-500">{scr.jobTitle}</p>
              </div>
              <div className="flex items-center gap-2">
                {scr.matchScore && <span className="badge-success">{scr.matchScore}% Match</span>}
                <span className={cn('badge', scr.status === 'Completed' ? 'badge-success' : scr.status === 'In Progress' ? 'badge-info' : 'badge-warning')}>{scr.status}</span>
              </div>
            </div>
            {scr.criteria.length > 0 && (
              <div className="grid md:grid-cols-2 gap-2 mt-3">
                {scr.criteria.map((cr, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm p-2 rounded-lg bg-surface-50">
                    {cr.status === 'Supported' ? <CheckCircle className="w-4 h-4 text-success-500" /> : <AlertCircle className="w-4 h-4 text-warning-500" />}
                    <span className="text-surface-700">{cr.name}</span>
                    <span className={cn('text-xs font-medium ml-auto', cr.confidence === 'High' ? 'text-success-600' : 'text-warning-600')}>{cr.confidence}</span>
                  </div>
                ))}
              </div>
            )}
            <div className="flex items-center gap-4 mt-3 text-xs text-surface-400">
              <span>Model: {scr.model}</span>
              {scr.tokensUsed > 0 && <span>Tokens: {formatNumber(scr.tokensUsed)}</span>}
              {scr.cost > 0 && <span>Cost: {formatCurrency(scr.cost)}</span>}
            </div>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}

// ─── ASSESSMENTS PAGE ───
export function AssessmentsPage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-6 lg:p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-display font-bold text-surface-950">Assessments</h1>
          <p className="text-sm text-surface-500 mt-1">Claude-generated skill assessments for candidates</p>
        </div>
        <button className="btn-primary gap-1.5"><Plus className="w-4 h-4" /> Create Assessment</button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {mockAssessments.map(a => (
          <div key={a.id} className="card-hover p-5">
            <div className="flex items-start justify-between mb-3">
              <div className="w-10 h-10 rounded-xl bg-purple-50 flex items-center justify-center">
                <ClipboardList className="w-5 h-5 text-purple-600" />
              </div>
              <span className={cn('badge', a.status === 'Active' ? 'badge-success' : 'badge-warning')}>{a.status}</span>
            </div>
            <h3 className="font-semibold text-surface-900 mb-1">{a.title}</h3>
            <p className="text-xs text-surface-500 mb-3">{a.type} • {a.questions} questions • {a.duration}</p>
            <div className="flex items-center justify-between pt-3 border-t border-surface-100">
              <span className="text-sm text-surface-600">{a.completions} completions</span>
              {a.avgScore && <span className="text-sm font-medium text-surface-900">Avg: {a.avgScore}%</span>}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

// ─── INTERVIEWS PAGE ───
export function InterviewsPage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-6 lg:p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-display font-bold text-surface-950">Interviews</h1>
          <p className="text-sm text-surface-500 mt-1">Manage scheduled interviews and feedback</p>
        </div>
        <button className="btn-primary gap-1.5"><Calendar className="w-4 h-4" /> Schedule Interview</button>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {mockInterviews.map(int => (
          <div key={int.id} className={cn('card p-5', int.status === 'Completed' && 'border-l-4 border-l-success-500')}>
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="font-semibold text-surface-900">{int.candidateName}</h3>
                <p className="text-sm text-surface-500">{int.jobTitle}</p>
              </div>
              <span className={cn('badge', int.status === 'Scheduled' ? 'badge-info' : 'badge-success')}>{int.status}</span>
            </div>
            <div className="space-y-1.5 text-sm text-surface-600">
              <div className="flex items-center gap-2"><Calendar className="w-3.5 h-3.5 text-surface-400" />{int.date} at {int.time}</div>
              <div className="flex items-center gap-2"><Clock className="w-3.5 h-3.5 text-surface-400" />{int.duration}</div>
              <div className="flex items-center gap-2"><Users className="w-3.5 h-3.5 text-surface-400" />{int.interviewer}</div>
              <div className="flex items-center gap-2"><Globe className="w-3.5 h-3.5 text-surface-400" />{int.location}</div>
            </div>
            {int.feedback && (
              <div className="mt-3 p-3 bg-success-50 rounded-lg border border-success-100">
                <p className="text-xs text-success-700 font-medium">Feedback</p>
                <p className="text-sm text-success-600 mt-1">{int.feedback}</p>
              </div>
            )}
            <div className="flex gap-2 mt-4">
              <span className="badge-neutral">{int.type}</span>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

// ─── REPORTS PAGE ───
export function ReportsPage() {
  const colors = ['#38bdf8', '#a855f7', '#22c55e', '#f59e0b', '#ef4444'];
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-6 lg:p-8 space-y-6">
      <div>
        <h1 className="text-2xl font-display font-bold text-surface-950">Reports & Analytics</h1>
        <p className="text-sm text-surface-500 mt-1">Recruitment insights and performance metrics</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="card p-6">
          <h3 className="font-semibold text-surface-900 mb-4">AI Usage by Workflow</h3>
          <ResponsiveContainer width="100%" height={260}>
            <PieChart>
              <Pie data={mockAIUsage.byWorkflow} dataKey="percentage" nameKey="workflow" cx="50%" cy="50%" outerRadius={100} label={({workflow, percentage}) => `${workflow}: ${percentage}%`}>
                {mockAIUsage.byWorkflow.map((_, i) => <Cell key={i} fill={colors[i % colors.length]} />)}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="card p-6">
          <h3 className="font-semibold text-surface-900 mb-4">Daily AI Requests</h3>
          <ResponsiveContainer width="100%" height={260}>
            <LineChart data={mockAIUsage.dailyUsage}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="date" tick={{ fontSize: 12, fill: '#94a3b8' }} />
              <YAxis tick={{ fontSize: 12, fill: '#94a3b8' }} />
              <Tooltip contentStyle={{ borderRadius: 12, border: '1px solid #e2e8f0', fontSize: 12 }} />
              <Line type="monotone" dataKey="requests" stroke="#38bdf8" strokeWidth={2} dot={{ fill: '#38bdf8', r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="card p-6">
          <h3 className="font-semibold text-surface-900 mb-4">Daily AI Costs</h3>
          <ResponsiveContainer width="100%" height={260}>
            <BarChart data={mockAIUsage.dailyUsage}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="date" tick={{ fontSize: 12, fill: '#94a3b8' }} />
              <YAxis tick={{ fontSize: 12, fill: '#94a3b8' }} tickFormatter={v => `$${v}`} />
              <Tooltip contentStyle={{ borderRadius: 12, border: '1px solid #e2e8f0', fontSize: 12 }} formatter={v => formatCurrency(v)} />
              <Bar dataKey="cost" fill="#a855f7" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="card p-6">
          <h3 className="font-semibold text-surface-900 mb-4">Workflow Breakdown</h3>
          <div className="space-y-4">
            {mockAIUsage.byWorkflow.map((wf, i) => (
              <div key={i}>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-sm font-medium text-surface-700">{wf.workflow}</span>
                  <span className="text-sm text-surface-500">{formatCurrency(wf.cost)}</span>
                </div>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: `${wf.percentage}%`, backgroundColor: colors[i % colors.length] }} />
                </div>
                <p className="text-xs text-surface-400 mt-1">{formatNumber(wf.requests)} requests • {formatNumber(wf.tokens)} tokens</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ─── ACTIVITY PAGE ───
export function ActivityPage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-6 lg:p-8 space-y-6">
      <h1 className="text-2xl font-display font-bold text-surface-950">Activity Feed</h1>
      <div className="card p-6">
        <div className="space-y-1">
          {[...mockRecentActivity, ...mockRecentActivity].map((act, i) => (
            <div key={`${act.id}-${i}`} className="flex items-center gap-3 px-3 py-3 rounded-lg hover:bg-surface-50 transition-colors border-b border-surface-50 last:border-0">
              <div className="w-9 h-9 rounded-lg bg-surface-100 flex items-center justify-center">
                <Activity className="w-4 h-4 text-surface-500" />
              </div>
              <div className="flex-1"><p className="text-sm text-surface-700">{act.message}</p></div>
              <span className="text-xs text-surface-400 whitespace-nowrap">{act.time}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// ─── NOTIFICATIONS PAGE ───
export function NotificationsPage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-6 lg:p-8 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-display font-bold text-surface-950">Notifications</h1>
        <button className="btn-outline btn-sm">Mark all as read</button>
      </div>
      <div className="card divide-y divide-surface-100">
        {mockNotifications.map(n => (
          <div key={n.id} className={cn('px-6 py-4 hover:bg-surface-50 cursor-pointer transition-colors', !n.read && 'bg-brand-50/20')}>
            <div className="flex items-start gap-3">
              <div className={cn('w-2 h-2 rounded-full mt-2 shrink-0', n.read ? 'bg-surface-300' : 'bg-brand-500')} />
              <div className="flex-1">
                <p className="text-sm font-medium text-surface-900">{n.title}</p>
                <p className="text-sm text-surface-500 mt-0.5">{n.message}</p>
                <span className="text-xs text-surface-400 mt-1 inline-block">{n.time}</span>
              </div>
              <span className="badge-neutral text-[10px]">{n.type}</span>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

// ─── TEAM PAGE ───
export function TeamPage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-6 lg:p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-display font-bold text-surface-950">Team</h1>
          <p className="text-sm text-surface-500 mt-1">Manage your recruitment team members</p>
        </div>
        <button className="btn-primary gap-1.5"><UserPlus className="w-4 h-4" /> Invite Member</button>
      </div>
      <div className="table-container">
        <table className="table">
          <thead><tr><th>Member</th><th>Role</th><th>Department</th><th>Status</th><th>Last Active</th><th></th></tr></thead>
          <tbody>
            {mockTeamMembers.map(m => (
              <tr key={m.id}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar avatar-sm bg-brand-100 text-brand-700">{getInitials(m.name)}</div>
                    <div><p className="text-sm font-medium text-surface-900">{m.name}</p><p className="text-xs text-surface-500">{m.email}</p></div>
                  </div>
                </td>
                <td><span className="badge-neutral">{m.role}</span></td>
                <td className="text-sm text-surface-600">{m.department}</td>
                <td><span className={cn('badge', m.status === 'Active' ? 'badge-success' : 'badge-warning')}>{m.status}</span></td>
                <td className="text-sm text-surface-500">{m.lastActive ? timeAgo(m.lastActive) : '—'}</td>
                <td><button className="btn-ghost btn-sm"><MoreHorizontal className="w-4 h-4" /></button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}

// ─── ROLES PAGE ───
export function RolesPage() {
  const roles = [
    { name: 'Admin', description: 'Full access to all features and settings', members: 1, permissions: ['All'] },
    { name: 'Recruiter', description: 'Manage jobs, candidates, and screenings', members: 3, permissions: ['Jobs', 'Candidates', 'Screenings', 'Interviews'] },
    { name: 'Hiring Manager', description: 'Review candidates and provide feedback', members: 1, permissions: ['Candidates', 'Interviews', 'Reports'] },
    { name: 'Interviewer', description: 'Conduct interviews and submit feedback', members: 1, permissions: ['Interviews'] },
  ];
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-6 lg:p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-display font-bold text-surface-950">Roles & Permissions</h1>
          <p className="text-sm text-surface-500 mt-1">Define access levels for your team</p>
        </div>
        <button className="btn-primary gap-1.5"><Plus className="w-4 h-4" /> Create Role</button>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        {roles.map(r => (
          <div key={r.name} className="card p-5">
            <div className="flex items-start justify-between mb-2">
              <div>
                <h3 className="font-semibold text-surface-900">{r.name}</h3>
                <p className="text-sm text-surface-500">{r.description}</p>
              </div>
              <span className="badge-neutral">{r.members} members</span>
            </div>
            <div className="flex flex-wrap gap-1.5 mt-3">
              {r.permissions.map(p => <span key={p} className="badge-primary text-[10px]">{p}</span>)}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

// ─── AUDIT LOGS PAGE ───
export function AuditLogsPage() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-6 lg:p-8 space-y-6">
      <h1 className="text-2xl font-display font-bold text-surface-950">Audit Logs</h1>
      <div className="table-container">
        <table className="table">
          <thead><tr><th>Action</th><th>User</th><th>Target</th><th>Timestamp</th><th>IP Address</th></tr></thead>
          <tbody>
            {mockAuditLogs.map(log => (
              <tr key={log.id}>
                <td className="text-sm font-medium text-surface-900">{log.action}</td>
                <td className="text-sm text-surface-600">{log.user}</td>
                <td className="text-sm text-surface-600 max-w-xs truncate">{log.target}</td>
                <td className="text-sm text-surface-500">{timeAgo(log.timestamp)}</td>
                <td className="text-sm text-surface-400 font-mono">{log.ip || '—'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}
