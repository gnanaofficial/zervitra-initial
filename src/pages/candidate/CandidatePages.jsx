import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  LayoutDashboard, User, FileText, Briefcase, ClipboardList, Calendar,
  MessageSquare, Shield, Settings, CheckCircle, Clock, MapPin, Building2,
  Star, Upload, Download, Edit, Eye, Mail, Phone, Globe, Sparkles, Brain,
  AlertCircle, ArrowRight, ExternalLink, Save, Trash2, Plus, Bell
} from 'lucide-react';
import { mockJobs, mockInterviews, mockAssessments } from '../../lib/mock-data';
import { cn, formatDate } from '../../lib/utils';

const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } };
const stagger = { visible: { transition: { staggerChildren: 0.06 } } };

// ─── CANDIDATE DASHBOARD ───
export function CandidateDashboard() {
  const stats = [
    { label: 'Applications', value: 3, icon: Briefcase, color: 'brand' },
    { label: 'In Review', value: 2, icon: Eye, color: 'info' },
    { label: 'Interviews', value: 1, icon: Calendar, color: 'warning' },
    { label: 'Assessments', value: 1, icon: ClipboardList, color: 'purple' },
  ];

  return (
    <motion.div initial="hidden" animate="visible" variants={stagger} className="space-y-6">
      <motion.div variants={fadeUp}>
        <h1 className="text-2xl font-display font-bold text-surface-950">Welcome back, Alex!</h1>
        <p className="text-sm text-surface-500 mt-1">Here's an overview of your job applications</p>
      </motion.div>

      <motion.div variants={stagger} className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div key={i} variants={fadeUp} className="stat-card">
              <Icon className={cn('w-5 h-5 mb-2', `text-${s.color}-500`)} />
              <p className="stat-value">{s.value}</p>
              <p className="stat-label">{s.label}</p>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Application Status Timeline */}
      <motion.div variants={fadeUp} className="card p-6">
        <h3 className="font-semibold text-surface-900 mb-4">Application Status</h3>
        <div className="space-y-4">
          {[
            { job: 'Senior Frontend Engineer', company: 'TechCorp Inc.', status: 'Screening', date: 'Oct 5, 2024', progress: 40 },
            { job: 'Full Stack Developer', company: 'StartupXYZ', status: 'Interview Scheduled', date: 'Oct 8, 2024', progress: 60 },
            { job: 'React Developer', company: 'DesignStudio', status: 'Applied', date: 'Oct 12, 2024', progress: 20 },
          ].map((app, i) => (
            <div key={i} className="p-4 bg-surface-50 rounded-xl">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h4 className="text-sm font-semibold text-surface-900">{app.job}</h4>
                  <p className="text-xs text-surface-500">{app.company} • Applied {app.date}</p>
                </div>
                <span className={cn('badge', app.status === 'Screening' ? 'badge-info' : app.status.includes('Interview') ? 'badge-warning' : 'badge-neutral')}>{app.status}</span>
              </div>
              <div className="progress-bar mt-3">
                <div className="progress-fill bg-brand-500" style={{ width: `${app.progress}%` }} />
              </div>
              <div className="flex justify-between mt-1.5 text-[10px] text-surface-400">
                <span>Applied</span><span>Screening</span><span>Interview</span><span>Offer</span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Upcoming */}
      <div className="grid md:grid-cols-2 gap-6">
        <motion.div variants={fadeUp} className="card p-6">
          <h3 className="font-semibold text-surface-900 mb-4">Upcoming Interviews</h3>
          <div className="p-4 bg-warning-50 rounded-xl border border-warning-100">
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="w-4 h-4 text-warning-600" />
              <span className="text-sm font-semibold text-surface-900">Technical Interview</span>
            </div>
            <p className="text-sm text-surface-600">Full Stack Developer — StartupXYZ</p>
            <p className="text-xs text-surface-500 mt-1">Oct 15, 2024 at 10:00 AM • Google Meet</p>
            <button className="btn-primary btn-sm mt-3 gap-1.5"><ExternalLink className="w-3.5 h-3.5" /> Join Meeting</button>
          </div>
        </motion.div>

        <motion.div variants={fadeUp} className="card p-6">
          <h3 className="font-semibold text-surface-900 mb-4">Pending Assessments</h3>
          <div className="p-4 bg-purple-50 rounded-xl border border-purple-100">
            <div className="flex items-center gap-2 mb-2">
              <ClipboardList className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-semibold text-surface-900">Frontend Technical Assessment</span>
            </div>
            <p className="text-sm text-surface-600">8 questions • 90 minutes</p>
            <p className="text-xs text-surface-500 mt-1">Deadline: Oct 20, 2024</p>
            <button className="btn-primary btn-sm mt-3 gap-1.5"><ArrowRight className="w-3.5 h-3.5" /> Start Assessment</button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

// ─── CANDIDATE PROFILE ───
export function CandidateProfile() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
      <h1 className="text-xl font-display font-bold text-surface-950">My Profile</h1>
      <div className="card p-6">
        <div className="flex items-start gap-4 mb-6">
          <div className="w-20 h-20 rounded-2xl bg-purple-100 flex items-center justify-center text-purple-700 font-bold text-xl">AJ</div>
          <div className="flex-1">
            <h2 className="text-lg font-semibold text-surface-900">Alex Johnson</h2>
            <p className="text-sm text-surface-500">Frontend Developer • San Francisco, CA</p>
            <div className="flex flex-wrap gap-3 mt-2 text-sm text-surface-500">
              <span className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5" />alex@email.com</span>
              <span className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5" />+1 555-0101</span>
            </div>
          </div>
          <button className="btn-outline btn-sm gap-1.5"><Edit className="w-3.5 h-3.5" /> Edit</button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="label">First Name</label><input type="text" className="input" defaultValue="Alex" />
          </div>
          <div>
            <label className="label">Last Name</label><input type="text" className="input" defaultValue="Johnson" />
          </div>
          <div>
            <label className="label">Email</label><input type="email" className="input" defaultValue="alex@email.com" />
          </div>
          <div>
            <label className="label">Phone</label><input type="tel" className="input" defaultValue="+1 555-0101" />
          </div>
          <div>
            <label className="label">Location</label><input type="text" className="input" defaultValue="San Francisco, CA" />
          </div>
          <div>
            <label className="label">LinkedIn</label><input type="url" className="input" defaultValue="https://linkedin.com/in/alexjohnson" />
          </div>
          <div className="md:col-span-2">
            <label className="label">Bio</label>
            <textarea className="textarea" defaultValue="Experienced frontend developer with 6 years building React applications at scale. Passionate about performance optimization and clean code." />
          </div>
        </div>
        <div className="flex justify-end mt-6"><button className="btn-primary gap-1.5"><Save className="w-4 h-4" /> Save Changes</button></div>
      </div>

      <div className="card p-6">
        <h3 className="font-semibold text-surface-900 mb-4">Skills</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {['React', 'TypeScript', 'Next.js', 'GraphQL', 'Tailwind CSS', 'Node.js', 'PostgreSQL'].map(s => (
            <span key={s} className="badge-primary">{s}</span>
          ))}
        </div>
        <button className="btn-outline btn-sm gap-1.5"><Plus className="w-3.5 h-3.5" /> Add Skill</button>
      </div>

      <div className="card p-6">
        <h3 className="font-semibold text-surface-900 mb-4">Work Experience</h3>
        <div className="space-y-4">
          {[
            { role: 'Frontend Developer', company: 'StartupXYZ', period: '2021 — Present', desc: 'Building responsive web applications with React and TypeScript.' },
            { role: 'Junior Developer', company: 'WebAgency', period: '2018 — 2021', desc: 'Worked on client projects using React and Vue.js.' },
          ].map((exp, i) => (
            <div key={i} className="p-4 bg-surface-50 rounded-xl">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-semibold text-surface-900">{exp.role}</h4>
                  <p className="text-xs text-surface-500">{exp.company} • {exp.period}</p>
                </div>
                <button className="btn-ghost btn-sm"><Edit className="w-3.5 h-3.5" /></button>
              </div>
              <p className="text-sm text-surface-600 mt-2">{exp.desc}</p>
            </div>
          ))}
        </div>
        <button className="btn-outline btn-sm gap-1.5 mt-4"><Plus className="w-3.5 h-3.5" /> Add Experience</button>
      </div>
    </motion.div>
  );
}

// ─── CANDIDATE RESUME ───
export function CandidateResume() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
      <h1 className="text-xl font-display font-bold text-surface-950">Resume</h1>
      <div className="card p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-semibold text-surface-900">Current Resume</h3>
          <div className="flex gap-2">
            <button className="btn-outline btn-sm gap-1.5"><Download className="w-3.5 h-3.5" /> Download</button>
            <button className="btn-primary btn-sm gap-1.5"><Upload className="w-3.5 h-3.5" /> Upload New</button>
          </div>
        </div>
        <div className="border-2 border-dashed border-surface-200 rounded-xl p-12 text-center">
          <FileText className="w-12 h-12 text-surface-300 mx-auto mb-4" />
          <p className="text-sm font-medium text-surface-900">alex_johnson_resume.pdf</p>
          <p className="text-xs text-surface-500 mt-1">Uploaded Oct 5, 2024 • 245 KB</p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <span className="badge-success gap-1"><CheckCircle className="w-3 h-3" /> AI Parsed</span>
            <span className="badge-info gap-1"><Brain className="w-3 h-3" /> Skills Extracted</span>
          </div>
        </div>
      </div>

      <div className="card p-6">
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="w-5 h-5 text-brand-600" />
          <h3 className="font-semibold text-surface-900">AI Resume Analysis</h3>
        </div>
        <div className="space-y-3">
          {[
            { label: 'Overall Score', value: '92/100', color: 'success' },
            { label: 'Skills Match', value: 'Excellent', color: 'success' },
            { label: 'Experience Level', value: 'Senior (6 years)', color: 'info' },
            { label: 'Missing Keywords', value: 'CI/CD, Testing', color: 'warning' },
          ].map(item => (
            <div key={item.label} className="flex items-center justify-between py-2.5 border-b border-surface-50 last:border-0">
              <span className="text-sm text-surface-600">{item.label}</span>
              <span className={cn('badge', `badge-${item.color}`)}>{item.value}</span>
            </div>
          ))}
        </div>
        <div className="mt-4 p-3 bg-brand-50 rounded-xl border border-brand-100">
          <p className="text-xs text-brand-700"><strong>AI Suggestion:</strong> Consider adding CI/CD and testing experience to improve match scores for senior engineering roles.</p>
        </div>
      </div>
    </motion.div>
  );
}

// ─── CANDIDATE APPLICATIONS ───
export function CandidateApplications() {
  const apps = [
    { job: 'Senior Frontend Engineer', company: 'TechCorp Inc.', location: 'San Francisco, CA', status: 'Screening', date: 'Oct 5, 2024', matchScore: 92 },
    { job: 'Full Stack Developer', company: 'StartupXYZ', location: 'Remote', status: 'Interview', date: 'Oct 8, 2024', matchScore: 85 },
    { job: 'React Developer', company: 'DesignStudio', location: 'New York, NY', status: 'Applied', date: 'Oct 12, 2024', matchScore: null },
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
      <h1 className="text-xl font-display font-bold text-surface-950">My Applications</h1>
      <div className="space-y-4">
        {apps.map((app, i) => (
          <div key={i} className="card p-5">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-base font-semibold text-surface-900">{app.job}</h3>
                <div className="flex items-center gap-3 mt-1 text-sm text-surface-500">
                  <span className="flex items-center gap-1.5"><Building2 className="w-3.5 h-3.5" />{app.company}</span>
                  <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5" />{app.location}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {app.matchScore && <span className="badge-success">{app.matchScore}% match</span>}
                <span className={cn('badge', app.status === 'Applied' ? 'badge-neutral' : app.status === 'Screening' ? 'badge-info' : 'badge-warning')}>{app.status}</span>
              </div>
            </div>
            <div className="flex items-center justify-between mt-4 pt-3 border-t border-surface-100">
              <span className="text-xs text-surface-400">Applied {app.date}</span>
              <button className="btn-ghost btn-sm">View Details →</button>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

// ─── CANDIDATE ASSESSMENTS ───
export function CandidateAssessments() {
  const assessments = [
    { title: 'Frontend Technical Assessment', company: 'TechCorp Inc.', questions: 8, duration: '90 min', status: 'Pending', deadline: 'Oct 20, 2024' },
    { title: 'Full Stack Code Challenge', company: 'StartupXYZ', questions: 5, duration: '120 min', status: 'Completed', score: 85, deadline: null },
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
      <h1 className="text-xl font-display font-bold text-surface-950">Assessments</h1>
      <div className="space-y-4">
        {assessments.map((a, i) => (
          <div key={i} className={cn('card p-5', a.status === 'Completed' && 'border-l-4 border-l-success-500')}>
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-base font-semibold text-surface-900">{a.title}</h3>
                <p className="text-sm text-surface-500">{a.company}</p>
              </div>
              <span className={cn('badge', a.status === 'Pending' ? 'badge-warning' : 'badge-success')}>{a.status}</span>
            </div>
            <div className="flex items-center gap-4 text-sm text-surface-500">
              <span>{a.questions} questions</span>
              <span>{a.duration}</span>
              {a.deadline && <span className="text-warning-600 font-medium">Due: {a.deadline}</span>}
              {a.score && <span className="font-medium text-success-600">Score: {a.score}%</span>}
            </div>
            {a.status === 'Pending' && (
              <button className="btn-primary btn-sm mt-4 gap-1.5"><ArrowRight className="w-3.5 h-3.5" /> Start Assessment</button>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
}

// ─── CANDIDATE INTERVIEWS ───
export function CandidateInterviews() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
      <h1 className="text-xl font-display font-bold text-surface-950">Interviews</h1>
      <div className="space-y-4">
        {[
          { title: 'Technical Interview', company: 'StartupXYZ', date: 'Oct 15, 2024', time: '10:00 AM', duration: '60 min', type: 'Video Call', platform: 'Google Meet', status: 'Upcoming', interviewer: 'John Smith' },
          { title: 'Culture Fit Interview', company: 'TechCorp Inc.', date: 'Oct 18, 2024', time: '2:00 PM', duration: '45 min', type: 'Video Call', platform: 'Zoom', status: 'Upcoming', interviewer: 'Emily Davis' },
        ].map((int, i) => (
          <div key={i} className="card p-5">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-base font-semibold text-surface-900">{int.title}</h3>
                <p className="text-sm text-surface-500">{int.company}</p>
              </div>
              <span className="badge-info">{int.status}</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm text-surface-600">
              <div className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-surface-400" />{int.date}</div>
              <div className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-surface-400" />{int.time} ({int.duration})</div>
              <div className="flex items-center gap-1.5"><Globe className="w-3.5 h-3.5 text-surface-400" />{int.platform}</div>
              <div className="flex items-center gap-1.5"><User className="w-3.5 h-3.5 text-surface-400" />{int.interviewer}</div>
            </div>
            <div className="flex gap-2 mt-4">
              <button className="btn-primary btn-sm gap-1.5"><ExternalLink className="w-3.5 h-3.5" /> Join Call</button>
              <button className="btn-outline btn-sm gap-1.5"><Sparkles className="w-3.5 h-3.5" /> AI Interview Prep</button>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

// ─── CANDIDATE MESSAGES ───
export function CandidateMessages() {
  const messages = [
    { from: 'Sarah Chen', company: 'TechCorp Inc.', subject: 'Next Steps - Sr. Frontend Engineer', preview: 'Hi Alex, thanks for your application. We\'d like to invite you to...', time: '2 hours ago', unread: true },
    { from: 'Recruiting Team', company: 'StartupXYZ', subject: 'Interview Confirmation', preview: 'Your technical interview has been scheduled for Oct 15...', time: '1 day ago', unread: false },
    { from: 'System', company: 'Static Global', subject: 'AI Screening Complete', preview: 'Your resume has been screened for the Sr. Frontend Engineer role...', time: '3 days ago', unread: false },
  ];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
      <h1 className="text-xl font-display font-bold text-surface-950">Messages</h1>
      <div className="card divide-y divide-surface-100">
        {messages.map((m, i) => (
          <div key={i} className={cn('p-4 hover:bg-surface-50 cursor-pointer transition-colors', m.unread && 'bg-brand-50/20')}>
            <div className="flex items-start gap-3">
              <div className={cn('w-2 h-2 rounded-full mt-2 shrink-0', m.unread ? 'bg-brand-500' : 'bg-surface-300')} />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-sm font-semibold text-surface-900">{m.from} <span className="text-surface-400 font-normal">• {m.company}</span></p>
                  <span className="text-xs text-surface-400">{m.time}</span>
                </div>
                <p className="text-sm font-medium text-surface-700">{m.subject}</p>
                <p className="text-sm text-surface-500 mt-0.5 truncate">{m.preview}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

// ─── CANDIDATE PRIVACY ───
export function CandidatePrivacy() {
  const Toggle = ({ label, desc, on }) => {
    const [checked, setChecked] = useState(on);
    return (
      <div className="flex items-center justify-between py-3 border-b border-surface-50 last:border-0">
        <div><p className="text-sm font-medium text-surface-700">{label}</p><p className="text-xs text-surface-400 mt-0.5">{desc}</p></div>
        <button onClick={() => setChecked(!checked)} className={cn('w-10 h-6 rounded-full transition-colors flex items-center', checked ? 'bg-brand-500 justify-end' : 'bg-surface-300 justify-start')}>
          <div className="w-4 h-4 bg-white rounded-full shadow-sm mx-1" />
        </button>
      </div>
    );
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
      <h1 className="text-xl font-display font-bold text-surface-950">Privacy</h1>
      <div className="card p-6">
        <h3 className="font-semibold text-surface-900 mb-4">Data Visibility</h3>
        <Toggle label="Profile visible to recruiters" desc="Allow recruiters to find your profile" on={true} />
        <Toggle label="Show current company" desc="Display your current employer" on={true} />
        <Toggle label="Share assessment results" desc="Let companies see your assessment scores" on={false} />
      </div>
      <div className="card p-6">
        <h3 className="font-semibold text-surface-900 mb-4">AI Processing</h3>
        <Toggle label="Allow AI resume screening" desc="Let companies screen your resume with Claude AI" on={true} />
        <Toggle label="AI interview analysis" desc="Allow AI-powered interview analysis" on={false} />
      </div>
      <div className="card p-6">
        <h3 className="font-semibold text-surface-900 mb-4">Data Management</h3>
        <div className="space-y-3">
          <button className="btn-outline w-full justify-center gap-1.5"><Download className="w-4 h-4" /> Download My Data</button>
          <button className="btn-danger w-full justify-center gap-1.5"><Trash2 className="w-4 h-4" /> Delete My Account</button>
        </div>
      </div>
    </motion.div>
  );
}

// ─── CANDIDATE SETTINGS ───
export function CandidateSettings() {
  const Toggle = ({ label, desc, on }) => {
    const [checked, setChecked] = useState(on);
    return (
      <div className="flex items-center justify-between py-3 border-b border-surface-50 last:border-0">
        <div><p className="text-sm font-medium text-surface-700">{label}</p><p className="text-xs text-surface-400 mt-0.5">{desc}</p></div>
        <button onClick={() => setChecked(!checked)} className={cn('w-10 h-6 rounded-full transition-colors flex items-center', checked ? 'bg-brand-500 justify-end' : 'bg-surface-300 justify-start')}>
          <div className="w-4 h-4 bg-white rounded-full shadow-sm mx-1" />
        </button>
      </div>
    );
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
      <h1 className="text-xl font-display font-bold text-surface-950">Settings</h1>
      <div className="card p-6">
        <h3 className="font-semibold text-surface-900 mb-4">Notifications</h3>
        <Toggle label="Email notifications" desc="Application updates via email" on={true} />
        <Toggle label="SMS notifications" desc="Interview reminders via SMS" on={false} />
        <Toggle label="Push notifications" desc="Browser push notifications" on={true} />
      </div>
      <div className="card p-6">
        <h3 className="font-semibold text-surface-900 mb-4">Preferences</h3>
        <div className="space-y-4">
          <div>
            <label className="label">Preferred Job Type</label>
            <select className="select-input"><option>Full-time</option><option>Part-time</option><option>Contract</option><option>Remote</option></select>
          </div>
          <div>
            <label className="label">Expected Salary Range</label>
            <input type="text" className="input" defaultValue="$180K - $220K" />
          </div>
          <div>
            <label className="label">Preferred Location</label>
            <input type="text" className="input" defaultValue="San Francisco, CA • Remote" />
          </div>
        </div>
        <div className="flex justify-end mt-6"><button className="btn-primary gap-1.5"><Save className="w-4 h-4" /> Save</button></div>
      </div>
    </motion.div>
  );
}
