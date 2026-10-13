import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Brain, Sparkles, Shield, BarChart3, Zap, CheckCircle, ArrowRight, 
  Star, Users, Building2, Globe, TrendingUp, Eye, FileSearch, 
  ClipboardCheck, MessageSquare, ChevronRight, Play
} from 'lucide-react';
import { PublicLayout } from '../../components/layout/PublicLayout';
import { mockPricingPlans } from '../../lib/mock-data';

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-50/50 via-white to-white" />
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-brand-200/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-200/20 rounded-full blur-[150px]" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
      </div>

      <div className="container-wide">
        <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-4xl mx-auto text-center">
          <motion.div variants={fadeUp} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              Powered by Anthropic Claude
              <ChevronRight className="w-3.5 h-3.5" />
            </span>
          </motion.div>
          
          <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-surface-950 leading-[1.1] mb-6">
            Recruit smarter with
            <span className="block text-gradient mt-1">AI-powered intelligence</span>
          </motion.h1>
          
          <motion.p variants={fadeUp} className="text-lg md:text-xl text-surface-500 max-w-2xl mx-auto leading-relaxed mb-10">
            Static Global transforms your hiring with Claude-powered resume screening, evidence-based candidate matching, and transparent AI insights that recruiters can trust.
          </motion.p>
          
          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/signup" className="btn-primary btn-lg w-full sm:w-auto">
              Start Free Trial <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/demo" className="btn-outline btn-lg w-full sm:w-auto">
              <Play className="w-4 h-4" /> Watch Demo
            </Link>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-12 flex items-center justify-center gap-8 text-sm text-surface-400">
            <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-success-500" /> No credit card required</span>
            <span className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-success-500" /> 14-day free trial</span>
            <span className="hidden sm:flex items-center gap-1.5"><CheckCircle className="w-4 h-4 text-success-500" /> SOC 2 compliant</span>
          </motion.div>
        </motion.div>

        {/* Dashboard Preview */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-16 max-w-5xl mx-auto"
        >
          <div className="relative rounded-2xl bg-white border border-surface-200 shadow-2xl shadow-brand-500/5 overflow-hidden">
            <div className="bg-surface-50 border-b border-surface-200 px-4 py-3 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="bg-white rounded-lg px-4 py-1 text-xs text-surface-400 border border-surface-200">app.staticglobal.com/dashboard</div>
              </div>
            </div>
            <div className="p-6 bg-gradient-to-b from-surface-50 to-white">
              <div className="grid grid-cols-4 gap-4 mb-6">
                {[
                  { label: 'Active Jobs', value: '12', change: '+3 this week', color: 'text-brand-600' },
                  { label: 'Candidates', value: '284', change: '+47 new', color: 'text-purple-600' },
                  { label: 'AI Screenings', value: '156', change: '94% accuracy', color: 'text-success-600' },
                  { label: 'Time to Hire', value: '18d', change: '-5 days avg', color: 'text-warning-600' },
                ].map((stat, i) => (
                  <div key={i} className="bg-white rounded-xl border border-surface-200 p-4">
                    <p className="text-xs text-surface-500 mb-1">{stat.label}</p>
                    <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
                    <p className="text-[10px] text-surface-400 mt-1">{stat.change}</p>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2 bg-white rounded-xl border border-surface-200 p-4">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-sm font-semibold text-surface-900">AI Screening Results</h4>
                    <span className="badge-success">Live</span>
                  </div>
                  <div className="space-y-3">
                    {['Alex Johnson — 92% match', 'Maria Garcia — 88% match', 'James Wilson — 85% match'].map((item, i) => (
                      <div key={i} className="flex items-center justify-between py-2 border-b border-surface-50 last:border-0">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center text-xs font-bold text-brand-700">{item[0]}</div>
                          <span className="text-sm text-surface-700">{item}</span>
                        </div>
                        <Brain className="w-4 h-4 text-brand-500" />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-white rounded-xl border border-surface-200 p-4">
                  <h4 className="text-sm font-semibold text-surface-900 mb-4">Pipeline</h4>
                  <div className="space-y-3">
                    {[
                      { stage: 'New', count: 15, color: 'bg-surface-400' },
                      { stage: 'Screening', count: 8, color: 'bg-brand-500' },
                      { stage: 'Interview', count: 4, color: 'bg-purple-500' },
                      { stage: 'Offer', count: 2, color: 'bg-success-500' },
                    ].map((s, i) => (
                      <div key={i}>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-surface-600">{s.stage}</span>
                          <span className="font-medium">{s.count}</span>
                        </div>
                        <div className="progress-bar">
                          <div className={`progress-fill ${s.color}`} style={{ width: `${(s.count / 15) * 100}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function TrustedBy() {
  const logos = ['Anthropic', 'Vercel', 'Stripe', 'Notion', 'Linear', 'Figma'];
  return (
    <section className="py-16 border-y border-surface-100 bg-surface-50/50">
      <div className="container-wide text-center">
        <p className="text-sm text-surface-400 font-medium mb-8 uppercase tracking-wider">Trusted by innovative teams worldwide</p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {logos.map(logo => (
            <span key={logo} className="text-xl font-display font-bold text-surface-300 hover:text-surface-500 transition-colors cursor-default">{logo}</span>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features() {
  const features = [
    { icon: Brain, title: 'Claude-Powered Screening', desc: 'Evidence-based resume analysis with criterion-by-criterion evaluation. Every recommendation cites specific resume evidence.', color: 'from-brand-400 to-brand-600' },
    { icon: FileSearch, title: 'Resume Intelligence', desc: 'Extract structured data from any resume format. Skills, experience, education — all verified against the source document.', color: 'from-purple-400 to-purple-600' },
    { icon: ClipboardCheck, title: 'Smart Assessments', desc: 'Generate role-specific technical and behavioral assessments with evaluation rubrics mapped to job requirements.', color: 'from-green-400 to-emerald-600' },
    { icon: MessageSquare, title: 'Interview Intelligence', desc: 'Structured interview guides, consistent follow-up questions, and organized feedback aligned to job criteria.', color: 'from-amber-400 to-orange-600' },
    { icon: Eye, title: 'Transparent AI', desc: 'Every screening decision shows its reasoning. Candidates and recruiters can inspect evidence, limitations, and confidence levels.', color: 'from-pink-400 to-rose-600' },
    { icon: Shield, title: 'Responsible & Compliant', desc: 'Human review for all consequential decisions. GDPR-ready consent, data retention controls, and AI transparency disclosures.', color: 'from-indigo-400 to-blue-600' },
  ];

  return (
    <section className="section bg-white">
      <div className="container-wide">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="text-center mb-16">
          <motion.div variants={fadeUp}>
            <span className="badge-primary mb-4">Features</span>
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-surface-950 mb-4">
            AI that recruiters can actually trust
          </motion.h2>
          <motion.p variants={fadeUp} className="text-lg text-surface-500 max-w-2xl mx-auto">
            Every feature is built around evidence, transparency, and human oversight. No black boxes, no unexplainable scores.
          </motion.p>
        </motion.div>

        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <motion.div key={i} variants={fadeUp} className="card-hover p-6 group">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-surface-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-surface-500 leading-relaxed">{feature.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { step: '01', title: 'Post a Job', desc: 'Claude helps you draft clear, inclusive job descriptions and automatically extracts screening criteria.', icon: Building2 },
    { step: '02', title: 'AI Screens Candidates', desc: 'Every application is evaluated against your criteria with evidence-based analysis — not keyword matching.', icon: Brain },
    { step: '03', title: 'Review with Evidence', desc: 'See exactly what Claude found (and didn\'t find) in each resume. Make informed decisions with full transparency.', icon: Eye },
    { step: '04', title: 'Hire with Confidence', desc: 'Move top candidates through assessments and interviews with AI-generated guides and structured feedback.', icon: CheckCircle },
  ];

  return (
    <section className="section bg-surface-50">
      <div className="container-wide">
        <div className="text-center mb-16">
          <span className="badge-purple mb-4">How It Works</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-surface-950 mb-4">From posting to hiring in four steps</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="relative">
                <div className="text-6xl font-display font-bold text-surface-100 mb-4">{step.step}</div>
                <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5 text-brand-600" />
                </div>
                <h3 className="text-lg font-semibold text-surface-900 mb-2">{step.title}</h3>
                <p className="text-sm text-surface-500 leading-relaxed">{step.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { value: '94%', label: 'Screening Accuracy', icon: TrendingUp },
    { value: '65%', label: 'Faster Time-to-Hire', icon: Zap },
    { value: '2,400+', label: 'Companies Trust Us', icon: Building2 },
    { value: '1.2M', label: 'Candidates Processed', icon: Users },
  ];

  return (
    <section className="py-20 bg-surface-950">
      <div className="container-wide">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="text-center">
                <Icon className="w-8 h-8 text-brand-400 mx-auto mb-3" />
                <p className="text-3xl md:text-4xl font-display font-bold text-white mb-1">{stat.value}</p>
                <p className="text-sm text-surface-400">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const testimonials = [
    { quote: "Static Global\'s AI screening saved our team 30+ hours per week. The evidence-based approach gives us confidence in every hiring decision.", name: 'Jennifer Lee', role: 'VP of Talent, SeriesB Inc.', rating: 5 },
    { quote: "Finally, an AI recruitment tool that shows its work. We can see exactly why a candidate was recommended, which builds trust with our hiring managers.", name: 'Marcus Rivera', role: 'Head of HR, CloudFirst', rating: 5 },
    { quote: "The Claude-powered screening is incredibly thorough. It catches things human screeners might miss while being transparent about what it doesn\'t know.", name: 'Priya Sharma', role: 'Recruiting Lead, DataScale', rating: 5 },
  ];

  return (
    <section className="section bg-white">
      <div className="container-wide">
        <div className="text-center mb-16">
          <span className="badge-info mb-4">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-surface-950">Loved by recruiting teams</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="card p-6">
              <div className="flex gap-1 mb-4">
                {Array(t.rating).fill(0).map((_, j) => <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
              </div>
              <p className="text-surface-600 text-sm leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="avatar avatar-md bg-surface-100 text-surface-600">{t.name.split(' ').map(n => n[0]).join('')}</div>
                <div>
                  <p className="text-sm font-semibold text-surface-900">{t.name}</p>
                  <p className="text-xs text-surface-500">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="section bg-gradient-to-br from-brand-600 via-brand-700 to-purple-700 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      <div className="container-tight text-center relative">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6">
          Ready to transform your hiring?
        </h2>
        <p className="text-lg text-brand-100 max-w-xl mx-auto mb-10">
          Join thousands of companies using AI-powered recruitment to find better candidates faster.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/signup" className="btn btn-lg bg-white text-brand-700 hover:bg-brand-50 shadow-lg">
            Get Started Free <ArrowRight className="w-4 h-4" />
          </Link>
          <Link to="/contact" className="btn btn-lg bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur">
            Talk to Sales
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <PublicLayout>
      <Hero />
      <TrustedBy />
      <Features />
      <HowItWorks />
      <Stats />
      <Testimonials />
      <CTA />
    </PublicLayout>
  );
}
