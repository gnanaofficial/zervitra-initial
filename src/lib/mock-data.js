// Static mock data for the entire platform
export const mockUser = {
  id: 'usr_1',
  name: 'Sarah Chen',
  email: 'sarah@staticglobal.com',
  role: 'admin',
  avatar: null,
  organization: 'TechCorp Inc.',
  orgId: 'org_1',
};

export const mockOrganization = {
  id: 'org_1',
  name: 'TechCorp Inc.',
  slug: 'techcorp',
  plan: 'Enterprise',
  seats: 25,
  usedSeats: 12,
  logo: null,
  domain: 'techcorp.com',
  createdAt: '2024-01-15',
};

export const mockJobs = [
  { id: 'job_1', title: 'Senior Frontend Engineer', department: 'Engineering', location: 'San Francisco, CA', type: 'Full-time', status: 'Active', applicants: 47, newApplicants: 12, salary: '$180K - $220K', posted: '2024-10-01', deadline: '2024-11-15', slug: 'senior-frontend-engineer', description: 'We are looking for a Senior Frontend Engineer to lead our web application development...', requirements: ['5+ years React experience', 'TypeScript proficiency', 'State management expertise', 'CI/CD knowledge'], benefits: ['Health insurance', 'Remote-first', '401k matching', 'Unlimited PTO'] },
  { id: 'job_2', title: 'Product Designer', department: 'Design', location: 'Remote', type: 'Full-time', status: 'Active', applicants: 32, newApplicants: 8, salary: '$140K - $180K', posted: '2024-10-05', deadline: '2024-11-20', slug: 'product-designer', description: 'Join our design team to create world-class user experiences...', requirements: ['3+ years product design', 'Figma expertise', 'Design systems experience', 'User research skills'], benefits: ['Health insurance', 'Remote-first', '401k matching', 'Unlimited PTO'] },
  { id: 'job_3', title: 'Data Scientist', department: 'Data', location: 'New York, NY', type: 'Full-time', status: 'Active', applicants: 28, newApplicants: 5, salary: '$160K - $200K', posted: '2024-10-08', deadline: '2024-11-25', slug: 'data-scientist', description: 'We need a Data Scientist to build ML models for our analytics platform...', requirements: ['Python/R proficiency', 'ML/Deep Learning', 'SQL expertise', 'Statistics background'], benefits: ['Health insurance', 'Remote-first', '401k matching', 'Unlimited PTO'] },
  { id: 'job_4', title: 'DevOps Engineer', department: 'Engineering', location: 'Austin, TX', type: 'Full-time', status: 'Draft', applicants: 0, newApplicants: 0, salary: '$150K - $190K', posted: null, deadline: null, slug: 'devops-engineer', description: 'Build and maintain our cloud infrastructure...', requirements: ['AWS/GCP experience', 'Kubernetes', 'Terraform', 'CI/CD pipelines'], benefits: ['Health insurance', 'Hybrid work', '401k matching'] },
  { id: 'job_5', title: 'Marketing Manager', department: 'Marketing', location: 'Remote', type: 'Full-time', status: 'Closed', applicants: 56, newApplicants: 0, salary: '$120K - $150K', posted: '2024-08-15', deadline: '2024-09-30', slug: 'marketing-manager', description: 'Lead our marketing strategy and campaigns...', requirements: ['5+ years marketing', 'B2B SaaS experience', 'Analytics skills', 'Team leadership'], benefits: ['Health insurance', 'Remote-first', '401k matching'] },
  { id: 'job_6', title: 'Backend Engineer', department: 'Engineering', location: 'San Francisco, CA', type: 'Full-time', status: 'Active', applicants: 38, newApplicants: 15, salary: '$170K - $210K', posted: '2024-10-10', deadline: '2024-12-01', slug: 'backend-engineer', description: 'Design and build scalable backend systems...', requirements: ['Node.js/Python', 'PostgreSQL', 'API design', 'Microservices'], benefits: ['Health insurance', 'Hybrid work', '401k matching', 'Unlimited PTO'] },
];

export const mockCandidates = [
  { id: 'cand_1', name: 'Alex Johnson', email: 'alex@email.com', phone: '+1 555-0101', location: 'San Francisco, CA', currentRole: 'Frontend Developer', company: 'StartupXYZ', experience: '6 years', appliedFor: 'Senior Frontend Engineer', status: 'Screening', matchScore: 92, resumeUrl: '#', appliedDate: '2024-10-05', skills: ['React', 'TypeScript', 'Next.js', 'GraphQL', 'Tailwind CSS'], education: 'BS Computer Science - Stanford University', summary: 'Experienced frontend developer with 6 years building React applications at scale.' },
  { id: 'cand_2', name: 'Maria Garcia', email: 'maria@email.com', phone: '+1 555-0102', location: 'New York, NY', currentRole: 'Senior Designer', company: 'DesignCo', experience: '8 years', appliedFor: 'Product Designer', status: 'Interview', matchScore: 88, resumeUrl: '#', appliedDate: '2024-10-06', skills: ['Figma', 'Design Systems', 'User Research', 'Prototyping', 'Accessibility'], education: 'MFA Design - Parsons School of Design', summary: 'Product designer passionate about creating inclusive and delightful user experiences.' },
  { id: 'cand_3', name: 'James Wilson', email: 'james@email.com', phone: '+1 555-0103', location: 'Austin, TX', currentRole: 'ML Engineer', company: 'DataInc', experience: '5 years', appliedFor: 'Data Scientist', status: 'Assessment', matchScore: 85, resumeUrl: '#', appliedDate: '2024-10-08', skills: ['Python', 'TensorFlow', 'PyTorch', 'SQL', 'Statistics'], education: 'MS Data Science - MIT', summary: 'Machine learning engineer with experience in NLP and computer vision.' },
  { id: 'cand_4', name: 'Emma Thompson', email: 'emma@email.com', phone: '+1 555-0104', location: 'Remote', currentRole: 'Full Stack Developer', company: 'WebAgency', experience: '4 years', appliedFor: 'Senior Frontend Engineer', status: 'New', matchScore: 78, resumeUrl: '#', appliedDate: '2024-10-10', skills: ['React', 'Vue.js', 'Node.js', 'PostgreSQL', 'Docker'], education: 'BS Software Engineering - UC Berkeley', summary: 'Full stack developer transitioning to frontend specialization.' },
  { id: 'cand_5', name: 'David Kim', email: 'david@email.com', phone: '+1 555-0105', location: 'Seattle, WA', currentRole: 'Senior Frontend Engineer', company: 'BigTech', experience: '7 years', appliedFor: 'Senior Frontend Engineer', status: 'Offer', matchScore: 95, resumeUrl: '#', appliedDate: '2024-10-02', skills: ['React', 'TypeScript', 'Web Performance', 'Testing', 'Mentoring'], education: 'BS Computer Science - University of Washington', summary: 'Senior frontend engineer with expertise in performance optimization and team leadership.' },
  { id: 'cand_6', name: 'Lisa Park', email: 'lisa@email.com', phone: '+1 555-0106', location: 'Chicago, IL', currentRole: 'UX Designer', company: 'FinTechCorp', experience: '5 years', appliedFor: 'Product Designer', status: 'Rejected', matchScore: 62, resumeUrl: '#', appliedDate: '2024-10-04', skills: ['Sketch', 'Adobe XD', 'User Testing', 'Wireframing'], education: 'BA Design - RISD', summary: 'UX designer focused on financial products and mobile apps.' },
  { id: 'cand_7', name: 'Ryan Chen', email: 'ryan@email.com', phone: '+1 555-0107', location: 'San Francisco, CA', currentRole: 'Software Engineer', company: 'CloudCo', experience: '3 years', appliedFor: 'Backend Engineer', status: 'Screening', matchScore: 81, resumeUrl: '#', appliedDate: '2024-10-11', skills: ['Python', 'Django', 'PostgreSQL', 'Redis', 'Docker'], education: 'BS Computer Science - UCLA', summary: 'Backend engineer with cloud-native development experience.' },
  { id: 'cand_8', name: 'Sophie Martin', email: 'sophie@email.com', phone: '+1 555-0108', location: 'Denver, CO', currentRole: 'Data Analyst', company: 'AnalyticsPro', experience: '4 years', appliedFor: 'Data Scientist', status: 'New', matchScore: 73, resumeUrl: '#', appliedDate: '2024-10-12', skills: ['Python', 'R', 'SQL', 'Tableau', 'Excel'], education: 'MS Statistics - Columbia University', summary: 'Data analyst looking to transition into a data scientist role.' },
];

export const mockScreenings = [
  { id: 'scr_1', candidateId: 'cand_1', candidateName: 'Alex Johnson', jobTitle: 'Senior Frontend Engineer', status: 'Completed', matchScore: 92, model: 'claude-sonnet-4-20250514', promptVersion: 'v2.1', tokensUsed: 4250, cost: 0.12, createdAt: '2024-10-05T10:30:00Z', completedAt: '2024-10-05T10:30:45Z', criteria: [
    { name: 'React Experience (5+ years)', status: 'Supported', evidence: 'Resume indicates 6 years of React development across three companies.', confidence: 'High' },
    { name: 'TypeScript Proficiency', status: 'Supported', evidence: 'TypeScript listed as primary language. Projects on GitHub show TS usage.', confidence: 'High' },
    { name: 'State Management', status: 'Supported', evidence: 'Experience with Redux, Zustand, and React Query mentioned in work history.', confidence: 'High' },
    { name: 'CI/CD Knowledge', status: 'Partially Supported', evidence: 'Mentions GitHub Actions in one project. No dedicated DevOps experience listed.', confidence: 'Medium' },
  ]},
  { id: 'scr_2', candidateId: 'cand_2', candidateName: 'Maria Garcia', jobTitle: 'Product Designer', status: 'Completed', matchScore: 88, model: 'claude-sonnet-4-20250514', promptVersion: 'v2.1', tokensUsed: 3800, cost: 0.10, createdAt: '2024-10-06T14:15:00Z', completedAt: '2024-10-06T14:15:38Z', criteria: [
    { name: 'Product Design (3+ years)', status: 'Supported', evidence: '8 years of design experience, 5 in product design roles.', confidence: 'High' },
    { name: 'Figma Expertise', status: 'Supported', evidence: 'Figma listed as primary tool. Design system work in Figma documented.', confidence: 'High' },
    { name: 'Design Systems', status: 'Supported', evidence: 'Built design system at DesignCo used by 15+ product teams.', confidence: 'High' },
    { name: 'User Research', status: 'Partially Supported', evidence: 'Mentions conducting user interviews. No formal UX research methodology described.', confidence: 'Medium' },
  ]},
  { id: 'scr_3', candidateId: 'cand_4', candidateName: 'Emma Thompson', jobTitle: 'Senior Frontend Engineer', status: 'In Progress', matchScore: null, model: 'claude-sonnet-4-20250514', promptVersion: 'v2.1', tokensUsed: 0, cost: 0, createdAt: '2024-10-10T09:00:00Z', completedAt: null, criteria: [] },
  { id: 'scr_4', candidateId: 'cand_7', candidateName: 'Ryan Chen', jobTitle: 'Backend Engineer', status: 'Queued', matchScore: null, model: 'claude-sonnet-4-20250514', promptVersion: 'v2.1', tokensUsed: 0, cost: 0, createdAt: '2024-10-11T16:00:00Z', completedAt: null, criteria: [] },
];

export const mockAssessments = [
  { id: 'asmt_1', title: 'Frontend Technical Assessment', jobId: 'job_1', type: 'Technical', questions: 8, duration: '90 min', status: 'Active', completions: 12, avgScore: 76 },
  { id: 'asmt_2', title: 'Design Portfolio Review', jobId: 'job_2', type: 'Portfolio', questions: 5, duration: '60 min', status: 'Active', completions: 8, avgScore: 82 },
  { id: 'asmt_3', title: 'Data Science Challenge', jobId: 'job_3', type: 'Technical', questions: 6, duration: '120 min', status: 'Draft', completions: 0, avgScore: null },
];

export const mockInterviews = [
  { id: 'int_1', candidateName: 'Maria Garcia', jobTitle: 'Product Designer', interviewer: 'John Smith', type: 'Technical', date: '2024-10-15', time: '10:00 AM', duration: '60 min', status: 'Scheduled', location: 'Google Meet' },
  { id: 'int_2', candidateName: 'David Kim', jobTitle: 'Senior Frontend Engineer', interviewer: 'Sarah Chen', type: 'Final Round', date: '2024-10-16', time: '2:00 PM', duration: '45 min', status: 'Scheduled', location: 'Zoom' },
  { id: 'int_3', candidateName: 'Alex Johnson', jobTitle: 'Senior Frontend Engineer', interviewer: 'Mike Brown', type: 'Technical', date: '2024-10-12', time: '11:00 AM', duration: '60 min', status: 'Completed', location: 'Google Meet', feedback: 'Strong technical skills, good communication.' },
  { id: 'int_4', candidateName: 'James Wilson', jobTitle: 'Data Scientist', interviewer: 'Emily Davis', type: 'Phone Screen', date: '2024-10-14', time: '3:00 PM', duration: '30 min', status: 'Scheduled', location: 'Phone' },
];

export const mockNotifications = [
  { id: 'notif_1', title: 'New Application', message: 'Sophie Martin applied for Data Scientist', type: 'application', read: false, time: '2 hours ago' },
  { id: 'notif_2', title: 'Screening Complete', message: 'AI screening completed for Alex Johnson', type: 'screening', read: false, time: '3 hours ago' },
  { id: 'notif_3', title: 'Interview Scheduled', message: 'Interview with Maria Garcia confirmed for Oct 15', type: 'interview', read: true, time: '5 hours ago' },
  { id: 'notif_4', title: 'Assessment Submitted', message: 'James Wilson completed the Data Science Challenge', type: 'assessment', read: true, time: '1 day ago' },
  { id: 'notif_5', title: 'Offer Accepted', message: 'David Kim accepted the offer for Senior Frontend Engineer', type: 'offer', read: true, time: '2 days ago' },
];

export const mockAIModels = [
  { id: 'claude-sonnet-4-20250514', name: 'Claude Sonnet 4', provider: 'Anthropic', contextWindow: 200000, maxOutput: 8192, inputPrice: 3.00, outputPrice: 15.00, capabilities: ['Text Generation', 'Analysis', 'Structured Output', 'Vision'], recommended: true, status: 'Available' },
  { id: 'claude-opus-4-20250514', name: 'Claude Opus 4', provider: 'Anthropic', contextWindow: 200000, maxOutput: 8192, inputPrice: 15.00, outputPrice: 75.00, capabilities: ['Text Generation', 'Analysis', 'Structured Output', 'Vision', 'Extended Thinking'], recommended: false, status: 'Available' },
  { id: 'claude-haiku-3-5-20241022', name: 'Claude 3.5 Haiku', provider: 'Anthropic', contextWindow: 200000, maxOutput: 8192, inputPrice: 0.80, outputPrice: 4.00, capabilities: ['Text Generation', 'Analysis', 'Structured Output'], recommended: false, status: 'Available' },
];

export const mockAIConfig = {
  provider: 'Anthropic',
  status: 'Connected',
  defaultModel: 'claude-sonnet-4-20250514',
  taskModels: {
    resumeParsing: 'claude-sonnet-4-20250514',
    screening: 'claude-sonnet-4-20250514',
    interviewPrep: 'claude-haiku-3-5-20241022',
    generalAssistant: 'claude-haiku-3-5-20241022',
  },
  maxTokens: 4096,
  temperature: 0.3,
  timeout: 60000,
  maxRetries: 3,
  monthlyBudget: 500,
  currentSpend: 127.45,
  totalRequests: 1847,
  avgLatency: '2.3s',
  errorRate: '0.8%',
};

export const mockAIUsage = {
  totalTokens: 2450000,
  inputTokens: 1850000,
  outputTokens: 600000,
  totalCost: 127.45,
  totalRequests: 1847,
  avgLatency: 2300,
  errorRate: 0.8,
  dailyUsage: [
    { date: 'Oct 7', requests: 180, tokens: 245000, cost: 12.50 },
    { date: 'Oct 8', requests: 210, tokens: 298000, cost: 15.20 },
    { date: 'Oct 9', requests: 195, tokens: 267000, cost: 13.80 },
    { date: 'Oct 10', requests: 240, tokens: 312000, cost: 16.90 },
    { date: 'Oct 11', requests: 225, tokens: 289000, cost: 14.70 },
    { date: 'Oct 12', requests: 265, tokens: 341000, cost: 18.35 },
    { date: 'Oct 13', requests: 180, tokens: 198000, cost: 10.20 },
  ],
  byWorkflow: [
    { workflow: 'Resume Parsing', requests: 520, tokens: 680000, cost: 35.20, percentage: 28 },
    { workflow: 'Screening', requests: 380, tokens: 890000, cost: 52.10, percentage: 41 },
    { workflow: 'Interview Prep', requests: 290, tokens: 320000, cost: 15.60, percentage: 12 },
    { workflow: 'General Assistant', requests: 450, tokens: 380000, cost: 18.40, percentage: 14 },
    { workflow: 'Assessments', requests: 207, tokens: 180000, cost: 6.15, percentage: 5 },
  ],
};

export const mockPipelineStages = [
  { id: 'new', name: 'New', count: 15, color: '#64748b' },
  { id: 'screening', name: 'AI Screening', count: 8, color: '#3b82f6' },
  { id: 'assessment', name: 'Assessment', count: 5, color: '#a855f7' },
  { id: 'interview', name: 'Interview', count: 4, color: '#f59e0b' },
  { id: 'offer', name: 'Offer', count: 2, color: '#22c55e' },
  { id: 'hired', name: 'Hired', count: 1, color: '#059669' },
  { id: 'rejected', name: 'Rejected', count: 12, color: '#ef4444' },
];

export const mockTeamMembers = [
  { id: 'tm_1', name: 'Sarah Chen', email: 'sarah@techcorp.com', role: 'Admin', department: 'HR', status: 'Active', lastActive: '2024-10-13T08:00:00Z', avatar: null },
  { id: 'tm_2', name: 'John Smith', email: 'john@techcorp.com', role: 'Recruiter', department: 'HR', status: 'Active', lastActive: '2024-10-13T07:30:00Z', avatar: null },
  { id: 'tm_3', name: 'Emily Davis', email: 'emily@techcorp.com', role: 'Hiring Manager', department: 'Engineering', status: 'Active', lastActive: '2024-10-12T16:00:00Z', avatar: null },
  { id: 'tm_4', name: 'Mike Brown', email: 'mike@techcorp.com', role: 'Interviewer', department: 'Engineering', status: 'Active', lastActive: '2024-10-13T06:00:00Z', avatar: null },
  { id: 'tm_5', name: 'Anna Lee', email: 'anna@techcorp.com', role: 'Recruiter', department: 'HR', status: 'Invited', lastActive: null, avatar: null },
];

export const mockAuditLogs = [
  { id: 'log_1', action: 'Job Published', user: 'Sarah Chen', target: 'Senior Frontend Engineer', timestamp: '2024-10-13T08:00:00Z', ip: '192.168.1.1' },
  { id: 'log_2', action: 'Screening Initiated', user: 'System', target: 'Alex Johnson - Senior Frontend Engineer', timestamp: '2024-10-13T07:45:00Z', ip: null },
  { id: 'log_3', action: 'Model Changed', user: 'Sarah Chen', target: 'Default model → claude-sonnet-4-20250514', timestamp: '2024-10-12T15:30:00Z', ip: '192.168.1.1' },
  { id: 'log_4', action: 'User Invited', user: 'Sarah Chen', target: 'anna@techcorp.com', timestamp: '2024-10-12T14:00:00Z', ip: '192.168.1.1' },
  { id: 'log_5', action: 'Candidate Stage Changed', user: 'John Smith', target: 'David Kim → Offer', timestamp: '2024-10-11T16:30:00Z', ip: '192.168.1.2' },
];

export const mockBlogPosts = [
  { id: 'blog_1', title: 'How AI is Transforming Recruitment in 2024', slug: 'ai-transforming-recruitment-2024', excerpt: 'Discover how AI-powered screening is helping companies hire better candidates faster while reducing bias.', author: 'Sarah Chen', date: '2024-10-10', readTime: '8 min', category: 'AI & Recruitment', image: null },
  { id: 'blog_2', title: 'Building a Fair AI Screening Process', slug: 'building-fair-ai-screening', excerpt: 'Learn best practices for implementing AI in your hiring process while maintaining fairness and transparency.', author: 'Dr. James Wilson', date: '2024-10-05', readTime: '12 min', category: 'Best Practices', image: null },
  { id: 'blog_3', title: 'The Future of Talent Intelligence', slug: 'future-talent-intelligence', excerpt: 'Exploring how Claude-powered insights are reshaping how organizations understand and develop talent.', author: 'Emily Davis', date: '2024-09-28', readTime: '6 min', category: 'Industry Trends', image: null },
  { id: 'blog_4', title: 'Candidate Experience in the AI Era', slug: 'candidate-experience-ai-era', excerpt: 'How to ensure candidates feel valued and informed when AI is part of your screening process.', author: 'Maria Garcia', date: '2024-09-20', readTime: '10 min', category: 'Candidate Experience', image: null },
];

export const mockPricingPlans = [
  { id: 'starter', name: 'Starter', price: 99, period: '/month', description: 'Perfect for small teams getting started with AI recruitment.', features: ['Up to 5 active jobs', '100 AI screenings/month', '3 team members', 'Basic analytics', 'Email support', 'Resume parsing'], highlighted: false },
  { id: 'professional', name: 'Professional', price: 299, period: '/month', description: 'For growing teams that need advanced AI capabilities.', features: ['Up to 25 active jobs', '500 AI screenings/month', '10 team members', 'Advanced analytics', 'Priority support', 'Custom assessments', 'Interview intelligence', 'API access'], highlighted: true },
  { id: 'enterprise', name: 'Enterprise', price: null, period: '', description: 'Custom solutions for large organizations.', features: ['Unlimited active jobs', 'Unlimited AI screenings', 'Unlimited team members', 'Custom AI models', 'Dedicated support', 'SSO & SAML', 'Custom integrations', 'SLA guarantee', 'On-premise option'], highlighted: false },
];

export const mockAdminOrgs = [
  { id: 'org_1', name: 'TechCorp Inc.', plan: 'Enterprise', users: 12, jobs: 6, screenings: 245, status: 'Active', createdAt: '2024-01-15' },
  { id: 'org_2', name: 'StartupXYZ', plan: 'Professional', users: 5, jobs: 3, screenings: 89, status: 'Active', createdAt: '2024-03-20' },
  { id: 'org_3', name: 'DesignStudio', plan: 'Starter', users: 2, jobs: 1, screenings: 15, status: 'Active', createdAt: '2024-06-10' },
  { id: 'org_4', name: 'DataDriven Co.', plan: 'Professional', users: 8, jobs: 4, screenings: 156, status: 'Suspended', createdAt: '2024-02-28' },
];

export const mockAdminStats = {
  totalOrgs: 42,
  totalUsers: 387,
  totalJobs: 156,
  totalScreenings: 12450,
  totalTokens: 45600000,
  totalCost: 2340.50,
  activeUsers: 312,
  mrr: 18750,
};

export const mockCareers = [
  { id: 'career_1', title: 'AI/ML Engineer', department: 'Engineering', location: 'San Francisco, CA', type: 'Full-time', slug: 'ai-ml-engineer', description: 'Help build the next generation of AI-powered recruitment tools.' },
  { id: 'career_2', title: 'Product Manager', department: 'Product', location: 'Remote', type: 'Full-time', slug: 'product-manager', description: 'Shape the future of our AI recruitment platform.' },
  { id: 'career_3', title: 'Customer Success Manager', department: 'Customer Success', location: 'New York, NY', type: 'Full-time', slug: 'customer-success-manager', description: 'Help our customers succeed with AI-powered recruitment.' },
];

export const mockDashboardStats = {
  activeJobs: 4,
  totalApplications: 163,
  aiScreeningsToday: 12,
  interviewsThisWeek: 8,
  offerAcceptRate: '85%',
  avgTimeToHire: '18 days',
  candidatesInPipeline: 47,
  screeningAccuracy: '94%',
};

export const mockRecentActivity = [
  { id: 'act_1', type: 'application', message: 'Sophie Martin applied for Data Scientist', time: '2 hours ago', icon: 'UserPlus' },
  { id: 'act_2', type: 'screening', message: 'AI screening completed for Alex Johnson (92% match)', time: '3 hours ago', icon: 'Brain' },
  { id: 'act_3', type: 'interview', message: 'Interview scheduled with Maria Garcia for Oct 15', time: '5 hours ago', icon: 'Calendar' },
  { id: 'act_4', type: 'offer', message: 'David Kim accepted offer for Sr. Frontend Engineer', time: '1 day ago', icon: 'CheckCircle' },
  { id: 'act_5', type: 'assessment', message: 'James Wilson completed Data Science Challenge', time: '1 day ago', icon: 'FileText' },
  { id: 'act_6', type: 'job', message: 'Backend Engineer position published', time: '2 days ago', icon: 'Briefcase' },
];
