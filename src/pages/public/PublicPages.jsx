import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PublicLayout } from '../../components/layout/PublicLayout';
import { Brain, Shield, Zap, BarChart3, Users, FileSearch, ClipboardCheck, MessageSquare, Eye, Globe, Lock, Settings, CheckCircle, ArrowRight, Sparkles, Target, Clock, TrendingUp, Layers } from 'lucide-react';

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

export function ProductPage() {
  return (
    <PublicLayout>
      <section className="pt-32 pb-20 bg-gradient-to-b from-brand-50/40 to-white">
        <div className="container-wide text-center">
          <span className="badge-primary mb-4">Product</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-surface-950 mb-6">The AI recruitment platform<br />built for the future</h1>
          <p className="text-lg text-surface-500 max-w-2xl mx-auto mb-10">Static Global combines Claude's intelligence with enterprise recruitment workflows to deliver transparent, evidence-based hiring at scale.</p>
          <div className="flex justify-center gap-4">
            <Link to="/signup" className="btn-primary btn-lg">Start Free Trial</Link>
            <Link to="/demo" className="btn-outline btn-lg">Watch Demo</Link>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <div>
              <span className="badge-purple mb-4">AI Engine</span>
              <h2 className="text-3xl font-display font-bold text-surface-950 mb-4">Claude at the core of every decision</h2>
              <p className="text-surface-500 mb-6">Our AI engine doesn't just scan for keywords. It reads, understands context, evaluates evidence, and explains its reasoning — just like a senior recruiter would.</p>
              <ul className="space-y-3">
                {['Criterion-by-criterion evaluation', 'Evidence citations from resumes', 'Confidence levels and limitations', 'Human-review checkpoints'].map(item => (
                  <li key={item} className="flex items-center gap-3 text-sm text-surface-700"><CheckCircle className="w-4 h-4 text-success-500 shrink-0" />{item}</li>
                ))}
              </ul>
            </div>
            <div className="card p-6 bg-gradient-to-br from-brand-50 to-purple-50">
              <div className="flex items-center gap-2 mb-4"><Brain className="w-5 h-5 text-brand-600" /><span className="text-sm font-semibold text-surface-900">AI Screening Result</span><span className="badge-success ml-auto">92% Match</span></div>
              <div className="space-y-3">
                {[{ criteria: 'React Experience (5+ years)', status: 'Supported', color: 'text-success-600' }, { criteria: 'TypeScript Proficiency', status: 'Supported', color: 'text-success-600' }, { criteria: 'CI/CD Knowledge', status: 'Partial', color: 'text-warning-600' }].map((c, i) => (
                  <div key={i} className="bg-white rounded-lg p-3 border border-surface-200">
                    <div className="flex justify-between items-center mb-1"><span className="text-sm font-medium text-surface-900">{c.criteria}</span><span className={`text-xs font-semibold ${c.color}`}>{c.status}</span></div>
                    <p className="text-xs text-surface-500">Evidence found in work history and project descriptions.</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: FileSearch, title: 'Resume Intelligence', desc: 'Parse any format, extract structured data, identify gaps.' },
              { icon: ClipboardCheck, title: 'Smart Assessments', desc: 'AI-generated tests mapped to your job requirements.' },
              { icon: MessageSquare, title: 'Interview Guides', desc: 'Structured questions with evaluation rubrics.' },
              { icon: Eye, title: 'Full Transparency', desc: 'Every AI decision shows evidence and reasoning.' },
              { icon: Shield, title: 'Enterprise Security', desc: 'SOC 2, GDPR-ready, role-based access control.' },
              { icon: BarChart3, title: 'Rich Analytics', desc: 'Pipeline metrics, AI usage, time-to-hire insights.' },
            ].map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="card-hover p-6">
                  <Icon className="w-10 h-10 text-brand-500 mb-4" />
                  <h3 className="text-lg font-semibold text-surface-900 mb-2">{f.title}</h3>
                  <p className="text-sm text-surface-500">{f.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}

export function FeaturesPage() {
  const features = [
    { icon: Brain, title: 'AI-Powered Screening', desc: 'Claude analyzes every resume against your specific job criteria, providing evidence-based evaluations with source citations.', details: ['Criterion-by-criterion analysis', 'Evidence source references', 'Confidence levels', 'Limitation disclosures', 'Human review workflow'] },
    { icon: FileSearch, title: 'Resume Intelligence', desc: 'Extract structured information from any resume format with AI-powered parsing and verification.', details: ['Multi-format support (PDF, DOCX, etc.)', 'Skills extraction', 'Experience timeline', 'Education verification', 'Gap identification'] },
    { icon: ClipboardCheck, title: 'Assessment Generation', desc: 'Create role-specific assessments with AI-generated questions and evaluation rubrics.', details: ['Technical assessments', 'Behavioral questions', 'Evaluation rubrics', 'Requirement mapping', 'Response analysis'] },
    { icon: MessageSquare, title: 'Interview Intelligence', desc: 'Prepare for interviews with AI-generated guides and organize feedback systematically.', details: ['Question generation', 'Structured guides', 'Follow-up suggestions', 'Feedback organization', 'Criteria coverage tracking'] },
    { icon: Sparkles, title: 'Recruiter Copilot', desc: 'An AI assistant that helps with every aspect of the recruitment workflow.', details: ['Candidate summaries', 'Communication drafts', 'Pipeline insights', 'Activity reports', 'Workflow assistance'] },
    { icon: Eye, title: 'AI Transparency', desc: 'Every AI decision is explainable, reviewable, and auditable.', details: ['Evidence inspection', 'Decision explanations', 'Human overrides', 'Audit trails', 'Bias monitoring'] },
    { icon: BarChart3, title: 'Analytics & Reporting', desc: 'Comprehensive recruitment analytics and AI usage insights.', details: ['Pipeline metrics', 'Time-to-hire tracking', 'Source effectiveness', 'AI cost monitoring', 'Team performance'] },
    { icon: Shield, title: 'Enterprise Security', desc: 'Bank-grade security with compliance controls and data governance.', details: ['Role-based access', 'Tenant isolation', 'Audit logging', 'Data retention', 'GDPR compliance'] },
    { icon: Settings, title: 'Configurable AI', desc: 'Full control over AI models, prompts, and behavior from an admin interface.', details: ['Model selection', 'Task-specific models', 'Usage limits', 'Cost controls', 'Prompt versioning'] },
  ];

  return (
    <PublicLayout>
      <section className="pt-32 pb-16 bg-gradient-to-b from-surface-50 to-white">
        <div className="container-wide text-center">
          <span className="badge-primary mb-4">Features</span>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-surface-950 mb-6">Everything you need to hire smarter</h1>
          <p className="text-lg text-surface-500 max-w-2xl mx-auto">A complete AI-native recruitment platform with Claude at the core of every workflow.</p>
        </div>
      </section>
      <section className="section">
        <div className="container-wide space-y-8">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="card p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="shrink-0">
                    <div className="w-14 h-14 rounded-2xl bg-brand-50 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-brand-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-surface-900 mb-2">{f.title}</h3>
                    <p className="text-surface-500 mb-4">{f.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {f.details.map((d, j) => (
                        <span key={j} className="badge-neutral">{d}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </PublicLayout>
  );
}

export function SolutionsPage() {
  const solutions = [
    { title: 'Enterprise Recruitment', desc: 'Scale your hiring with AI-powered screening across thousands of applications while maintaining quality and compliance.', icon: Building2, benefits: ['Handle 10,000+ applications/month', 'Multi-team collaboration', 'Enterprise SSO', 'Custom AI configuration'] },
    { title: 'Staffing Agencies', desc: 'Screen candidates faster and match them to client requirements with evidence-based AI intelligence.', icon: Users, benefits: ['Client-specific screening criteria', 'Bulk resume processing', 'Candidate pool management', 'White-label options'] },
    { title: 'Tech Hiring', desc: 'Evaluate technical skills with AI-generated assessments and structured interview guides.', icon: Zap, benefits: ['Technical skill assessment', 'Code review integration', 'Structured technical interviews', 'Skill-gap analysis'] },
    { title: 'Executive Search', desc: 'Deep candidate analysis for senior and executive roles with comprehensive AI-powered intelligence.', icon: Target, benefits: ['In-depth experience analysis', 'Leadership competency evaluation', 'Confidential screening', 'Board-level reporting'] },
  ];

  return (
    <PublicLayout>
      <section className="pt-32 pb-16 bg-gradient-to-b from-purple-50/40 to-white">
        <div className="container-wide text-center">
          <span className="badge-purple mb-4">Solutions</span>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-surface-950 mb-6">Built for every hiring need</h1>
          <p className="text-lg text-surface-500 max-w-2xl mx-auto">Whether you're a startup or enterprise, Static Global adapts to your recruitment workflow.</p>
        </div>
      </section>
      <section className="section">
        <div className="container-wide grid md:grid-cols-2 gap-8">
          {solutions.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="card p-8 hover:shadow-lg transition-shadow">
                <Icon className="w-10 h-10 text-brand-500 mb-4" />
                <h3 className="text-xl font-semibold text-surface-900 mb-3">{s.title}</h3>
                <p className="text-surface-500 mb-6">{s.desc}</p>
                <ul className="space-y-2">
                  {s.benefits.map((b, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-surface-600"><CheckCircle className="w-4 h-4 text-success-500 shrink-0" />{b}</li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </section>
    </PublicLayout>
  );
}

export function HowItWorksPage() {
  return (
    <PublicLayout>
      <section className="pt-32 pb-16 bg-gradient-to-b from-brand-50/40 to-white">
        <div className="container-wide text-center">
          <span className="badge-primary mb-4">How It Works</span>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-surface-950 mb-6">From job posting to perfect hire</h1>
          <p className="text-lg text-surface-500 max-w-2xl mx-auto">See how Static Global's AI-powered workflow streamlines every step of your recruitment process.</p>
        </div>
      </section>
      <section className="section">
        <div className="container-tight space-y-16">
          {[
            { step: 1, title: 'Create & Publish Jobs', desc: 'Use Claude to draft compelling, inclusive job descriptions. AI automatically extracts screening criteria and generates application questions.', icon: Layers },
            { step: 2, title: 'Receive Applications', desc: 'Candidates apply through your branded portal. Resumes are parsed and structured data is extracted for AI screening.', icon: Users },
            { step: 3, title: 'AI Screens Every Candidate', desc: 'Claude evaluates each application against your approved criteria, providing evidence-based analysis with source citations.', icon: Brain },
            { step: 4, title: 'Review & Make Decisions', desc: 'Recruiters review AI insights, inspect evidence, and make informed decisions. Human review is always the final step.', icon: Eye },
            { step: 5, title: 'Assess & Interview', desc: 'Use AI-generated assessments and interview guides to evaluate candidates consistently and thoroughly.', icon: ClipboardCheck },
            { step: 6, title: 'Hire with Confidence', desc: 'Make offers backed by evidence. Track your entire pipeline with rich analytics and reporting.', icon: CheckCircle },
          ].map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div key={i} initial={{ opacity: 0, x: i % 2 ? 30 : -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex gap-6 items-start">
                <div className="shrink-0 w-16 h-16 rounded-2xl bg-brand-50 flex items-center justify-center border border-brand-200">
                  <Icon className="w-7 h-7 text-brand-600" />
                </div>
                <div>
                  <span className="text-xs font-bold text-brand-500 uppercase tracking-wider">Step {s.step}</span>
                  <h3 className="text-xl font-semibold text-surface-900 mt-1 mb-2">{s.title}</h3>
                  <p className="text-surface-500 leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
    </PublicLayout>
  );
}

export function PricingPage() {
  const { mockPricingPlans: plans } = require('../../lib/mock-data');
  return (
    <PublicLayout>
      <section className="pt-32 pb-16 bg-gradient-to-b from-surface-50 to-white">
        <div className="container-wide text-center">
          <span className="badge-primary mb-4">Pricing</span>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-surface-950 mb-6">Simple, transparent pricing</h1>
          <p className="text-lg text-surface-500 max-w-2xl mx-auto">Start free, scale as you grow. All plans include core AI features.</p>
        </div>
      </section>
      <section className="pb-24">
        <div className="container-wide">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, i) => (
              <motion.div key={plan.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className={`card p-8 ${plan.highlighted ? 'border-brand-500 ring-2 ring-brand-500/20 relative' : ''}`}>
                {plan.highlighted && <span className="absolute -top-3 left-1/2 -translate-x-1/2 badge-primary">Most Popular</span>}
                <h3 className="text-xl font-semibold text-surface-900 mb-2">{plan.name}</h3>
                <p className="text-sm text-surface-500 mb-6">{plan.description}</p>
                <div className="mb-6">
                  {plan.price ? (
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-display font-bold text-surface-950">${plan.price}</span>
                      <span className="text-surface-400">{plan.period}</span>
                    </div>
                  ) : (
                    <span className="text-4xl font-display font-bold text-surface-950">Custom</span>
                  )}
                </div>
                <Link to="/signup" className={plan.highlighted ? 'btn-primary w-full mb-6' : 'btn-outline w-full mb-6'}>
                  {plan.price ? 'Start Free Trial' : 'Contact Sales'}
                </Link>
                <ul className="space-y-3">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2.5 text-sm text-surface-600">
                      <CheckCircle className="w-4 h-4 text-success-500 shrink-0" />{f}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}

export function DemoPage() {
  return (
    <PublicLayout>
      <section className="pt-32 pb-24">
        <div className="container-tight text-center">
          <span className="badge-purple mb-4">Demo</span>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-surface-950 mb-6">See Static Global in action</h1>
          <p className="text-lg text-surface-500 max-w-2xl mx-auto mb-10">Schedule a personalized demo or explore the platform on your own.</p>
          <div className="card p-8 max-w-xl mx-auto text-left">
            <h3 className="text-lg font-semibold mb-6">Request a Demo</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div><label className="label">First Name</label><input className="input" placeholder="John" /></div>
                <div><label className="label">Last Name</label><input className="input" placeholder="Smith" /></div>
              </div>
              <div><label className="label">Work Email</label><input className="input" type="email" placeholder="john@company.com" /></div>
              <div><label className="label">Company</label><input className="input" placeholder="Your company" /></div>
              <div><label className="label">Team Size</label>
                <select className="input"><option>1-10</option><option>11-50</option><option>51-200</option><option>200+</option></select>
              </div>
              <div><label className="label">What interests you most?</label><textarea className="textarea" rows="3" placeholder="Tell us about your recruitment challenges..." /></div>
              <button type="button" className="btn-primary w-full">Schedule Demo</button>
            </form>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}

export function ContactPage() {
  return (
    <PublicLayout>
      <section className="pt-32 pb-24">
        <div className="container-wide">
          <div className="text-center mb-16">
            <span className="badge-primary mb-4">Contact</span>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-surface-950 mb-6">Get in touch</h1>
            <p className="text-lg text-surface-500">We'd love to hear from you. Our team is always ready to help.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="card p-8">
              <h3 className="text-lg font-semibold mb-6">Send us a message</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div><label className="label">First Name</label><input className="input" placeholder="John" /></div>
                  <div><label className="label">Last Name</label><input className="input" placeholder="Smith" /></div>
                </div>
                <div><label className="label">Email</label><input className="input" type="email" placeholder="john@company.com" /></div>
                <div><label className="label">Subject</label><input className="input" placeholder="How can we help?" /></div>
                <div><label className="label">Message</label><textarea className="textarea" rows="5" placeholder="Your message..." /></div>
                <button type="button" className="btn-primary w-full">Send Message</button>
              </form>
            </div>
            <div className="space-y-8">
              {[
                { title: 'Sales', desc: 'Talk to our sales team about enterprise solutions.', email: 'sales@staticglobal.com' },
                { title: 'Support', desc: 'Get help with your account or technical issues.', email: 'support@staticglobal.com' },
                { title: 'Partnerships', desc: 'Explore partnership opportunities.', email: 'partners@staticglobal.com' },
              ].map((c, i) => (
                <div key={i} className="card p-6">
                  <h4 className="font-semibold text-surface-900 mb-1">{c.title}</h4>
                  <p className="text-sm text-surface-500 mb-2">{c.desc}</p>
                  <a href={`mailto:${c.email}`} className="text-sm text-brand-600 hover:underline">{c.email}</a>
                </div>
              ))}
              <div className="card p-6">
                <h4 className="font-semibold text-surface-900 mb-2">Office</h4>
                <p className="text-sm text-surface-500">123 Innovation Drive<br />San Francisco, CA 94107<br />United States</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}

export function AboutPage() {
  return (
    <PublicLayout>
      <section className="pt-32 pb-16 bg-gradient-to-b from-brand-50/30 to-white">
        <div className="container-wide text-center">
          <span className="badge-primary mb-4">About Us</span>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-surface-950 mb-6">Making recruitment intelligent, transparent, and fair</h1>
          <p className="text-lg text-surface-500 max-w-2xl mx-auto">We believe AI should amplify human judgment, not replace it. Static Global builds tools that help recruiters make better decisions with full transparency.</p>
        </div>
      </section>
      <section className="section">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-3xl font-display font-bold text-surface-950 mb-4">Our Mission</h2>
              <p className="text-surface-500 leading-relaxed mb-4">We're building the future of recruitment where AI provides evidence-based insights and humans make the final call. Every feature we build is grounded in transparency, fairness, and accountability.</p>
              <p className="text-surface-500 leading-relaxed">Founded in 2024, Static Global is backed by a team of AI researchers, recruitment industry veterans, and enterprise software engineers committed to responsible AI adoption in hiring.</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[{ value: '2,400+', label: 'Companies' }, { value: '1.2M', label: 'Candidates Screened' }, { value: '42', label: 'Countries' }, { value: '98%', label: 'Customer Satisfaction' }].map((s, i) => (
                <div key={i} className="card p-6 text-center"><p className="text-2xl font-display font-bold text-brand-600">{s.value}</p><p className="text-sm text-surface-500 mt-1">{s.label}</p></div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-display font-bold text-surface-950 mb-8 text-center">Our Values</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { icon: Eye, title: 'Transparency', desc: 'Every AI decision is explainable and auditable.' },
                { icon: Shield, title: 'Responsibility', desc: 'Human oversight for all consequential decisions.' },
                { icon: Users, title: 'Fairness', desc: 'No bias amplification, no proxy discrimination.' },
                { icon: Sparkles, title: 'Innovation', desc: 'Pushing the boundaries of what AI can do for recruitment.' },
              ].map((v, i) => {
                const Icon = v.icon;
                return <div key={i} className="card p-6 text-center"><Icon className="w-8 h-8 text-brand-500 mx-auto mb-3" /><h3 className="font-semibold text-surface-900 mb-2">{v.title}</h3><p className="text-sm text-surface-500">{v.desc}</p></div>;
              })}
            </div>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}

export function CareersPage() {
  const positions = [
    { title: 'AI/ML Engineer', dept: 'Engineering', loc: 'San Francisco', type: 'Full-time', slug: 'ai-ml-engineer' },
    { title: 'Product Manager', dept: 'Product', loc: 'Remote', type: 'Full-time', slug: 'product-manager' },
    { title: 'Customer Success Manager', dept: 'Customer Success', loc: 'New York', type: 'Full-time', slug: 'customer-success-manager' },
    { title: 'Senior Backend Engineer', dept: 'Engineering', loc: 'Remote', type: 'Full-time', slug: 'senior-backend-engineer' },
    { title: 'Design Lead', dept: 'Design', loc: 'San Francisco', type: 'Full-time', slug: 'design-lead' },
  ];
  return (
    <PublicLayout>
      <section className="pt-32 pb-16 bg-gradient-to-b from-purple-50/40 to-white">
        <div className="container-wide text-center">
          <span className="badge-purple mb-4">Careers</span>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-surface-950 mb-6">Join us in shaping the future of hiring</h1>
          <p className="text-lg text-surface-500 max-w-2xl mx-auto">We're building something special. Come work at the intersection of AI and recruitment.</p>
        </div>
      </section>
      <section className="section">
        <div className="container-tight">
          <h2 className="text-2xl font-display font-bold mb-8">Open Positions</h2>
          <div className="space-y-4">
            {positions.map((p, i) => (
              <Link key={i} to={`/careers/${p.slug}`} className="card-interactive p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-surface-900">{p.title}</h3>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-sm text-surface-500">{p.dept}</span>
                    <span className="text-surface-300">·</span>
                    <span className="text-sm text-surface-500">{p.loc}</span>
                    <span className="text-surface-300">·</span>
                    <span className="text-sm text-surface-500">{p.type}</span>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-surface-400" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}

export function CareerDetailPage() {
  return (
    <PublicLayout>
      <section className="pt-32 pb-24">
        <div className="container-tight">
          <Link to="/careers" className="text-sm text-brand-600 hover:underline mb-6 inline-block">← Back to Careers</Link>
          <span className="badge-purple mb-4">Engineering · San Francisco · Full-time</span>
          <h1 className="text-3xl md:text-4xl font-display font-bold text-surface-950 mb-6">AI/ML Engineer</h1>
          <div className="prose max-w-none">
            <div className="card p-8 space-y-6">
              <div><h3 className="text-lg font-semibold text-surface-900 mb-3">About the Role</h3><p className="text-surface-600 leading-relaxed">We're looking for an AI/ML Engineer to help build the next generation of AI-powered recruitment tools. You'll work directly with our AI engine, optimizing Claude integrations, building new intelligence workflows, and ensuring our AI outputs are accurate and fair.</p></div>
              <div><h3 className="text-lg font-semibold text-surface-900 mb-3">Requirements</h3>
                <ul className="space-y-2">{['3+ years of experience with LLMs and NLP', 'Strong Python and TypeScript skills', 'Experience with prompt engineering and structured outputs', 'Understanding of responsible AI principles', 'Experience with evaluation and testing of AI systems'].map((r, i) => <li key={i} className="flex items-center gap-2 text-sm text-surface-600"><CheckCircle className="w-4 h-4 text-success-500 shrink-0" />{r}</li>)}</ul>
              </div>
              <div><h3 className="text-lg font-semibold text-surface-900 mb-3">Benefits</h3>
                <ul className="space-y-2">{['Competitive salary & equity', 'Health, dental, and vision insurance', 'Unlimited PTO', 'Remote-friendly', 'Learning & development budget'].map((b, i) => <li key={i} className="flex items-center gap-2 text-sm text-surface-600"><CheckCircle className="w-4 h-4 text-brand-500 shrink-0" />{b}</li>)}</ul>
              </div>
              <div className="pt-4 border-t border-surface-200">
                <Link to="/contact" className="btn-primary btn-lg">Apply Now <ArrowRight className="w-4 h-4" /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}

export function BlogPage() {
  const posts = [
    { title: 'How AI is Transforming Recruitment in 2024', excerpt: 'Discover how AI-powered screening is helping companies hire better candidates faster.', date: 'Oct 10, 2024', category: 'AI & Recruitment', slug: 'ai-transforming-recruitment-2024', readTime: '8 min' },
    { title: 'Building a Fair AI Screening Process', excerpt: 'Learn best practices for implementing AI in your hiring process while maintaining fairness.', date: 'Oct 5, 2024', category: 'Best Practices', slug: 'building-fair-ai-screening', readTime: '12 min' },
    { title: 'The Future of Talent Intelligence', excerpt: 'Exploring how Claude-powered insights are reshaping talent management.', date: 'Sep 28, 2024', category: 'Industry Trends', slug: 'future-talent-intelligence', readTime: '6 min' },
    { title: 'Candidate Experience in the AI Era', excerpt: 'How to ensure candidates feel valued when AI is part of your screening process.', date: 'Sep 20, 2024', category: 'Candidate Experience', slug: 'candidate-experience-ai-era', readTime: '10 min' },
  ];
  return (
    <PublicLayout>
      <section className="pt-32 pb-16 bg-gradient-to-b from-surface-50 to-white"><div className="container-wide text-center"><span className="badge-primary mb-4">Blog</span><h1 className="text-4xl md:text-5xl font-display font-bold text-surface-950 mb-6">Insights & Resources</h1><p className="text-lg text-surface-500">Thoughts on AI recruitment, best practices, and industry trends.</p></div></section>
      <section className="pb-24"><div className="container-wide"><div className="grid md:grid-cols-2 gap-8">{posts.map((p, i) => (
        <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <Link to={`/blog/${p.slug}`} className="card-interactive p-6 block h-full">
            <div className="h-40 rounded-xl bg-gradient-to-br from-brand-100 to-purple-100 mb-4 flex items-center justify-center"><FileSearch className="w-10 h-10 text-brand-400" /></div>
            <span className="badge-neutral mb-3">{p.category}</span>
            <h3 className="text-lg font-semibold text-surface-900 mb-2">{p.title}</h3>
            <p className="text-sm text-surface-500 mb-4">{p.excerpt}</p>
            <div className="flex items-center gap-3 text-xs text-surface-400"><span>{p.date}</span><span>·</span><span>{p.readTime} read</span></div>
          </Link>
        </motion.div>
      ))}</div></div></section>
    </PublicLayout>
  );
}

export function BlogDetailPage() {
  return (
    <PublicLayout>
      <article className="pt-32 pb-24">
        <div className="container-tight">
          <Link to="/blog" className="text-sm text-brand-600 hover:underline mb-6 inline-block">← Back to Blog</Link>
          <span className="badge-primary mb-4">AI & Recruitment</span>
          <h1 className="text-3xl md:text-4xl font-display font-bold text-surface-950 mb-4">How AI is Transforming Recruitment in 2024</h1>
          <div className="flex items-center gap-4 text-sm text-surface-500 mb-8"><span>Oct 10, 2024</span><span>·</span><span>8 min read</span><span>·</span><span>By Sarah Chen</span></div>
          <div className="card p-8">
            <div className="prose max-w-none space-y-6 text-surface-600 leading-relaxed">
              <p>The recruitment industry is undergoing a fundamental transformation. AI-powered tools are no longer experimental — they're becoming essential for teams that want to hire better, faster, and more fairly.</p>
              <h2 className="text-xl font-semibold text-surface-900">The Problem with Traditional Screening</h2>
              <p>Traditional resume screening relies on keyword matching and subjective evaluation. A recruiter spending 6-8 seconds per resume can't possibly evaluate the nuanced match between a candidate's experience and a role's requirements. This leads to qualified candidates being overlooked and poor fits advancing.</p>
              <h2 className="text-xl font-semibold text-surface-900">How AI Changes the Game</h2>
              <p>AI-powered screening — when done right — reads every resume thoroughly, evaluates candidates against specific criteria, and provides evidence-based recommendations. The key phrase here is "when done right." Not all AI recruitment tools are created equal.</p>
              <h2 className="text-xl font-semibold text-surface-900">The Evidence-Based Approach</h2>
              <p>At Static Global, we believe AI screening should be transparent. Every recommendation should cite specific evidence from the candidate's resume. Recruiters should be able to verify why a candidate scored the way they did, and candidates should know that AI was involved in their evaluation.</p>
              <h2 className="text-xl font-semibold text-surface-900">Looking Ahead</h2>
              <p>The future of AI in recruitment isn't about replacing recruiters — it's about giving them better tools to make more informed decisions. The organizations that embrace transparent, evidence-based AI will have a significant advantage in the war for talent.</p>
            </div>
          </div>
        </div>
      </article>
    </PublicLayout>
  );
}

export function ResourcesPage() {
  return (
    <PublicLayout>
      <section className="pt-32 pb-16 bg-gradient-to-b from-surface-50 to-white"><div className="container-wide text-center"><span className="badge-primary mb-4">Resources</span><h1 className="text-4xl md:text-5xl font-display font-bold text-surface-950 mb-6">Learning Center</h1><p className="text-lg text-surface-500">Guides, whitepapers, and resources to help you get the most from AI recruitment.</p></div></section>
      <section className="pb-24"><div className="container-wide grid md:grid-cols-3 gap-6">{[
        { title: 'Getting Started Guide', desc: 'Everything you need to set up Static Global and start screening.', type: 'Guide', icon: FileSearch },
        { title: 'AI Screening Best Practices', desc: 'How to configure AI screening criteria for best results.', type: 'Whitepaper', icon: Brain },
        { title: 'API Documentation', desc: 'Complete reference for our REST API v1.', type: 'Docs', icon: Settings },
        { title: 'ROI Calculator', desc: 'Calculate your expected time and cost savings.', type: 'Tool', icon: BarChart3 },
        { title: 'Compliance Checklist', desc: 'Ensure your AI recruitment process meets regulations.', type: 'Checklist', icon: Shield },
        { title: 'Case Studies', desc: 'See how companies are succeeding with Static Global.', type: 'Case Study', icon: TrendingUp },
      ].map((r, i) => { const Icon = r.icon; return (
        <div key={i} className="card-hover p-6"><span className="badge-neutral mb-3">{r.type}</span><Icon className="w-8 h-8 text-brand-500 mb-3" /><h3 className="text-lg font-semibold text-surface-900 mb-2">{r.title}</h3><p className="text-sm text-surface-500 mb-4">{r.desc}</p><button className="btn-ghost text-sm text-brand-600">Read More →</button></div>
      ); })}</div></section>
    </PublicLayout>
  );
}

export function IntegrationsPage() {
  return (
    <PublicLayout>
      <section className="pt-32 pb-16 bg-gradient-to-b from-surface-50 to-white"><div className="container-wide text-center"><span className="badge-primary mb-4">Integrations</span><h1 className="text-4xl md:text-5xl font-display font-bold text-surface-950 mb-6">Connect with your tools</h1><p className="text-lg text-surface-500">Static Global integrates with the tools you already use.</p></div></section>
      <section className="pb-24"><div className="container-wide grid grid-cols-2 md:grid-cols-4 gap-6">{['Slack', 'Google Workspace', 'Microsoft Teams', 'LinkedIn', 'Greenhouse', 'Lever', 'Workday', 'Zapier', 'Calendly', 'Zoom', 'Jira', 'Salesforce'].map((name, i) => (
        <div key={i} className="card-hover p-6 text-center"><div className="w-12 h-12 rounded-xl bg-surface-100 flex items-center justify-center mx-auto mb-3 text-lg font-bold text-surface-400">{name[0]}</div><h3 className="font-medium text-surface-900 text-sm">{name}</h3><span className="badge-success mt-2 text-[10px]">Available</span></div>
      ))}</div></section>
    </PublicLayout>
  );
}

export function SecurityPage() {
  return (
    <PublicLayout>
      <section className="pt-32 pb-16 bg-gradient-to-b from-surface-50 to-white"><div className="container-wide text-center"><span className="badge-primary mb-4">Security</span><h1 className="text-4xl md:text-5xl font-display font-bold text-surface-950 mb-6">Enterprise-grade security</h1><p className="text-lg text-surface-500">Your data security is our top priority. We implement industry-leading security practices.</p></div></section>
      <section className="pb-24"><div className="container-wide grid md:grid-cols-2 lg:grid-cols-3 gap-6">{[
        { title: 'SOC 2 Type II', desc: 'Independently audited security controls and processes.' },
        { title: 'Data Encryption', desc: 'AES-256 encryption at rest, TLS 1.3 in transit.' },
        { title: 'GDPR Compliant', desc: 'Full compliance with European data protection regulations.' },
        { title: 'Role-Based Access', desc: 'Granular permissions and tenant-level data isolation.' },
        { title: 'Audit Logging', desc: 'Comprehensive audit trail for all platform actions.' },
        { title: 'Penetration Testing', desc: 'Regular third-party security assessments.' },
      ].map((s, i) => (
        <div key={i} className="card p-6"><Shield className="w-8 h-8 text-brand-500 mb-3" /><h3 className="font-semibold text-surface-900 mb-2">{s.title}</h3><p className="text-sm text-surface-500">{s.desc}</p></div>
      ))}</div></section>
    </PublicLayout>
  );
}

export function TrustPage() {
  return (
    <PublicLayout>
      <section className="pt-32 pb-16 bg-gradient-to-b from-surface-50 to-white"><div className="container-wide text-center"><span className="badge-primary mb-4">Trust Center</span><h1 className="text-4xl md:text-5xl font-display font-bold text-surface-950 mb-6">Built on trust & transparency</h1></div></section>
      <section className="pb-24"><div className="container-tight space-y-8">{[
        { title: 'Security', desc: 'SOC 2 Type II certified. AES-256 encryption. Regular penetration testing.', link: '/security' },
        { title: 'Privacy', desc: 'GDPR-compliant data handling. Configurable retention. Candidate data rights.', link: '/legal/privacy' },
        { title: 'AI Transparency', desc: 'Full disclosure of AI usage. Evidence-based screening. Human oversight.', link: '/legal/ai-transparency' },
        { title: 'Compliance', desc: 'Regular audits, compliance certifications, and regulatory alignment.', link: '/legal/terms' },
      ].map((t, i) => (
        <Link key={i} to={t.link} className="card-interactive p-6 flex items-center justify-between"><div><h3 className="text-lg font-semibold text-surface-900 mb-1">{t.title}</h3><p className="text-sm text-surface-500">{t.desc}</p></div><ArrowRight className="w-5 h-5 text-surface-400 shrink-0" /></Link>
      ))}</div></section>
    </PublicLayout>
  );
}

export function HelpPage() {
  return (
    <PublicLayout>
      <section className="pt-32 pb-16 bg-gradient-to-b from-surface-50 to-white"><div className="container-wide text-center"><span className="badge-primary mb-4">Help Center</span><h1 className="text-4xl md:text-5xl font-display font-bold text-surface-950 mb-6">How can we help?</h1>
        <div className="max-w-xl mx-auto mt-8"><div className="flex items-center bg-white border border-surface-300 rounded-xl px-4 py-3 shadow-sm"><Search className="w-5 h-5 text-surface-400 mr-3" /><input className="bg-transparent outline-none w-full text-sm" placeholder="Search for help articles..." /></div></div>
      </div></section>
      <section className="pb-24"><div className="container-wide grid md:grid-cols-3 gap-6">{[
        { title: 'Getting Started', desc: 'Set up your account and start recruiting.', count: '12 articles' },
        { title: 'AI Screening', desc: 'Learn how to configure and use AI screening.', count: '8 articles' },
        { title: 'Job Management', desc: 'Create, publish, and manage job listings.', count: '10 articles' },
        { title: 'Candidate Management', desc: 'Track and manage your candidate pipeline.', count: '9 articles' },
        { title: 'Assessments', desc: 'Create and manage candidate assessments.', count: '6 articles' },
        { title: 'Account & Billing', desc: 'Manage your account, team, and billing.', count: '7 articles' },
      ].map((c, i) => (
        <Link key={i} to="/help/getting-started" className="card-interactive p-6"><h3 className="font-semibold text-surface-900 mb-2">{c.title}</h3><p className="text-sm text-surface-500 mb-3">{c.desc}</p><span className="text-xs text-brand-600">{c.count}</span></Link>
      ))}</div></section>
    </PublicLayout>
  );
}

export function HelpArticlePage() {
  return (
    <PublicLayout>
      <section className="pt-32 pb-24"><div className="container-tight">
        <Link to="/help" className="text-sm text-brand-600 hover:underline mb-6 inline-block">← Back to Help Center</Link>
        <h1 className="text-3xl font-display font-bold text-surface-950 mb-4">Getting Started with Static Global</h1>
        <div className="card p-8 space-y-6 text-surface-600 leading-relaxed">
          <h2 className="text-xl font-semibold text-surface-900">Step 1: Create Your Account</h2>
          <p>Visit the signup page and create your account with your work email. You'll receive a verification email to confirm your address.</p>
          <h2 className="text-xl font-semibold text-surface-900">Step 2: Set Up Your Organization</h2>
          <p>After verifying your email, you'll be guided through the onboarding process to set up your organization, invite team members, and configure your preferences.</p>
          <h2 className="text-xl font-semibold text-surface-900">Step 3: Configure AI Settings</h2>
          <p>As an admin, you can configure the AI engine including model selection, screening preferences, and usage limits from Settings → AI Settings.</p>
          <h2 className="text-xl font-semibold text-surface-900">Step 4: Create Your First Job</h2>
          <p>Navigate to Jobs → New Job to create your first job listing. Claude will help you draft the description and extract screening criteria.</p>
        </div>
      </div></section>
    </PublicLayout>
  );
}

export function StatusPage() {
  return (
    <PublicLayout>
      <section className="pt-32 pb-24"><div className="container-tight text-center">
        <h1 className="text-4xl font-display font-bold text-surface-950 mb-4">System Status</h1>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success-50 border border-success-200 text-success-700 font-medium mb-12"><span className="w-2.5 h-2.5 rounded-full bg-success-500 animate-pulse" />All Systems Operational</div>
        <div className="space-y-3 text-left">{[
          { name: 'Web Application', status: 'Operational' }, { name: 'API', status: 'Operational' }, { name: 'AI Engine (Claude)', status: 'Operational' },
          { name: 'Database', status: 'Operational' }, { name: 'File Storage', status: 'Operational' }, { name: 'Email Service', status: 'Operational' },
        ].map((s, i) => (
          <div key={i} className="card p-4 flex items-center justify-between"><span className="font-medium text-surface-900 text-sm">{s.name}</span><span className="badge-success">{s.status}</span></div>
        ))}</div>
      </div></section>
    </PublicLayout>
  );
}

// Public Jobs Board
export function PublicJobsPage() {
  const { mockJobs } = require('../../lib/mock-data');
  return (
    <PublicLayout>
      <section className="pt-32 pb-16 bg-gradient-to-b from-brand-50/30 to-white"><div className="container-wide text-center">
        <h1 className="text-4xl md:text-5xl font-display font-bold text-surface-950 mb-6">Open Positions</h1>
        <p className="text-lg text-surface-500 mb-8">Join innovative companies hiring with AI-powered recruitment.</p>
        <div className="max-w-xl mx-auto"><div className="flex items-center bg-white border border-surface-300 rounded-xl px-4 py-3 shadow-sm"><Search className="w-5 h-5 text-surface-400 mr-3" /><input className="bg-transparent outline-none w-full text-sm" placeholder="Search jobs..." /></div></div>
      </div></section>
      <section className="pb-24"><div className="container-wide max-w-3xl mx-auto space-y-4">{mockJobs.filter(j => j.status === 'Active').map(job => (
        <Link key={job.id} to={`/jobs/${job.slug}`} className="card-interactive p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div><h3 className="text-lg font-semibold text-surface-900">{job.title}</h3><div className="flex items-center gap-3 mt-1 text-sm text-surface-500"><span>{job.department}</span><span>·</span><span>{job.location}</span><span>·</span><span>{job.type}</span></div></div>
          <div className="flex items-center gap-3"><span className="badge-primary">{job.salary}</span><ArrowRight className="w-4 h-4 text-surface-400" /></div>
        </Link>
      ))}</div></section>
    </PublicLayout>
  );
}

export function PublicJobDetailPage() {
  return (
    <PublicLayout>
      <section className="pt-32 pb-24"><div className="container-tight">
        <Link to="/jobs" className="text-sm text-brand-600 hover:underline mb-6 inline-block">← All Jobs</Link>
        <div className="card p-8">
          <div className="flex items-start justify-between mb-6"><div><h1 className="text-2xl md:text-3xl font-display font-bold text-surface-950 mb-2">Senior Frontend Engineer</h1><div className="flex items-center gap-3 text-sm text-surface-500"><span>Engineering</span><span>·</span><span>San Francisco, CA</span><span>·</span><span>Full-time</span></div></div><Link to="/jobs/senior-frontend-engineer/apply" className="btn-primary">Apply Now</Link></div>
          <div className="space-y-6 text-surface-600 leading-relaxed">
            <div><h3 className="text-lg font-semibold text-surface-900 mb-3">About the Role</h3><p>We are looking for a Senior Frontend Engineer to lead our web application development. You will work with cutting-edge technologies and AI-powered features to build the future of recruitment.</p></div>
            <div><h3 className="text-lg font-semibold text-surface-900 mb-3">Requirements</h3><ul className="space-y-2">{['5+ years React experience', 'TypeScript proficiency', 'State management expertise', 'CI/CD knowledge', 'Excellent communication skills'].map((r, i) => <li key={i} className="flex items-center gap-2 text-sm"><CheckCircle className="w-4 h-4 text-success-500 shrink-0" />{r}</li>)}</ul></div>
            <div><h3 className="text-lg font-semibold text-surface-900 mb-3">Salary Range</h3><p className="text-lg font-semibold text-brand-600">$180K - $220K</p></div>
            <div><h3 className="text-lg font-semibold text-surface-900 mb-3">Benefits</h3><ul className="space-y-2">{['Health insurance', 'Remote-first', '401k matching', 'Unlimited PTO', 'Learning budget'].map((b, i) => <li key={i} className="flex items-center gap-2 text-sm"><CheckCircle className="w-4 h-4 text-brand-500 shrink-0" />{b}</li>)}</ul></div>
          </div>
          <div className="mt-8 pt-6 border-t border-surface-200 flex items-center justify-between">
            <p className="text-sm text-surface-500 flex items-center gap-2"><Sparkles className="w-4 h-4 text-brand-500" />This position uses AI-powered screening. <Link to="/legal/ai-screening-disclosure" className="text-brand-600 hover:underline">Learn more</Link></p>
            <Link to="/jobs/senior-frontend-engineer/apply" className="btn-primary">Apply Now <ArrowRight className="w-4 h-4" /></Link>
          </div>
        </div>
      </div></section>
    </PublicLayout>
  );
}

export function JobApplyPage() {
  return (
    <PublicLayout>
      <section className="pt-32 pb-24"><div className="container-tight">
        <Link to="/jobs/senior-frontend-engineer" className="text-sm text-brand-600 hover:underline mb-6 inline-block">← Back to Job</Link>
        <h1 className="text-3xl font-display font-bold text-surface-950 mb-2">Apply for Senior Frontend Engineer</h1>
        <p className="text-surface-500 mb-8">Complete the form below to submit your application.</p>
        <div className="card p-8">
          <div className="bg-brand-50 rounded-xl p-4 mb-6 flex items-start gap-3"><Sparkles className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" /><div><p className="text-sm font-medium text-brand-800">AI-Powered Screening</p><p className="text-xs text-brand-600 mt-0.5">Your application may be processed by AI (Anthropic Claude) for screening purposes. <Link to="/legal/ai-screening-disclosure" className="underline">Learn more about our AI screening process.</Link></p></div></div>
          <form className="space-y-5">
            <div className="grid grid-cols-2 gap-4"><div><label className="label">First Name *</label><input className="input" placeholder="John" /></div><div><label className="label">Last Name *</label><input className="input" placeholder="Smith" /></div></div>
            <div><label className="label">Email *</label><input className="input" type="email" placeholder="john@email.com" /></div>
            <div><label className="label">Phone</label><input className="input" type="tel" placeholder="+1 555-000-0000" /></div>
            <div><label className="label">Resume *</label><div className="border-2 border-dashed border-surface-300 rounded-xl p-8 text-center hover:border-brand-400 transition-colors cursor-pointer"><FileSearch className="w-8 h-8 text-surface-400 mx-auto mb-2" /><p className="text-sm text-surface-600">Drag & drop your resume or <span className="text-brand-600 font-medium">browse</span></p><p className="text-xs text-surface-400 mt-1">PDF, DOCX up to 10MB</p></div></div>
            <div><label className="label">Cover Letter (Optional)</label><textarea className="textarea" rows="5" placeholder="Tell us why you're interested in this role..." /></div>
            <div><label className="label">LinkedIn Profile</label><input className="input" placeholder="https://linkedin.com/in/yourprofile" /></div>
            <div><label className="label">Portfolio/Website</label><input className="input" placeholder="https://yourwebsite.com" /></div>
            <div className="bg-surface-50 rounded-xl p-4"><label className="flex items-start gap-3 cursor-pointer"><input type="checkbox" className="mt-1 w-4 h-4 rounded border-surface-300 text-brand-500 focus:ring-brand-500" /><span className="text-sm text-surface-600">I consent to having my application processed using AI screening as described in the <Link to="/legal/ai-screening-disclosure" className="text-brand-600 hover:underline">AI Screening Disclosure</Link> and agree to the <Link to="/legal/privacy" className="text-brand-600 hover:underline">Privacy Policy</Link>.</span></label></div>
            <Link to="/application/submitted" className="btn-primary w-full btn-lg">Submit Application</Link>
          </form>
        </div>
      </div></section>
    </PublicLayout>
  );
}

export function ApplicationSubmittedPage() {
  return (
    <PublicLayout>
      <section className="pt-32 pb-24"><div className="container-tight text-center">
        <div className="w-20 h-20 rounded-full bg-success-50 flex items-center justify-center mx-auto mb-6"><CheckCircle className="w-10 h-10 text-success-500" /></div>
        <h1 className="text-3xl font-display font-bold text-surface-950 mb-4">Application Submitted!</h1>
        <p className="text-lg text-surface-500 mb-8">Thank you for your application. We'll review it and get back to you soon.</p>
        <div className="card p-6 max-w-md mx-auto text-left space-y-3 mb-8">
          <div className="flex justify-between text-sm"><span className="text-surface-500">Position</span><span className="font-medium text-surface-900">Senior Frontend Engineer</span></div>
          <div className="flex justify-between text-sm"><span className="text-surface-500">Reference</span><span className="font-mono text-surface-900">#APP-2024-1847</span></div>
          <div className="flex justify-between text-sm"><span className="text-surface-500">Status</span><span className="badge-success">Received</span></div>
        </div>
        <div className="flex justify-center gap-4"><Link to="/jobs" className="btn-outline">Browse More Jobs</Link><Link to="/application/status/abc123" className="btn-primary">Track Application</Link></div>
      </div></section>
    </PublicLayout>
  );
}

export function ApplicationStatusPage() {
  return (
    <PublicLayout>
      <section className="pt-32 pb-24"><div className="container-tight">
        <h1 className="text-3xl font-display font-bold text-surface-950 mb-8">Application Status</h1>
        <div className="card p-8">
          <div className="flex items-center justify-between mb-8"><div><h2 className="text-xl font-semibold text-surface-900">Senior Frontend Engineer</h2><p className="text-sm text-surface-500">Reference: #APP-2024-1847</p></div><span className="badge-info">Under Review</span></div>
          <div className="space-y-6">
            {[
              { step: 'Application Received', status: 'complete', date: 'Oct 10, 2024' },
              { step: 'AI Screening', status: 'complete', date: 'Oct 10, 2024' },
              { step: 'Recruiter Review', status: 'current', date: 'In progress' },
              { step: 'Interview', status: 'pending', date: '' },
              { step: 'Decision', status: 'pending', date: '' },
            ].map((s, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className={cn('w-8 h-8 rounded-full flex items-center justify-center shrink-0 text-sm font-bold',
                  s.status === 'complete' ? 'bg-success-500 text-white' :
                  s.status === 'current' ? 'bg-brand-500 text-white animate-pulse' :
                  'bg-surface-200 text-surface-500')}>{s.status === 'complete' ? '✓' : i + 1}</div>
                <div className="flex-1"><p className={cn('text-sm font-medium', s.status === 'pending' ? 'text-surface-400' : 'text-surface-900')}>{s.step}</p>{s.date && <p className="text-xs text-surface-500">{s.date}</p>}</div>
              </div>
            ))}
          </div>
        </div>
      </div></section>
    </PublicLayout>
  );
}
